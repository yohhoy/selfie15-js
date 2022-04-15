"use strict";
import './style.css';

// configuration
const NSPLIT = 4;   // number of split panels
const FLIP = true;  // flip horizontal for inner camera?

// utilities
const HOLE_ID = NSPLIT ** 2 - 1;
const idx2x = idx => ((idx % NSPLIT) | 0);  // Number
const idx2y = idx => ((idx / NSPLIT) | 0);  // Number
const randInt = n => Math.floor(Math.random() * n);
const randChoise = arr => arr[randInt(arr.length)];

const game = {
    canvas_: undefined,
    video_: undefined,
    app_: undefined,
    panelSprites_: [],
    panelSize_: 0,
    panelPos_: [],

    init: function (canvas) {
        this.canvas_ = canvas;
        // initialize video element for WebCam
        const video = (this.video_ = document.createElement('video'));
        video.autoplay = true;
        video.muted = true;
        video.playsInline = true;
        navigator.mediaDevices.getUserMedia({
            video: {
                width: { ideal: 640 },
                height: { ideal: 480 },
                facingMode: 'user',
            },
            audio: false,
        }).then(stream => {
            video.srcObject = stream;
            video.play();
        }).catch(e => console.log(e));
        video.addEventListener('canplay', () => {
            this.initGame(10);
            video.hidden = true;
        });
    },
    // initalize game
    initGame: function (nShuffle) {
        // initalize canvas with PixiJS
        const size = Math.min(this.video_.videoWidth, this.video_.videoHeight);
        this.app_ = new PIXI.Application({
            width: size, height: size, resolution: 1,
            view: this.canvas_,
        });
        this.panelSprites_ = this.createSprites(PIXI.BaseTexture.from(this.video_));
        this.panelSprites_.forEach(s => this.app_.stage.addChild(s));
        // shuffle panels
        this.panelPos_ = this.shufflePanels([...Array(NSPLIT ** 2).keys()], nShuffle);
        this.layoutPanels(this.panelPos_, true);
        // register panel handler
        this.panelSprites_.forEach((s, id) => {
            s.interactive = true;
            s.buttonMode = true;
            s.on('pointerdown', () => this.movePanel(this.panelPos_, id));
        });
    },
    // create list of sprites from video texture
    createSprites: function (baseTexture) {
        const [width, height] = [baseTexture.width, baseTexture.height];
        const boardSize = Math.min(width, height);
        const size = (this.panelSize_ = boardSize / NSPLIT);
        const offsetX = Math.max(0, width - boardSize) / 2;
        const offsetY = Math.max(0, height - boardSize) / 2;
        return Array.from(Array(NSPLIT ** 2), (_, i) => {
            const posX = offsetX + (FLIP ? (NSPLIT - 1 - idx2x(i)) : idx2x(i)) * size;
            const posY = offsetY + idx2y(i) * size;
            const frame = new PIXI.Rectangle(posX, posY, size, size);
            const s = PIXI.Sprite.from(new PIXI.Texture(baseTexture, frame));
            if (FLIP) {
                s.anchor.x = 1;
                s.scale.x *= -1;
            }
            return s;
        });
    },
    // lauout panel sprite according to position list
    layoutPanels: function (posList, hole) {
        console.log(`layoutPanels: ${posList}`);
        this.panelSprites_.forEach((s, i) => {
            const idx = posList.indexOf(i);
            s.position.x = idx2x(idx) * this.panelSize_;
            s.position.y = idx2y(idx) * this.panelSize_;
        });
        // set visibity of last panel
        this.panelSprites_.slice(-1)[0].visible = !hole;
    },
    // shuffle panels with some iteration
    shufflePanels: function (posList, iter) {
        const BOTTOM_ROW = NSPLIT ** 2 - NSPLIT;
        let holeIdx = posList.indexOf(HOLE_ID);
        let peerIdx, lastMove = -1;
        for (; 0 < iter; --iter, holeIdx = peerIdx) {
            const candIdx = [
                (holeIdx < NSPLIT) ? -1 : (holeIdx - NSPLIT),       // up
                (holeIdx % NSPLIT == 0) ? -1 : (holeIdx - 1),       // left
                (BOTTOM_ROW <= holeIdx) ? -1 : (holeIdx + NSPLIT),  // down
                ((holeIdx + 1) % NSPLIT == 0) ? -1 : (holeIdx + 1), // right
            ];
            if (lastMove != -1) {
                candIdx[lastMove ^ 2] = -1; // drop 'reverse' move candidate
            }
            peerIdx = randChoise(candIdx.filter(n => (0 <= n)));
            [posList[holeIdx], posList[peerIdx]] = [posList[peerIdx], posList[holeIdx]];
            lastMove = candIdx.indexOf(peerIdx);
            console.log(`step#${iter}: ${"ULDR"[lastMove]} ` +
                `(${idx2x(holeIdx)},${idx2y(holeIdx)})->(${idx2x(peerIdx)},${idx2y(peerIdx)})`);
        }
        return posList;
    },
    // move panel to hole (when we can)
    movePanel: function(posList, id) {
        const currIdx = posList.indexOf(id);
        const holeIdx = posList.indexOf(HOLE_ID);
        const neighborH = Math.abs(currIdx - holeIdx) == 1 && idx2y(currIdx) == idx2y(holeIdx);
        const neighborV = Math.abs(currIdx - holeIdx) == NSPLIT;
        if (neighborH || neighborV) {
            [posList[holeIdx], posList[currIdx]] = [posList[currIdx], posList[holeIdx]];
            this.layoutPanels(posList, true);
        }
    },
};

game.init(document.getElementById('canvas'));
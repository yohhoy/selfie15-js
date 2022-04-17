(()=>{"use strict";var e={790:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(933),r=n.n(i),a=n(476),o=n.n(a)()(r());o.push([e.id,"body {\n    background: lightgray;\n}\n\nh1 {\n    margin: 0.2em auto;\n}\n\n.main {\n    max-width: 100%;\n    margin: 0 auto;\n    text-align: center;\n}",""]);const s=o},476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);i&&o[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},933:e=>{e.exports=function(e){return e[1]}},892:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var a={},o=[],s=0;s<e.length;s++){var c=e[s],l=i.base?c[0]+i.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=r(h,i);i.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=i(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var s=n(a[o]);t[s].references--}for(var c=i(e,r),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},311:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},60:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},192:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},760:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},865:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={id:i,exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(892),t=n.n(e),i=n(760),r=n.n(i),a=n(311),o=n.n(a),s=n(192),c=n.n(s),l=n(60),d=n.n(l),p=n(865),u=n.n(p),h=n(790),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const v=e=>e%4|0,m=e=>e/4|0,y={canvas_:void 0,video_:void 0,app_:void 0,panelSprites_:[],panelSize_:0,panelPos_:[],init:function(e){this.canvas_=e;const t=this.video_=document.createElement("video");t.autoplay=!0,t.muted=!0,t.playsInline=!0,navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480},facingMode:"user"},audio:!1}).then((e=>{t.srcObject=e,t.play()})).catch((e=>console.log(e))),t.addEventListener("canplay",(()=>{this.initGame(10),this.resize(),window.onresize=()=>y.resize(),t.hidden=!0}))},initGame:function(e){const t=Math.min(this.video_.videoWidth,this.video_.videoHeight);this.app_=new PIXI.Application({width:t,height:t,resolution:1,view:this.canvas_}),this.panelSprites_=this.createSprites(PIXI.BaseTexture.from(this.video_)),this.panelSprites_.forEach((e=>this.app_.stage.addChild(e))),this.panelPos_=this.shufflePanels([...Array(16).keys()],e),this.layoutPanels(this.panelPos_,!0),this.panelSprites_.forEach(((e,t)=>{e.interactive=!0,e.buttonMode=!0,e.on("pointerdown",(()=>this.movePanel(this.panelPos_,t)))}))},createSprites:function(e){const[t,n]=[e.width,e.height],i=Math.min(t,n),r=this.panelSize_=i/4,a=Math.max(0,t-i)/2,o=Math.max(0,n-i)/2;return Array.from(Array(16),((t,n)=>{const i=a+(3-v(n))*r,s=o+m(n)*r,c=new PIXI.Rectangle(i,s,r,r),l=PIXI.Sprite.from(new PIXI.Texture(e,c));return l.anchor.x=1,l.scale.x*=-1,l}))},layoutPanels:function(e,t){this.panelSprites_.forEach(((t,n)=>{const i=e.indexOf(n);t.position.x=v(i)*this.panelSize_,t.position.y=m(i)*this.panelSize_})),this.panelSprites_.slice(-1)[0].visible=!t},shufflePanels:function(e,t){let n,i=e.indexOf(15),r=-1;for(;0<t;--t,i=n){const s=[i<4?-1:i-4,i%4==0?-1:i-1,12<=i?-1:i+4,(i+1)%4==0?-1:i+1];-1!=r&&(s[2^r]=-1),a=s.filter((e=>0<=e)),o=void 0,n=a[(o=a.length,Math.floor(Math.random()*o))],[e[i],e[n]]=[e[n],e[i]],r=s.indexOf(n),console.log(`step#${t}: ${"ULDR"[r]} (${v(i)},${m(i)})->(${v(n)},${m(n)})`)}var a,o;return e},movePanel:function(e,t){const n=e.indexOf(t),i=e.indexOf(15),r=1==Math.abs(n-i)&&m(n)==m(i),a=4==Math.abs(n-i);(r||a)&&([e[i],e[n]]=[e[n],e[i]],this.layoutPanels(e,!0))},resize:function(){const e=Math.min(window.innerWidth,window.innerHeight),t=Math.min(e,2*this.app_.renderer.width);this.app_.renderer.view.style.width=t+"px",this.app_.renderer.view.style.height=t+"px"}};y.init(document.getElementById("canvas"))})()})();
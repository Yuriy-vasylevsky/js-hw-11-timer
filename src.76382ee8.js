parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");const t={startBtn:document.querySelector("button[data-action-start]"),stopBtn:document.querySelector("button[data-action-stop]"),clockface:document.querySelector(".js-clockface"),clockfaceDays:document.querySelector('span[data-value="days"]'),clockfaceHours:document.querySelector('span[data-value="hours"]'),clockfaceMins:document.querySelector('span[data-value="mins"]'),clockfaceSecs:document.querySelector('span[data-value="secs"]')};t.clockfaceDay,console.log(t.clockfaceDay);class e{constructor({onTick:t,targetDate:e}){this.intervalid=null,this.isActive=!1,this.onTick=t,this.targetDate=e,this.init(),console.log(this.targetDate)}init(){const t=this.getTimeComponents(0);this.onTick(t)}start(){if(this.isActive)return;const t=this.targetDate;this.isActive=!0,this.intervalid=setInterval(()=>{this.isActive=!0;const e=Date.now(),s=t-e,c=this.getTimeComponents(s);console.log(c),this.onTick(c)},1e3)}stop(){clearInterval(this.intervalid),this.isActive=!1;const t=this.getTimeComponents(0);this.onTick(t)}pad(t){return String(t).padStart(2,"0")}getTimeComponents(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),sec:this.pad(Math.floor(t%6e4/1e3))}}}const s=new e({selector:"#timer-1",targetDate:new Date("Sept 17, 2021"),onTick:c});function c({days:e,hours:s,mins:c,sec:o}){t.clockfaceDays.textContent=`${e}`,t.clockfaceHours.textContent=`${s}`,t.clockfaceMins.textContent=`${c}`,t.clockfaceSecs.textContent=`${o}`}t.startBtn.addEventListener("click",s.start.bind(s)),t.stopBtn.addEventListener("click",s.stop.bind(s));
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/js-hw-11-timer/src.76382ee8.js.map
/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function(b,c){"object"===typeof exports&&"object"===typeof module?module.exports=c():"function"===typeof define&&define.amd?define([],c):"object"===typeof exports?exports.Typed=c():b.Typed=c()})(this,function(){return function(b){function c(g){if(f[g])return f[g].exports;var k=f[g]={exports:{},id:g,loaded:!1};b[g].call(k.exports,k,k.exports,c);k.loaded=!0;return k.exports}var f={};c.m=b;c.c=f;c.p="";return c(0)}([function(b,c,f){Object.defineProperty(c,"__esModule",{value:!0});var g=function(){function c(a,
d){for(var e=0;e<d.length;e++){var b=d[e];b.enumerable=b.enumerable||!1;b.configurable=!0;"value"in b&&(b.writable=!0);Object.defineProperty(a,b.key,b)}}return function(a,d,e){d&&c(a.prototype,d);e&&c(a,e);return a}}(),k=f(1),l=f(3);f=function(){function b(a,d){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");k.initializer.load(this,d,a);this.begin()}g(b,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||
this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){!this.typingComplete&&this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1);this.options.onDestroy(this)}},{key:"reset",value:function(){var a=0>=arguments.length||
void 0===arguments[0]?!0:arguments[0];clearInterval(this.timeout);this.replaceText("");this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null);this.curLoop=this.arrayPos=this.strPos=0;a&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var a=this;this.options.onBegin(this);this.typingComplete=!1;this.shuffleStringsIfNeeded(this);this.insertCursor();this.bindInputFocusEvents&&this.bindFocusEvents();this.timeout=
setTimeout(function(){a.currentElContent&&0!==a.currentElContent.length?a.backspace(a.currentElContent,a.currentElContent.length):a.typewrite(a.strings[a.sequence[a.arrayPos]],a.strPos)},this.startDelay)}},{key:"typewrite",value:function(a,d){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var b=this.humanizer(this.typeSpeed),c=1;!0===this.pause.status?this.setPauseStatus(a,
d,!0):this.timeout=setTimeout(function(){d=l.htmlParser.typeHtmlChars(a,d,e);var b=0,h=a.substr(d);if("^"===h.charAt(0)&&/^\^\d+/.test(h)){var f=1,h=/\d+/.exec(h)[0],f=f+h.length,b=parseInt(h);e.temporaryPause=!0;e.options.onTypingPaused(e.arrayPos,e);a=a.substring(0,d)+a.substring(d+f);e.toggleBlinking(!0)}if("`"===h.charAt(0)){for(;"`"!==a.substr(d+c).charAt(0)&&!(c++,d+c>a.length););var h=a.substring(0,d),f=a.substring(h.length+1,d+c),g=a.substring(d+c+1);a=h+f+g;c--}e.timeout=setTimeout(function(){e.toggleBlinking(!1);
d>=a.length?e.doneTyping(a,d):e.keepTyping(a,d,c);e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e))},b)},b)}},{key:"keepTyping",value:function(a,d,e){0===d&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));d+=e;e=a.substr(0,d);this.replaceText(e);this.typewrite(a,d)}},{key:"doneTyping",value:function(a,d){var e=this;this.options.onStringTyped(this.arrayPos,this);this.toggleBlinking(!0);if(this.arrayPos===this.strings.length-1&&(this.complete(),
!1===this.loop||this.curLoop===this.loopCount))return;this.timeout=setTimeout(function(){e.backspace(a,d)},this.backDelay)}},{key:"backspace",value:function(a,d){var e=this;if(!0===this.pause.status)this.setPauseStatus(a,d,!1);else{if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var b=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){d=l.htmlParser.backSpaceHtmlChars(a,d,e);var b=a.substr(0,d);e.replaceText(b);if(e.smartBackspace){var c=e.strings[e.arrayPos+1];c&&
b===c.substr(0,d)?e.stopNum=d:e.stopNum=0}d>e.stopNum?(d--,e.backspace(a,d)):d<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],d))},b)}}},{key:"complete",value:function(){this.options.onComplete(this);this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(a,d,e){this.pause.typewrite=e;this.pause.curString=a;this.pause.curStrPos=
d}},{key:"toggleBlinking",value:function(a){this.cursor&&!this.pause.status&&this.cursorBlinking!==a&&((this.cursorBlinking=a)?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink"))}},{key:"humanizer",value:function(a){return Math.round(Math.random()*a/2)+a}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var a=this;this.el.className+=
" "+this.fadeOutClass;this.cursor&&(this.cursor.className+=" "+this.fadeOutClass);return setTimeout(function(){a.arrayPos++;a.replaceText("");a.strings.length>a.arrayPos?a.typewrite(a.strings[a.sequence[a.arrayPos]],0):(a.typewrite(a.strings[0],0),a.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(a){this.attr?this.el.setAttribute(this.attr,a):this.isInput?this.el.value=a:"html"===this.contentType?this.el.innerHTML=a:this.el.textContent=a}},{key:"bindFocusEvents",value:function(){var a=
this;this.isInput&&(this.el.addEventListener("focus",function(d){a.stop()}),this.el.addEventListener("blur",function(d){a.el.value&&0!==a.el.value.length||a.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&!this.cursor&&(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling))}}]);return b}();
c["default"]=f;b.exports=c["default"]},function(b,c,f){Object.defineProperty(c,"__esModule",{value:!0});var g=Object.assign||function(b){for(var a=1;a<arguments.length;a++){var d=arguments[a],e;for(e in d)Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=d[e])}return b},k=function(){function b(a,d){for(var e=0;e<d.length;e++){var c=d[e];c.enumerable=c.enumerable||!1;c.configurable=!0;"value"in c&&(c.writable=!0);Object.defineProperty(a,c.key,c)}}return function(a,d,e){d&&b(a.prototype,d);e&&b(a,e);
return a}}(),l=(b=f(2))&&b.__esModule?b:{"default":b};b=function(){function b(){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");}k(b,[{key:"load",value:function(a,d,e){a.el="string"===typeof e?document.querySelector(e):e;a.options=g({},l["default"],d);a.isInput="input"===a.el.tagName.toLowerCase();a.attr=a.options.attr;a.bindInputFocusEvents=a.options.bindInputFocusEvents;a.showCursor=a.isInput?!1:a.options.showCursor;a.cursorChar=a.options.cursorChar;a.cursorBlinking=
!0;a.elContent=a.attr?a.el.getAttribute(a.attr):a.el.textContent;a.contentType=a.options.contentType;a.typeSpeed=a.options.typeSpeed;a.startDelay=a.options.startDelay;a.backSpeed=a.options.backSpeed;a.smartBackspace=a.options.smartBackspace;a.backDelay=a.options.backDelay;a.fadeOut=a.options.fadeOut;a.fadeOutClass=a.options.fadeOutClass;a.fadeOutDelay=a.options.fadeOutDelay;a.isPaused=!1;a.strings=a.options.strings.map(function(a){return a?a.trim():null});a.stringsElement="string"===typeof a.options.stringsElement?
document.querySelector(a.options.stringsElement):a.options.stringsElement;if(a.stringsElement&&(a.strings=[],a.stringsElement.style.display="none",d=Array.prototype.slice.apply(a.stringsElement.children),e=d.length))for(var b=0;b<e;b+=1)a.strings.push(d[b].innerHTML.trim());a.strPos=0;a.arrayPos=0;a.stopNum=0;a.loop=a.options.loop;a.loopCount=a.options.loopCount;a.curLoop=0;a.shuffle=a.options.shuffle;a.sequence=[];a.pause={status:!1,typewrite:!0,curString:"",curStrPos:0};a.typingComplete=!1;for(b in a.strings)a.sequence[b]=
b;a.currentElContent=this.getCurrentElContent(a);a.autoInsertCss=a.options.autoInsertCss;this.appendAnimationCss(a)}},{key:"getCurrentElContent",value:function(a){var d="";return d=a.attr?a.el.getAttribute(a.attr):a.isInput?a.el.value:"html"===a.contentType?a.el.innerHTML:a.el.textContent}},{key:"appendAnimationCss",value:function(a){if(a.autoInsertCss&&(a.showCursor||a.fadeOut)&&!document.querySelector("[data-typed-js-css]")){var d=document.createElement("style");d.type="text/css";d.setAttribute("data-typed-js-css",
!0);var b="";a.showCursor&&(b+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ");
a.fadeOut&&(b+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ");0!==d.length&&(d.innerHTML=b,document.body.appendChild(d))}}}]);return b}();c["default"]=b;b=new b;c.initializer=b},function(b,c){Object.defineProperty(c,"__esModule",{value:!0});c["default"]={strings:["These are the default values...","You know what you should do?",
"Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:Infinity,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(b){},onComplete:function(b){},preStringTyped:function(b,c){},onStringTyped:function(b,c){},onLastStringBackspaced:function(b){},onTypingPaused:function(b,c){},onTypingResumed:function(b,
c){},onReset:function(b){},onStop:function(b,c){},onStart:function(b,c){},onDestroy:function(b){}};b.exports=c["default"]},function(b,c){Object.defineProperty(c,"__esModule",{value:!0});var f=function(){function b(c,h){for(var a=0;a<h.length;a++){var d=h[a];d.enumerable=d.enumerable||!1;d.configurable=!0;"value"in d&&(d.writable=!0);Object.defineProperty(c,d.key,d)}}return function(c,h,a){h&&b(c.prototype,h);a&&b(c,a);return c}}(),g=function(){function b(){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");
}f(b,[{key:"typeHtmlChars",value:function(b,c,a){if("html"!==a.contentType)return c;a=b.substr(c).charAt(0);if("<"===a||"&"===a){for(var d="",d="<"===a?">":";";b.substr(c+1).charAt(0)!==d&&!(c++,c+1>b.length););c++}return c}},{key:"backSpaceHtmlChars",value:function(b,c,a){if("html"!==a.contentType)return c;a=b.substr(c).charAt(0);if(">"===a||";"===a){for(var d="",d=">"===a?"<":"&";b.substr(c-1).charAt(0)!==d&&!(c--,0>c););c--}return c}}]);return b}();c["default"]=g;g=new g;c.htmlParser=g}])});
function initTyped(b,c){c[0]&&(c=c[0]);return new Typed(c,{strings:b,typeSpeed:101-parseInt(c.getAttribute("data-speed")),backSpeed:101-parseInt(c.getAttribute("data-speed")),loop:!0,backDelay:1E3})}function getDataWordsArr(b){for(var c=parseInt(b.getAttribute("data-words")),f=[],g=1;g<=c;g++){var k="data-word"+g;void 0!==b.getAttribute(k)&&f.push(b.getAttribute(k))}return f}var isBuilder=document.querySelector("html").classList.contains("is-builder"),initedTypes;
isBuilder?$(document).on("add.cards",function(b){0!=$(b.target).find(".typed-text").length&&$(b.target).find(".animated-element").each(function(){initedTypes&&initedTypes.destroy();initedTypes=parseInt($(this).attr("data-words"))?initTyped(getDataWordsArr(this),$(this)):initTyped([$(this).attr("data-word1"),$(this).attr("data-word2"),$(this).attr("data-word3")],$(this))})}).on("changeParameter.cards",function(b,c,f){0!=c.indexOf("animatedWord")&&"typeSpeed"!=c&&"wordsCount"!=c||$(b.target).find(".animated-element").each(function(){initedTypes&&
initedTypes.destroy();initedTypes=parseInt($(this).attr("data-words"))?initTyped(getDataWordsArr(this),$(this)):initTyped([$(this).attr("data-word1"),$(this).attr("data-word2"),$(this).attr("data-word3")],$(this))})}):document.querySelectorAll(".typed-text .animated-element").forEach(function(b){parseInt(b.getAttribute("data-words"))?initTyped(getDataWordsArr(b),b):initTyped([b.getAttribute("data-word1"),b.getAttribute("data-word2"),b.getAttribute("data-word3")],b)});

/*jslint browser: true */
/*jslint node: true */
/*global global, $, ActiveXObject, alignToMasterBottomLeft, appendFragment, BALA, 
Carousel, changeLocation, container, Cookies, debounce, define, 
DISQUS, DoSlide, Draggabilly, earlyDeviceOrientation, earlyDeviceSize, 
earlyDeviceType, earlyFnGetYyyymmdd, earlyHasTouch, 
earlySvgasimgSupport, earlySvgSupport, escape, fetch, findPos, 
fixEnRuTypo, forEach, getHTTP, getKeyValuesFromJSON, IframeLightbox, 
imagePromise, imagesLoaded, imagesPreloaded, insertExternalHTML, 
insertTextAsFragment, Isotope, isValidId, jQuery, Kamil, 
loadExternalHTML, loadJS, loadUnparsedJSON, manageDataSrcImages, 
manageImgLightboxLinks, Masonry, module, openDeviceBrowser, Packery, 
Parallax, parseLink, PhotoSwipe, PhotoSwipeUI_Default, pnotify, 
prependFragmentBefore, prettyPrint, Promise, Proxy, QRCode, 
removeChildren, removeElement, require, routie, safelyParseJSON, 
scriptIsLoaded, scroll2Top, scrollToTop, 
setImmediate, setStyleDisplayBlock, setStyleDisplayNone, 
setStyleOpacity, setStyleVisibilityHidden, setStyleVisibilityVisible, t, 
Tablesort, throttle, Timers, ToProgress, truncString, unescape, verge, 
VK, Ya, ymaps */
/*!
 * define global root
 */
/* var globalRoot = "object" === typeof window && window || "object" === typeof self && self || "object" === typeof global && global || {}; */
var globalRoot = "undefined" !== typeof window ? window : this;
/*!
 * safe way to handle console.log
 * @see {@link https://github.com/paulmillr/console-polyfill}
 */
(function(root){"use strict";if(!root.console){root.console={};}var con=root.console;var prop,method;var dummy=function(){};var properties=["memory"];var methods=("assert,clear,count,debug,dir,dirxml,error,exception,group,"+"groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,"+"show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn").split(",");while((prop=properties.pop())){if(!con[prop]){con[prop]={};}}while((method=methods.pop())){if(!con[method]){con[method]=dummy;}}}(globalRoot));
/*!
 * modified ToProgress v0.1.1
 * @see {@link https://github.com/djyde/ToProgress}
 * @see {@link https://gist.github.com/englishextra/6a8c79c9efbf1f2f50523d46a918b785}
 * @see {@link https://jsfiddle.net/englishextra/z5xhjde8/}
 * arguments.callee changed to TP, a local wrapper function,
 * so that public function name is now customizable;
 * wrapped in curly brackets:
 * else{document.body.appendChild(this.progressBar);};
 * removed module check
 * passes jshint
 */
(function(root){"use strict";var ToProgress=(function(){var TP=function(){var t=function(){var s=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var j in i){if(i.hasOwnProperty(j)){if(void 0!==s.style[j]){return i[j];}}}},s=function(t,a){if(this.progress=0,this.options={id:"top-progress-bar",color:"#F44336",height:"2px",duration:0.2},t&&"object"===typeof t){for(var i in t){if(t.hasOwnProperty(i)){this.options[i]=t[i];}}}if(this.options.opacityDuration=3*this.options.duration,this.progressBar=document.createElement("div"),this.progressBar.id=this.options.id,this.progressBar.setCSS=function(t){for(var a in t){if(t.hasOwnProperty(a)){this.style[a]=t[a];}}},this.progressBar.setCSS({position:a?"relative":"fixed",top:"0",left:"0",right:"0","background-color":this.options.color,height:this.options.height,width:"0%",transition:"width "+this.options.duration+"s, opacity "+this.options.opacityDuration+"s","-moz-transition":"width "+this.options.duration+"s, opacity "+this.options.opacityDuration+"s","-webkit-transition":"width "+this.options.duration+"s, opacity "+this.options.opacityDuration+"s"}),a){var o=document.querySelector(a);if(o){if(o.hasChildNodes()){o.insertBefore(this.progressBar,o.firstChild);}else{o.appendChild(this.progressBar);}}}else{document.body.appendChild(this.progressBar);}},i=t();return s.prototype.transit=function(){this.progressBar.style.width=this.progress+"%";},s.prototype.getProgress=function(){return this.progress;},s.prototype.setProgress=function(t,s){this.show();this.progress=t>100?100:0>t?0:t;this.transit();if(s){s();}},s.prototype.increase=function(t,s){this.show();this.setProgress(this.progress+t,s);},s.prototype.decrease=function(t,s){this.show();this.setProgress(this.progress-t,s);},s.prototype.finish=function(t){var s=this;this.setProgress(100,t);this.hide();if(i){this.progressBar.addEventListener(i,function(t){s.reset();s.progressBar.removeEventListener(t.type,TP);});}},s.prototype.reset=function(t){this.progress=0;this.transit();if(t){t();}},s.prototype.hide=function(){this.progressBar.style.opacity="0";},s.prototype.show=function(){this.progressBar.style.opacity="1";},s;};return TP();}());root.ToProgress=ToProgress;}(globalRoot));
/*!
 * A function for elements selection - v0.1.9
 * @see {@link https://github.com/finom/bala}
 * @param {String} a id, class or tag string
 * @param {String|Object} [b] context tag string or HTML Element object
 * a=BALA("sometag/#someid/.someclass"[,someParent]);
 * a=BALA.one("sometag/#someid/.someclass"[,someParent]);
 * global $ becomes var g
 * renamed function $ to g
 * @see {@link https://github.com/finom/bala/blob/master/bala.js}
 * passes jshint
 */
(function(root){"use strict";var BALA=(function(){var g=(function(document,s_addEventListener,s_querySelectorAll){function g(s,context,bala){bala=Object.create(g.fn);if(s){bala.push.apply(bala,s[s_addEventListener]?[s]:""+s===s?/</.test(s)?((context=document.createElement(context||s_addEventListener)).innerHTML=s,context.children):context?((context=g(context)[0])?context[s_querySelectorAll](s):bala):document[s_querySelectorAll](s):typeof s==="function"?document.readyState[7]?s():document[s_addEventListener]('DOMContentLoaded',s):s);}return bala;}g.fn=[];g.one=function(s,context){return g(s,context)[0]||null;};return g;})(document,'addEventListener','querySelectorAll');return g;}());root.BALA=BALA;}(globalRoot));
/*!
 * safe way to handle console.log
 * @see {@link https://github.com/paulmillr/console-polyfill}
 */
(function(root){"use strict";if(!root.console){root.console={};}var con=root.console;var prop,method;var dummy=function(){};var properties=["memory"];var methods=("assert,clear,count,debug,dir,dirxml,error,exception,group,"+"groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,"+"show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn").split(",");while((prop=properties.pop())){if(!con[prop]){con[prop]={};}}while((method=methods.pop())){if(!con[method]){con[method]=dummy;}}}(globalRoot));
/*!
 * add js class to html element
 */
(function(classes){"use strict";if(classes){classes.add("js");}}(document.documentElement.classList||""));
/*!
 * modified MediaHack - (c) 2013 Pomke Nohkan MIT LICENCED.
 * @see {@link https://gist.github.com/englishextra/ff8c9dde94abe32a9d7c4a65e0f2ccac}
 * @see {@link https://jsfiddle.net/englishextra/xg7ce8kc/}
 * removed className fallback and additionally
 * returns earlyDeviceOrientation,earlyDeviceSize
 * Add media query classes to DOM nodes
 * @see {@link https://github.com/pomke/mediahack/blob/master/mediahack.js}
 */
(function(root,selectors){"use strict";var orientation,size,f=function(a){var b=a.split(" ");if(selectors){for(var c=0;c<b.length;c+=1){a=b[c];selectors.add(a);}}},g=function(a){var b=a.split(" ");if(selectors){for(var c=0;c<b.length;c+=1){a=b[c];selectors.remove(a);}}},h={landscape:"all and (orientation:landscape)",portrait:"all and (orientation:portrait)"},k={small:"all and (max-width:768px)",medium:"all and (min-width:768px) and (max-width:991px)",large:"all and (min-width:992px)"},d,mM="matchMedia",m="matches",o=function(a,b){var c=function(a){if(a[m]){f(b);orientation=b;}else{g(b);}};c(a);a.addListener(c);},s=function(a,b){var c=function(a){if(a[m]){f(b);size=b;}else{g(b);}};c(a);a.addListener(c);};for(d in h){if(h.hasOwnProperty(d)){o(root[mM](h[d]),d);}}for(d in k){if(k.hasOwnProperty(d)){s(root[mM](k[d]),d);}}root.earlyDeviceOrientation=orientation||"";root.earlyDeviceSize=size||"";}(globalRoot,document.documentElement.classList||""));
/*!
 * add mobile or desktop class
 * using Detect Mobile Browsers | Open source mobile phone detection
 * Regex updated: 1 August 2014
 * detectmobilebrowsers.com
 * @see {@link https://github.com/heikojansen/plack-middleware-detectmobilebrowsers}
 */
(function(root,html,mobile,desktop,opera){"use strict";var selector=(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i).test(opera)||(/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i).test(opera.substr(0,4))?mobile:desktop;if(html){html.classList.add(selector);}root.earlyDeviceType=selector||"";}(globalRoot,document.documentElement||"","mobile","desktop",navigator.userAgent||navigator.vendor||globalRoot.opera));
/*!
 * add svg support class
 */
(function(root,html,selector){"use strict";selector=document.implementation.hasFeature("http://www.w3.org/2000/svg","1.1")?selector:"no-"+selector;if(html){html.classList.add(selector);}root.earlySvgSupport=selector||"";}(globalRoot,document.documentElement||"","svg"));
/*!
 * add svgasimg support class
 */
(function(root,html,selector){"use strict";selector=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")?selector:"no-"+selector;if(html){html.classList.add(selector);}root.earlySvgasimgSupport=selector||"";}(globalRoot,document.documentElement||"","svgasimg"));
/*!
 * add touch support class
 * @see {@link https://gist.github.com/englishextra/3cb22aab31a52b6760b5921e4fe8db95}
 * @see {@link https://jsfiddle.net/englishextra/z5xhjde8/}
 */
(function(root,html,selector){"use strict";selector="ontouchstart"in html?selector:"no-"+selector;if(html){html.classList.add(selector);}root.earlyHasTouch=selector||"";}(globalRoot,document.documentElement||"","touch"));
/*!
 * return date in YYYY-MM-DD format
 */
(function(root){"use strict";var newDate=(new Date()),newDay=newDate.getDate(),newYear=newDate.getFullYear(),newMonth=newDate.getMonth();(newMonth+=1);if(10>newDay){newDay="0"+newDay;}if(10>newMonth){newMonth="0"+newMonth;}root.earlyFnGetYyyymmdd=newYear+"-"+newMonth+"-"+newDay;}(globalRoot));
/*!
 * append details to title
 */
var userBrowsingDetails = " [" + (earlyFnGetYyyymmdd ? earlyFnGetYyyymmdd : "") + (earlyDeviceType ? " " + earlyDeviceType : "") + (earlyDeviceSize ? " " + earlyDeviceSize : "") + (earlyDeviceOrientation ? " " + earlyDeviceOrientation : "") + (earlySvgSupport ? " " + earlySvgSupport : "") + (earlySvgasimgSupport ? " " + earlySvgasimgSupport : "") + (earlyHasTouch ? " " + earlyHasTouch : "") + "]";
if (document.title) {
	document.title = document.title + userBrowsingDetails;
}
/*!
 * modified JavaScript Sync/Async forEach - v0.1.2 - 1/10/2012
 * @see {@link https://github.com/millermedeiros/amd-utils/issues/17}
 * @see {@link https://github.com/cowboy/javascript-sync-async-foreach}
 * @see {@link http://stackoverflow.com/questions/22335853/hack-to-convert-javascript-number-to-uint32}
 * @see {@link https://jsfiddle.net/englishextra/voq0bb62/}
 * Copyright (c) 2012 "Cowboy" Ben Alman; Licensed MIT
 * removed Node.js / browser support wrapper function
 * @param {Object} a Any object to walk through
 * @param {Object} b The sync callback function
 * @param {Object} [c] The async callback function
 * forEach(a,function(e){console.log("eachCallback: "+e);},!1});
 * forEach(a,function(e){console.log("eachCallback: "+e);},function(){console.log("doneCallback");});
 * @see {@link https://github.com/cowboy/javascript-sync-async-foreach/blob/master/dist/ba-foreach.js}
 * passes jshint
 */
(function(root){"use strict";root.forEach=function(arr,eachFn,doneFn){var i=-1;var len=(function(val){val=+val;if(!isFinite(val)||!val){return 0;}return(function(left,right){return left-right*Math.floor(left/right);}(Math.floor(val),Math.pow(2,32)));}(arr.length));(function next(result){var async;var abort=result===false;do{++i;}while(!(i in arr)&&i!==len);if(abort||i===len){if(doneFn){doneFn(!abort,arr);}return;}result=eachFn.call({async:function(){async=true;return next;}},arr[i],i,arr);if(!async){next(result);}}());};}(globalRoot));
/*!
 * Timer management (setInterval / setTimeout)
 * @param {Function} fn
 * @param {Number} ms
 * var timers = new Timers();
 * timers.timeout(function () {
 * console.log("before:", timers);
 * timers.clear();
 * timers = null;
 * doSomething();
 * console.log("after:", timers);
 * }, 3000);
 * @see {@link https://github.com/component/timers}
 * @see {@link https://github.com/component/timers/blob/master/index.js}
 * passes jshint
 */
(function(root){var Timers=function(ids){this.ids=ids||[];};Timers.prototype.timeout=function(fn,ms){var id=setTimeout(fn,ms);this.ids.push(id);return id;};Timers.prototype.interval=function(fn,ms){var id=setInterval(fn,ms);this.ids.push(id);return id;};Timers.prototype.clear=function(){this.ids.forEach(clearTimeout);this.ids=[];};root.Timers=Timers;}(globalRoot));
/*!
 * A simple promise-compatible "document ready" event handler with a few extra treats.
 * With browserify/webpack:
 * const ready = require('document-ready-promise')
 * ready().then(function(){})
 * If in a non-commonjs environment, just include the script. It will attach document.ready for you.
 * document.ready().then(function() {})
 * The document.ready promise will preserve any values that you may be passing through the promise chain.
 * Using ES2015 and fetch
 * fetch(new Request('kitten.jpg'))
 * .then(response => response.blob())
 * .then(document.ready)
 * .then(blob => document.querySelector("img").src = URL.createObjectURL(blob))
 * @see {@link https://github.com/michealparks/document-ready-promise}
 * @see {@link https://github.com/michealparks/document-ready-promise/blob/master/document-ready-promise.js}
 * passes jshint
 */
(function(document,promise){document.ready=promise;}(globalRoot.document,function(chainVal){"use strict";var d=document,w=globalRoot,loaded=(/^loaded|^i|^c/).test(d.readyState),DOMContentLoaded="DOMContentLoaded",load="load";return new Promise(function(resolve){if(loaded){return resolve(chainVal);}function onReady(){resolve(chainVal);d.removeEventListener(DOMContentLoaded,onReady);w.removeEventListener(load,onReady);}d.addEventListener(DOMContentLoaded,onReady);w.addEventListener(load,onReady);});}));
/*!
 * How can I check if a JS file has been included already?
 * @see {@link https://gist.github.com/englishextra/403a0ca44fc5f495400ed0e20bc51d47}
 * @see {@link https://stackoverflow.com/questions/18155347/how-can-i-check-if-a-js-file-has-been-included-already}
 * @param {String} s path string
 * scriptIsLoaded(s)
 */
(function(root){"use strict";var scriptIsLoaded=function(s){for(var b=document.getElementsByTagName("script")||"",a=0;a<b.length;a+=1){if(b[a].getAttribute("src")===s){return!0;}}return!1;};root.scriptIsLoaded=scriptIsLoaded;}(globalRoot));
/*!
 * Load and execute JS via AJAX
 * @see {@link https://gist.github.com/englishextra/8dc9fe7b6ff8bdf5f9b483bf772b9e1c}
 * IE 5.5+, Firefox, Opera, Chrome, Safari XHR object
 * @see {@link https://gist.github.com/Xeoncross/7663273}
 * modified callback(x.responseText,x); to callback(eval(x.responseText),x);
 * @see {@link https://stackoverflow.com/questions/3728798/running-javascript-downloaded-with-xmlhttprequest}
 * @param {String} url path string
 * @param {Object} [callback] callback function
 * @param {Object} [onerror] on error callback function
 * loadTriggerJS(url,callback,onerror)
 */
(function(root){"use strict";var loadTriggerJS=function(url,callback,onerror){var cb=function(string){return callback&&"function"===typeof callback&&callback(string);},fn=function(string){try{var Fn=Function;new Fn(""+string).call(root);}catch(err){throw new Error("Error evaluating file "+url,err);}};if(root.Promise&&root.fetch&&!root.chrome&&!("undefined"!==typeof root&&root.process&&"renderer"===root.process.type)){fetch(url).then(function(response){if(!response.ok){if(onerror&&"function"===typeof onerror){onerror();}else{throw new Error(response.statusText);}}return response;}).then(function(response){return response.text();}).then(function(text){fn(text);cb(text);}).catch(function(err){console.log("Error fetch-ing file "+url,err);});}else{var x=root.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");x.overrideMimeType("application/javascript;charset=utf-8");x.open("GET",url,!0);x.withCredentials=!1;x.onreadystatechange=function(){if(x.status==="404"||x.status===0){console.log("Error XMLHttpRequest-ing file "+url,x.status);return onerror&&"function"===typeof onerror&&onerror();}else if(x.readyState===4&&x.status===200&&x.responseText){fn(x.responseText);cb(x.responseText);}};x.send(null);}};root.loadTriggerJS=loadTriggerJS;}(globalRoot));
/*!
 * remove all children of parent element
 * @see {@link https://gist.github.com/englishextra/da26bf39bc90fd29435e8ae0b409ddc3}
 * @param {Object} e parent HTML Element
 * removeChildren(e)
 */
(function(root){"use strict";var removeChildren=function(e){return (function(){if(e&&e.firstChild){for(;e.firstChild;){e.removeChild(e.firstChild);}}}());};root.removeChildren=removeChildren;}(globalRoot));
/*!
 * append node into other with fragment
 * @see {@link https://gist.github.com/englishextra/0ff3204d5fb285ef058d72f31e3af766}
 * @param {String|object} e an HTML Element to append
 * @param {Object} a target HTML Element
 * appendFragment(e,a)
 */
(function(root){"use strict";var appendFragment=function(e,a){var d=document;a=a||d.getElementsByTagNames("body")[0]||"";return (function(){if(e){var d=document,df=d.createDocumentFragment()||"",aC="appendChild";if("string"===typeof e){e=d.createTextNode(e);}df[aC](e);a[aC](df);}}());};root.appendFragment=appendFragment;}(globalRoot));
/*!
 * set style display block of an element
 * @param {Object} a an HTML Element
 * setStyleDisplayBlock(a)
 */
(function(root){var setStyleDisplayBlock=function(a){return (function(){if(a){a.style.display="block";}}());};root.setStyleDisplayBlock=setStyleDisplayBlock;}(globalRoot));
/*!
 * set style display none of an element
 * @param {Object} a an HTML Element
 * setStyleDisplayNone(a)
 */
(function(root){var setStyleDisplayNone=function(a){return (function(){if(a){a.style.display="none";}}());};root.setStyleDisplayNone=setStyleDisplayNone;}(globalRoot));
/*!
 * set style opacity of an element
 * @param {Object} a an HTML Element
 * @param {Number} n any positive decimal number 0.00-1.00
 * setStyleOpacity(a,n)
 */
(function(root){var setStyleOpacity=function(a,n){n=n||1;return (function(){if(a){a.style.opacity=n;}}());};root.setStyleOpacity=setStyleOpacity;}(globalRoot));
/*!
 * set style visibility visible of an element
 * @param {Object} a an HTML Element
 * setStyleVisibilityVisible(a)
 */
(function(root){var setStyleVisibilityVisible=function(a){return (function(){if(a){a.style.visibility="visible";}}());};root.setStyleVisibilityVisible=setStyleVisibilityVisible;}(globalRoot));
/*!
 * set style visibility hidden of an element
 * @param {Object} a an HTML Element
 * setStyleVisibilityHidden(a)
 */
(function(root){var setStyleVisibilityHidden=function(a){return (function(){if(a){a.style.visibility="hidden";}}());};root.setStyleVisibilityHidden=setStyleVisibilityHidden;}(globalRoot));
/*!
 * modified Unified URL parsing API in the browser and node
 * @see {@link https://github.com/wooorm/parse-link}
 * removed module check
 * @see {@link https://gist.github.com/englishextra/4e9a0498772f05fa5d45cfcc0d8be5dd}
 * @see {@link https://gist.github.com/englishextra/2a7fdabd0b23a8433d5fc148fb788455}
 * @see {@link https://jsfiddle.net/englishextra/fcdds4v6/}
 * @param {String} url URL string
 * @param {Boolean} [true|false] if true, returns protocol:, :port, /pathname, ?search, ?query, #hash
 * if set to false, returns protocol, port, pathname, search, query, hash
 * alert(parseLink("http://localhost/search?s=t&v=z#dev").href|
 * origin|host|port|hash|hostname|pathname|protocol|search|query|isAbsolute|isRelative|isCrossDomain);
 */
/*jshint bitwise: false */
(function(root){"use strict";var parseLink=function(url,full){full=full||!1;return (function(){var _r=function(s){return s.replace(/^(#|\?)/,"").replace(/\:$/,"");},l=location||"",_p=function(protocol){switch(protocol){case"http:":return full?":"+80:80;case"https:":return full?":"+443:443;default:return full?":"+l.port:l.port;}},_s=(0===url.indexOf("//")||!!~url.indexOf("://")),w=root.location||"",_o=function(){var o=w.protocol+"//"+w.hostname+(w.port?":"+w.port:"");return o||"";},_c=function(){var c=document.createElement("a");c.href=url;var v=c.protocol+"//"+c.hostname+(c.port?":"+c.port:"");return v!==_o();},a=document.createElement("a");a.href=url;return{href:a.href,origin:_o(),host:a.host||l.host,port:("0"===a.port||""===a.port)?_p(a.protocol):(full?a.port:_r(a.port)),hash:full?a.hash:_r(a.hash),hostname:a.hostname||l.hostname,pathname:a.pathname.charAt(0)!=="/"?(full?"/"+a.pathname:a.pathname):(full?a.pathname:a.pathname.slice(1)),protocol:!a.protocol||":"===a.protocol?(full?l.protocol:_r(l.protocol)):(full?a.protocol:_r(a.protocol)),search:full?a.search:_r(a.search),query:full?a.search:_r(a.search),isAbsolute:_s,isRelative:!_s,isCrossDomain:_c(),hasHTTP:/^(http|https):\/\//i.test(url)?!0:!1};}());};root.parseLink=parseLink;}(globalRoot));
/*jshint bitwise: true */
/*!
 * get current protocol - "http" or "https", else return ""
 * @param {Boolean} [force] When set to "true", and the result is empty,
 * the function will return "http"
 * getHTTP(true)
 */
(function(root){"use strict";var getHTTP=(function(type){return function(force){force=force||"";return"http:"===type?"http":"https:"===type?"https":force?"http":"";};}(root.location.protocol||""));root.getHTTP=getHTTP;}(globalRoot));
/*!
 * Open external links in default browser out of Electron / nwjs
 * @see {@link https://gist.github.com/englishextra/b9a8140e1c1b8aa01772375aeacbf49b}
 * @see {@link https://stackoverflow.com/questions/32402327/how-can-i-force-external-links-from-browser-window-to-open-in-a-default-browser}
 * @see {@link https://github.com/nwjs/nw.js/wiki/shell}
 * electron - file: | nwjs - chrome-extension: | http: Intel XDK
 * wont do in electron and nw,
 * so manageExternalLinks will set target blank to links
 * var win = w.open(url, "_blank");
 * win.focus();
 * @param {String} url URL/path string
 * openDeviceBrowser(url)
 * detect Node.js
 * @see {@link https://github.com/lyrictenor/node-is-nwjs/blob/master/is-nodejs.js}
 * @returns {Boolean} true or false
 * detect Electron
 * @returns {Boolean} true or false
 * detect NW.js
 * @see {@link https://github.com/lyrictenor/node-is-nwjs/blob/master/index.js}
 * @returns {Boolean} true or false
 */
(function(root){"use strict";var isNodejs="undefined"!==typeof process&&"undefined"!==typeof require||"",isElectron="undefined"!==typeof root&&root.process&&"renderer"===root.process.type||"",isNwjs=(function(){if("undefined"!==typeof isNodejs&&isNodejs){try{if("undefined"!==typeof require("nw.gui")){return!0;}}catch(e){return!1;}}return!1;}()),openDeviceBrowser=function(url){var triggerForElectron=function(){var es=isElectron?require("electron").shell:"";return es?es.openExternal(url):"";},triggerForNwjs=function(){var ns=isNwjs?require("nw.gui").Shell:"";return ns?ns.openExternal(url):"";},triggerForHTTP=function(){return!0;},triggerForLocal=function(){return root.open(url,"_system","scrollbars=1,location=no");};if(isElectron){triggerForElectron();}else if(isNwjs){triggerForNwjs();}else{var locationProtocol=root.location.protocol||"",hasHTTP=locationProtocol?"http:"===locationProtocol?"http":"https:"===locationProtocol?"https":"":"";if(hasHTTP){triggerForHTTP();}else{triggerForLocal();}}};root.openDeviceBrowser=openDeviceBrowser;}(globalRoot));
/*!
 * init ToProgress and extend methods
 */
var progressBar = new ToProgress({
		id : "top-progress-bar",
		color : "#FF2C40",
		height : "3px",
		duration : 0.2
	});
/*!
 * @memberof progressBar
 * @param {Int} [n] a whole positive number
 * progressBar.init(n)
 */
progressBar.init = function (n) {
	n = n || 20;
	return this.increase(n);
};
/*!
 * @memberof progressBar
 * progressBar.complete()
 */
progressBar.complete = function () {
	return this.finish(),
	this.hide();
};
progressBar.init();
/*!
 * set click event on external links,
 * so that they open in new browser tab
 * @param {Object} [ctx] context HTML Element
 */
var handleExternalLink = function (p, ev) {
	"use strict";
	ev.stopPropagation();
	ev.preventDefault();
	openDeviceBrowser(p);
},
manageExternalLinks = function (ctx) {
	"use strict";
	ctx = ctx && ctx.nodeName ? ctx : "";
	var w = globalRoot,
	cls = "a",
	a = ctx ? BALA.one(cls, ctx) || "" : BALA.one(cls) || "",
	aEL = "addEventListener",
	g = function (e) {
		var p = e.getAttribute("href") || "";
		if (p && parseLink(p).isCrossDomain && parseLink(p).hasHTTP) {
			e.title = "" + (parseLink(p).hostname || "") + " откроется в новой вкладке";
			if ("undefined" !== typeof getHTTP && getHTTP()) {
				e.target = "_blank";
				e.rel = "noopener";
			} else {
				e[aEL]("click", handleExternalLink.bind(null, p));
			}
		}
	},
	k = function () {
		a = ctx ? BALA(cls, ctx) || "" : BALA(cls) || "";
		for (var i = 0, l = a.length; i < l; i += 1) {
			g(a[i]);
		}
		/* forEach(a, g, !1); */
	};
	if (a) {
		/* console.log("triggered function: manageExternalLinks"); */
		k();
	}
};
document.ready().then(manageExternalLinks);
/*!
 * set title on local links,
 * so that they inform that they open in currnet tab
 * @param {Object} [ctx] context HTML Element
 */
var manageLocalLinks = function (ctx) {
	"use strict";
	ctx = ctx && ctx.nodeName ? ctx : "";
	var w = globalRoot,
	a = ctx ? BALA.one("a", ctx) || "" : BALA.one("a") || "",
	g = function (e) {
		var p = e.getAttribute("href") || "";
		if (p && parseLink(p).isRelative && !e.getAttribute("title")) {
			e.title = "ќткроетс¤ здесь же";
		}
	};
	if (a) {
		a = ctx ? BALA("a", ctx) || "" : BALA("a") || "";
		for (var i = 0, l = a.length; i < l; i += 1) {
			g(a[i]);
		}
		/* forEach(a, g, !1); */
	}
};
document.ready().then(manageLocalLinks);
/*!
 * hide ui buttons in fullscreen mode
 */
var hideUiBtnsInFullScreen = function () {
	"use strict";
	var w = globalRoot,
	cd_prev = BALA.one(".cd-prev") || "",
	cd_next = BALA.one(".cd-next") || "",
	btn_nav_menu = BALA.one(".btn-nav-menu") || "",
	btn_menu_more = BALA.one(".btn-menu-more") || "",
	btn_show_vk_like = BALA.one(".btn-show-vk-like") || "",
	openapi_js_src = getHTTP(!0) + "://vk.com/js/api/openapi.js?122",
	btn_block_social_buttons = BALA.one(".btn-share-buttons") || "",
	ui_totop = BALA.one(".ui-totop") || "",
	holder_search_form = BALA.one(".holder-search-form") || "",
	f = !1;
	if (!f) {
		f = !0;
		/*!
		 * Detecting if a browser is in full screen mode
		 * @see {@link https://stackoverflow.com/questions/2863351/checking-if-browser-is-in-fullscreen}
		 * @see {@link https://stackoverflow.com/questions/1047319/detecting-if-a-browser-is-in-full-screen-mode}
		 */
		var args = [cd_prev, cd_next, btn_nav_menu, btn_menu_more, btn_block_social_buttons, ui_totop, holder_search_form];
		if ((w.navigator.standalone) || (screen.height === w.outerHeight) || (w.fullScreen) || (w.innerWidth === screen.width && w.innerHeight === screen.height)) {
			for (var i = 0, l = args.length; i < l; i += 1) {
				setStyleDisplayNone(args[i]);
			}
			setStyleDisplayNone(btn_show_vk_like);
		} else {
			for (var j = 0, m = args.length; j < m; j += 1) {
				setStyleDisplayBlock(args[j]);
			}
			if (!scriptIsLoaded(openapi_js_src)) {
				setStyleDisplayBlock(btn_show_vk_like);
			}
		}
	}
},
resizeHideUiBtnsInFullScreen = function () {
	"use strict";
	var w = globalRoot,
	aEL = "addEventListener";
	if (!("undefined" !== typeof earlyDeviceSize && "medium" === earlyDeviceSize)) {
		hideUiBtnsInFullScreen();
	}
	w[aEL]("resize", hideUiBtnsInFullScreen);
};
document.ready().then(resizeHideUiBtnsInFullScreen);
/*!
 * init DoSlide
 * A simple slider.
 * @see {@link https://github.com/MopTym/doSlide/blob/master/demo/3_1_slider.html}
 */
var initDoSlide = function () {
	"use strict";
	var w = globalRoot,
	d = document,
	cd_prev = BALA.one(".cd-prev") || "",
	cd_next = BALA.one(".cd-next") || "",
	aEL = "addEventListener",
	timer = function (slide, interval, token) {
		var next = function () {
			token = setTimeout(next, interval);
			if (!(d.hidden || d.webkitHidden)) {
				slide.next();
			}
		};
		return function () {
			clearTimeout(token);
			token = setTimeout(next, interval);
		};
	},
	g = function () {
		if ("undefined" !== typeof slideTimer) {
			/* setStyleDisplayNone(cd_prev);
			setStyleDisplayNone(cd_next);
		} else { */
			setStyleDisplayBlock(cd_prev);
			setStyleDisplayBlock(cd_next);
			var h_cd_prev = function (ev) {
				ev.preventDefault();
				ev.stopPropagation();
				slide.prev();
			};
			cd_prev[aEL]("click", h_cd_prev);
			/* cd_prev.onclick = h_cd_prev; */
			var h_cd_next = function (ev) {
				ev.preventDefault();
				ev.stopPropagation();
				slide.next();
			};
			cd_next[aEL]("click", h_cd_next);
			/* cd_next.onclick = h_cd_next; */
		}
	};
	/*!
	 * dont JSMin line below: Notepad++ will freeze
	 * comment out if you dont want slide autorotation
	 */
	if (w.DoSlide) {
		var slide = new DoSlide(".ds-container", {
			duration : 2000,
			horizontal : true,
			infinite : true
		}),
		slideTimer = timer(slide, 5000);
		slide.onChanged(slideTimer).do(slideTimer);
		/*!
		 * init next button if no slide autorotation
		 */
		if (cd_next || cd_prev) {
			g();
		}
	}
},
loadInitDoSlide = function () {
	"use strict";
	var js = "../../cdn/doSlide/1.1.4/js/do-slide.fixed.min.js";
	if (!scriptIsLoaded(js)) {
		loadJS(js, initDoSlide);
	}
};
document.ready().then(loadInitDoSlide);
/*!
 * init qr-code
 * @see {@link https://stackoverflow.com/questions/12777622/how-to-use-enquire-js}
 */
var generateLocationQrCodeImg = function () {
	"use strict";
	var w = globalRoot,
	d = document,
	holder = ".holder-location-qr-code",
	c = BALA.one(holder) || "",
	cls = "qr-code-img",
	u = w.location.href || "",
	cL = "classList",
	cE = "createElement",
	m = d[cE]("img"),
	t = d.title ? ("Ссылка на страницу «" + d.title.replace(/\[[^\]]*?\]/g, "").trim() + "»") : "",
	s = getHTTP(!0) + "://chart.googleapis.com/chart?cht=qr&chld=M%7C4&choe=UTF-8&chs=300x300&chl=" + encodeURIComponent(u);
	m.alt = t;
	if (w.QRCode) {
		if ("undefined" !== typeof earlySvgSupport && "svg" === earlySvgSupport) {
			s = QRCode.generateSVG(u, {
					ecclevel: "M",
					fillcolor: "#FFFFFF",
					textcolor: "#191919",
					margin: 4,
					modulesize: 8
				});
			var XMLS = new XMLSerializer();
			s = XMLS.serializeToString(s);
			s = "data:image/svg+xml;base64," + w.btoa(unescape(encodeURIComponent(s)));
			m.src = s;
		} else {
			s = QRCode.generatePNG(u, {
					ecclevel: "M",
					format: "html",
					fillcolor: "#FFFFFF",
					textcolor: "#191919",
					margin: 4,
					modulesize: 8
				});
			m.src = s;
		}
	} else {
		m.src = s;
	}
	m[cL].add(cls);
	m.title = t;
	removeChildren(c);
	appendFragment(m, c);
},
manageLocationQrCodeImage = function () {
	"use strict";
	var w = globalRoot,
	holder = ".holder-location-qr-code",
	c = BALA.one(holder) || "",
	u = w.location.href || "";
	if (c && u) {
		/* console.log("triggered function: manageLocationQrCodeImage"); */
		if ("undefined" !== typeof getHTTP && getHTTP()) {
			generateLocationQrCodeImg();
		}
	}
},
loadManageLocationQrCodeImg = function () {
	"use strict";
	var js = "../../cdn/qrjs2/0.1.3/js/qrjs2.fixed.min.js";
	if (!scriptIsLoaded(js)) {
		loadJS(js, manageLocationQrCodeImage);
	} else {
		manageLocationQrCodeImage();
	}
};
document.ready().then(loadManageLocationQrCodeImg);
/*!
 * init menu-more
 */
var initMenuMore = function () {
	"use strict";
	var w = globalRoot,
	container = BALA.one("#container") || "",
	holder = BALA.one(".holder-panel-menu-more") || "",
	btn = BALA.one(".btn-menu-more") || "",
	panel = BALA.one(".panel-menu-more") || "",
	items = BALA("li", panel) || "",
	cL = "classList",
	aEL = "addEventListener",
	is_active = "is-active",
	h_e = function () {
		holder[cL].remove(is_active);
	},
	g = function (e) {
		e[aEL]("click", h_e);
	},
	k = function () {
		container[aEL]("click", h_e);
	},
	q = function () {
		var h_btn = function (ev) {
			ev.stopPropagation();
			ev.preventDefault();
			holder[cL].toggle(is_active);
		};
		btn[aEL]("click", h_btn);
	},
	v = function () {
		for (var i = 0, l = items.length; i < l; i += 1) {
			g(items[i]);
		}
		/* forEach(items, g, !1); */
	};
	if (container && holder && btn && panel && items) {
		/* console.log("triggered function: initMenuMore"); */
		/*!
		 * hide menu more on outside click
		 */
		k();
		/*!
		 * show or hide menu more
		 */
		q();
		/*!
		 * hide menu more on item clicked
		 */
		v();
	}
};
document.ready().then(initMenuMore);
/*!
 * show menu-more on document ready
 */
var showMenuMore = function (n) {
	"use strict";
	n = n || 2000;
	var a = BALA.one(".holder-panel-menu-more") || "",
	is_active = "is-active",
	cL = "classList",
	s = function () {
		a[cL].add(is_active);
	};
	if (a) {
		var timers = new Timers();
		timers.timeout(function () {
			timers.clear();
			timers = null;
			s();
		}, n);
	}
};
document.ready().then(showMenuMore.bind(null, 2000));
/*!
 * init pluso-engine or ya-share on click
 */
var initPlusoYaShare = function () {
	"use strict";
	var a = BALA.one(".btn-share-buttons") || "",
	pluso = BALA.one(".pluso") || "",
	ya_share2 = BALA.one(".ya-share2") || "",
	aEL = "addEventListener",
	rEL = "removeEventListener",
	pluso_like_js_src = getHTTP(!0) + "://share.pluso.ru/pluso-like.js",
	share_js_src = getHTTP(!0) + "://yastatic.net/share2/share.js",
	g = function (s, b) {
		setStyleVisibilityVisible(s);
		setStyleOpacity(s, 1);
		setStyleDisplayNone(b);
	},
	k = function (js, s, b) {
		if (!scriptIsLoaded(js)) {
			loadJS(js, g.bind(null, s, b));
		}
	},
	q = function () {
		if (pluso) {
			k(pluso_like_js_src, pluso, a);
		} else {
			if (ya_share2) {
				k(share_js_src, ya_share2, a);
			}
		}
	},
	v = function () {
		var h_a = function (ev) {
			ev.stopPropagation();
			ev.preventDefault();
			a[rEL]("click", h_a);
			q();
		};
		a[aEL]("click", h_a);
	};
	if ((pluso || ya_share2) && a) {
		/* console.log("triggered function: initPlusoYaShare"); */
		if ("undefined" !== typeof getHTTP && getHTTP()) {
			v();
		} else {
			setStyleDisplayNone(a);
		}
	}
};
document.ready().then(initPlusoYaShare);
/*!
 * init vk-like on click
 */
var manageVKLikeButton = function () {
	"use strict";
	var w = globalRoot,
	vk_like = "vk-like",
	c = BALA.one("#" + vk_like) || "",
	a = BALA.one(".btn-show-vk-like") || "",
	js = getHTTP(!0) + "://vk.com/js/api/openapi.js?122",
	ds = "dataset",
	aEL = "addEventListener",
	rEL = "removeEventListener",
	g = function () {
		try {
			if (w.VK) {
				VK.init({
					apiId: (c[ds].apiid || ""),
					nameTransportPath: "/xd_receiver.htm",
					onlyWidgets: !0
				});
				VK.Widgets.Like(vk_like, {
					type: "button",
					height: 24
				});
			}
			setStyleVisibilityVisible(c);
			setStyleOpacity(c, 1);
			setStyleDisplayNone(a);
		} catch(e) {
			setStyleVisibilityHidden(c);
			setStyleOpacity(c, 0);
			setStyleDisplayBlock(a);
		}
	},
	k = function () {
		if (!scriptIsLoaded(js)) {
			loadJS(js, g);
		}
	},
	q = function () {
		var h_a = function (ev) {
			ev.stopPropagation();
			ev.preventDefault();
			a[rEL]("click", h_a);
			k();
		};
		a[aEL]("click", h_a);
	};
	if (c && a) {
		/* console.log("triggered function: manageVKLikeButton"); */
		if ("undefined" !== typeof getHTTP && getHTTP()) {
			q();
		} else {
			setStyleDisplayNone(a);
		}
	}
};
document.ready().then(manageVKLikeButton);
/*!
 * init manUP.js
 */
var loadInitManUp = function () {
	"use strict";
	var manUpJsUrl = "/cdn/ManUp.js/0.7/js/manup.fixed.min.js",
	initManUp = function () {
		/* console.log("triggered function: initManUp"); */
	};
	if ("undefined" !== typeof getHTTP && getHTTP()) {
		if (!scriptIsLoaded(manUpJsUrl)) {
			loadJS(manUpJsUrl, initManUp);
		} else {
			initManUp();
		}
	}
};
document.ready().then(loadInitManUp);
/*!
 * show page, finish ToProgress
 */
var showPageFinishProgress = function () {
	"use strict";
	var a = BALA.one("#container") || "";
	/* console.log("triggered function: showPageFinishProgress"); */
	setStyleOpacity(a, 1);
	progressBar.complete();
};
document.ready().then(showPageFinishProgress);
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}(function(){"use strict";var e={function:!0,object:!0},W=e["undefined"==typeof window?"undefined":_typeof(window)]&&window||this,R=W,n=e["undefined"==typeof exports?"undefined":_typeof(exports)]&&exports,t=e["undefined"==typeof module?"undefined":_typeof(module)]&&module&&!module.nodeType&&module,i=n&&t&&"object"==("undefined"==typeof global?"undefined":_typeof(global))&&global;!i||i.global!==i&&i.window!==i&&i.self!==i||(W=i);var o=Math.pow(2,53)-1,j=/\bOpera/,G=this,r=Object.prototype,a=r.hasOwnProperty,F=r.toString;function s(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function L(e){return e=K(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:s(e)}function N(e,t){for(var n in e)a.call(e,n)&&t(e[n],n,e)}function $(e){return null==e?s(e):F.call(e).slice(8,-1)}function X(e,t){var n=null!=e?_typeof(e[t]):"number";return!(/^(?:boolean|number|string|undefined)$/.test(n)||"object"==n&&!e[t])}function H(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function D(n,i){var r=null;return function(e,t){var n=-1,i=e?e.length:0;if("number"==typeof i&&-1<i&&i<=o)for(;++n<i;)t(e[n],n,e);else N(e,t)}(n,function(e,t){r=i(r,e,t,n)}),r}function K(e){return String(e).replace(/^ +| +$/g,"")}var l=function e(s){var t=W,n=s&&"object"==_typeof(s)&&"String"!=$(s);n&&(t=s,s=null);var i=t.navigator||{},r=i.userAgent||"";s||(s=r);var o,a,l=n||G==R,u=n?!!i.likeChrome:/\bChrome\b/.test(s)&&!/internal|\n/i.test(F.toString()),c="Object",p=n?c:"ScriptBridgingProxyObject",d=n?c:"Environment",f=n&&t.java?"JavaPackage":$(t.java),b=n?c:"RuntimeObject",h=/\bJava/.test(f)&&t.java,y=h&&$(t.environment)==d,m=h?"a":"α",v=h?"b":"β",g=t.document||{},S=t.operamini||t.opera,x=j.test(x=n&&S?S["[[Class]]"]:$(S))?x:S=null,w=s,O=[],E=null,_=s==r,M=_&&S&&"function"==typeof S.version&&S.version(),P=D([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],function(e,t){return e||RegExp("\\b"+(t.pattern||H(t))+"\\b","i").exec(s)&&(t.label||t)}),T=D(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"Edge"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Waterfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"],function(e,t){return e||RegExp("\\b"+(t.pattern||H(t))+"\\b","i").exec(s)&&(t.label||t)}),k=B([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),A=D({Apple:{iPad:1,iPhone:1,iPod:1},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1}},function(e,t,n){return e||(t[k]||t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(k)]||RegExp("\\b"+H(n)+"(?:\\b|\\w*\\d)","i").exec(s))&&n}),C=D(["Windows Phone","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "],function(e,t){var n,i,r,o,a=t.pattern||H(t);return!e&&(e=RegExp("\\b"+a+"(?:/[\\d.]+|[ \\w.]*)","i").exec(s))&&(n=e,i=a,r=t.label||t,o={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"},i&&r&&/^Win/i.test(n)&&!/^Windows Phone /i.test(n)&&(o=o[/[\d.]+$/.exec(n)])&&(n="Windows "+o),n=String(n),i&&r&&(n=n.replace(RegExp(i,"i"),r)),e=n=L(n.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])),e});function B(e){return D(e,function(e,t){var n=t.pattern||H(t);return!e&&(e=RegExp("\\b"+n+" *\\d+[.\\w_]*","i").exec(s)||RegExp("\\b"+n+" *\\w+-[\\w]*","i").exec(s)||RegExp("\\b"+n+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(s))&&((e=String(t.label&&!RegExp(n,"i").test(t.label)?t.label:e).split("/"))[1]&&!/[\d.]+/.test(e[0])&&(e[0]+=" "+e[1]),t=t.label||t,e=L(e[0].replace(RegExp(n,"i"),t).replace(RegExp("; *(?:"+t+"[_-])?","i")," ").replace(RegExp("("+t+")[-_.]?(\\w)","i"),"$1 $2"))),e})}if(P&&(P=[P]),A&&!k&&(k=B([A])),(o=/\bGoogle TV\b/.exec(k))&&(k=o[0]),/\bSimulator\b/i.test(s)&&(k=(k?k+" ":"")+"Simulator"),"Opera Mini"==T&&/\bOPiOS\b/.test(s)&&O.push("running in Turbo/Uncompressed mode"),"IE"==T&&/\blike iPhone OS\b/.test(s)?(A=(o=e(s.replace(/like iPhone OS/,""))).manufacturer,k=o.product):/^iP/.test(k)?(T||(T="Safari"),C="iOS"+((o=/ OS ([\d_]+)/i.exec(s))?" "+o[1].replace(/_/g,"."):"")):"Konqueror"!=T||/buntu/i.test(C)?A&&"Google"!=A&&(/Chrome/.test(T)&&!/\bMobile Safari\b/i.test(s)||/\bVita\b/.test(k))||/\bAndroid\b/.test(C)&&/^Chrome/.test(T)&&/\bVersion\//i.test(s)?(T="Android Browser",C=/\bAndroid\b/.test(C)?C:"Android"):"Silk"==T?(/\bMobi/i.test(s)||(C="Android",O.unshift("desktop mode")),/Accelerated *= *true/i.test(s)&&O.unshift("accelerated")):"PaleMoon"==T&&(o=/\bFirefox\/([\d.]+)\b/.exec(s))?O.push("identifying as Firefox "+o[1]):"Firefox"==T&&(o=/\b(Mobile|Tablet|TV)\b/i.exec(s))?(C||(C="Firefox OS"),k||(k=o[1])):!T||(o=!/\bMinefield\b/i.test(s)&&/\b(?:Firefox|Safari)\b/.exec(T))?(T&&!k&&/[\/,]|^[^(]+?\)/.test(s.slice(s.indexOf(o+"/")+8))&&(T=null),(o=k||A||C)&&(k||A||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(C))&&(T=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(C)?C:o)+" Browser")):"Electron"==T&&(o=(/\bChrome\/([\d.]+)\b/.exec(s)||0)[1])&&O.push("Chromium "+o):C="Kubuntu",M||(M=D(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))","Version",H(T),"(?:Firefox|Minefield|NetFront)"],function(e,t){return e||(RegExp(t+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(s)||0)[1]||null})),(o=("iCab"==P&&3<parseFloat(M)?"WebKit":/\bOpera\b/.test(T)&&(/\bOPR\b/.test(s)?"Blink":"Presto"))||/\b(?:Midori|Nook|Safari)\b/i.test(s)&&!/^(?:Trident|EdgeHTML)$/.test(P)&&"WebKit"||!P&&/\bMSIE\b/i.test(s)&&("Mac OS"==C?"Tasman":"Trident")||"WebKit"==P&&/\bPlayStation\b(?! Vita\b)/i.test(T)&&"NetFront")&&(P=[o]),"IE"==T&&(o=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(s)||0)[1])?(T+=" Mobile",C="Windows Phone "+(/\+$/.test(o)?o:o+".x"),O.unshift("desktop mode")):/\bWPDesktop\b/i.test(s)?(T="IE Mobile",C="Windows Phone 8.x",O.unshift("desktop mode"),M||(M=(/\brv:([\d.]+)/.exec(s)||0)[1])):"IE"!=T&&"Trident"==P&&(o=/\brv:([\d.]+)/.exec(s))&&(T&&O.push("identifying as "+T+(M?" "+M:"")),T="IE",M=o[1]),_){if(X(t,"global"))if(h&&(w=(o=h.lang.System).getProperty("os.arch"),C=C||o.getProperty("os.name")+" "+o.getProperty("os.version")),l&&X(t,"system")&&(o=[t.system])[0]){C||(C=o[0].os||null);try{o[1]=t.require("ringo/engine").version,M=o[1].join("."),T="RingoJS"}catch(e){o[0].global.system==t.system&&(T="Narwhal")}}else"object"==_typeof(t.process)&&!t.process.browser&&(o=t.process)?"object"==_typeof(o.versions)?"string"==typeof o.versions.electron?(O.push("Node "+o.versions.node),T="Electron",M=o.versions.electron):"string"==typeof o.versions.nw&&(O.push("Chromium "+M,"Node "+o.versions.node),T="NW.js",M=o.versions.nw):(T="Node.js",w=o.arch,C=o.platform,M=(M=/[\d.]+/.exec(o.version))?M[0]:"unknown"):y&&(T="Rhino");else $(o=t.runtime)==p?(T="Adobe AIR",C=o.flash.system.Capabilities.os):$(o=t.phantom)==b?(T="PhantomJS",M=(o=o.version||null)&&o.major+"."+o.minor+"."+o.patch):"number"==typeof g.documentMode&&(o=/\bTrident\/(\d+)/i.exec(s))?(M=[M,g.documentMode],(o=+o[1]+4)!=M[1]&&(O.push("IE "+M[1]+" mode"),P&&(P[1]=""),M[1]=o),M="IE"==T?String(M[1].toFixed(1)):M[0]):"number"==typeof g.documentMode&&/^(?:Chrome|Firefox)\b/.test(T)&&(O.push("masking as "+T+" "+M),T="IE",M="11.0",P=["Trident"],C="Windows");C=C&&L(C)}if(M&&(o=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(M)||/(?:alpha|beta)(?: ?\d)?/i.exec(s+";"+(_&&i.appMinorVersion))||/\bMinefield\b/i.test(s)&&"a")&&(E=/b/i.test(o)?"beta":"alpha",M=M.replace(RegExp(o+"\\+?$"),"")+("beta"==E?v:m)+(/\d+\+?/.exec(o)||"")),"Fennec"==T||"Firefox"==T&&/\b(?:Android|Firefox OS)\b/.test(C))T="Firefox Mobile";else if("Maxthon"==T&&M)M=M.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(k))"Xbox 360"==k&&(C=null),"Xbox 360"==k&&/\bIEMobile\b/.test(s)&&O.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(T)&&(!T||k||/Browser|Mobi/.test(T))||"Windows CE"!=C&&!/Mobi/i.test(s))if("IE"==T&&_)try{null===t.external&&O.unshift("platform preview")}catch(e){O.unshift("embedded")}else(/\bBlackBerry\b/.test(k)||/\bBB10\b/.test(s))&&(o=(RegExp(k.replace(/ +/g," *")+"/([.\\d]+)","i").exec(s)||0)[1]||M)?(C=((o=[o,/BB10/.test(s)])[1]?(k=null,A="BlackBerry"):"Device Software")+" "+o[0],M=null):this!=N&&"Wii"!=k&&(_&&S||/Opera/.test(T)&&/\b(?:MSIE|Firefox)\b/i.test(s)||"Firefox"==T&&/\bOS X (?:\d+\.){2,}/.test(C)||"IE"==T&&(C&&!/^Win/.test(C)&&5.5<M||/\bWindows XP\b/.test(C)&&8<M||8==M&&!/\bTrident\b/.test(s)))&&!j.test(o=e.call(N,s.replace(j,"")+";"))&&o.name&&(o="ing as "+o.name+((o=o.version)?" "+o:""),j.test(T)?(/\bIE\b/.test(o)&&"Mac OS"==C&&(C=null),o="identify"+o):(o="mask"+o,T=x?L(x.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(o)&&(C=null),_||(M=null)),P=["Presto"],O.push(o));else T+=" Mobile";(o=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(s)||0)[1])&&(o=[parseFloat(o.replace(/\.(\d)$/,".0$1")),o],"Safari"==T&&"+"==o[1].slice(-1)?(T="WebKit Nightly",E="alpha",M=o[1].slice(0,-1)):M!=o[1]&&M!=(o[2]=(/\bSafari\/([\d.]+\+?)/i.exec(s)||0)[1])||(M=null),o[1]=(/\bChrome\/([\d.]+)/i.exec(s)||0)[1],537.36==o[0]&&537.36==o[2]&&28<=parseFloat(o[1])&&"WebKit"==P&&(P=["Blink"]),o=_&&(u||o[1])?(P&&(P[1]="like Chrome"),o[1]||((o=o[0])<530?1:o<532?2:o<532.05?3:o<533?4:o<534.03?5:o<534.07?6:o<534.1?7:o<534.13?8:o<534.16?9:o<534.24?10:o<534.3?11:o<535.01?12:o<535.02?"13+":o<535.07?15:o<535.11?16:o<535.19?17:o<536.05?18:o<536.1?19:o<537.01?20:o<537.11?"21+":o<537.13?23:o<537.18?24:o<537.24?25:o<537.36?26:"Blink"!=P?"27":"28")):(P&&(P[1]="like Safari"),(o=o[0])<400?1:o<500?2:o<526?3:o<533?4:o<534?"4+":o<535?5:o<537?6:o<538?7:o<601?8:"8"),P&&(P[1]+=" "+(o+="number"==typeof o?".x":/[.+]/.test(o)?"":"+")),"Safari"==T&&(!M||45<parseInt(M))&&(M=o)),"Opera"==T&&(o=/\bzbov|zvav$/.exec(C))?(T+=" ",O.unshift("desktop mode"),"zvav"==o?(T+="Mini",M=null):T+="Mobile",C=C.replace(RegExp(" *"+o+"$"),"")):"Safari"==T&&/\bChrome\b/.exec(P&&P[1])&&(O.unshift("desktop mode"),T="Chrome Mobile",M=null,C=/\bOS X\b/.test(C)?(A="Apple","iOS 4.3+"):null),M&&0==M.indexOf(o=/[\d.]+$/.exec(C))&&-1<s.indexOf("/"+o+"-")&&(C=K(C.replace(o,""))),P&&!/\b(?:Avant|Nook)\b/.test(T)&&(/Browser|Lunascape|Maxthon/.test(T)||"Safari"!=T&&/^iOS/.test(C)&&/\bSafari\b/.test(P[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(T)&&P[1])&&(o=P[P.length-1])&&O.push(o),O.length&&(O=["("+O.join("; ")+")"]),A&&k&&k.indexOf(A)<0&&O.push("on "+A),k&&O.push((/^on /.test(O[O.length-1])?"":"on ")+k),C&&(o=/ ([\d.+]+)$/.exec(C),a=o&&"/"==C.charAt(C.length-o[0].length-1),C={architecture:32,family:o&&!a?C.replace(o[0],""):C,version:o?o[1]:null,toString:function(){var e=this.version;return this.family+(e&&!a?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(o=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(w))&&!/\bi686\b/i.test(w)?(C&&(C.architecture=64,C.family=C.family.replace(RegExp(" *"+o),"")),T&&(/\bWOW64\b/i.test(s)||_&&/\w(?:86|32)$/.test(i.cpuClass||i.platform)&&!/\bWin64; x64\b/i.test(s))&&O.unshift("32-bit")):C&&/^OS X/.test(C.family)&&"Chrome"==T&&39<=parseFloat(M)&&(C.architecture=64),s||(s=null);var I={};return I.description=s,I.layout=P&&P[0],I.manufacturer=A,I.name=T,I.prerelease=E,I.product=k,I.ua=s,I.version=T&&M,I.os=C||{architecture:null,family:null,version:null,toString:function(){return"null"}},I.parse=e,I.toString=function(){return this.description||""},I.version&&O.unshift(M),I.name&&O.unshift(T),C&&T&&(C!=String(C).split(" ")[0]||C!=T.split(" ")[0]&&!k)&&O.push(k?"("+C+")":"on "+C),O.length&&(I.description=O.join(" ")),I}();"function"==typeof define&&"object"==_typeof(define.amd)&&define.amd?(W.platform=l,define(function(){return l})):n&&t?N(l,function(e,t){n[t]=e}):W.platform=l}).call(this);var WheelIndicator=function(o,e){function t(e){this._options=a(u,e),this._deltaArray=[0,0,0],this._isAcceleration=!1,this._isStopped=!0,this._direction="",this._timer="",this._isWorking=!0;var t,n,i,r=this;this._wheelHandler=function(e){var t;r._isWorking&&(function(e){var t=this,n=c(e);if(0!==n){var i,r=0<n?"down":"up",o=t._deltaArray.length,a=!1,s=0;for(clearTimeout(t._timer),t._timer=setTimeout(function(){t._deltaArray=[0,0,0],t._isStopped=!0,t._direction=r},150),i=0;i<o;i++)0!==t._deltaArray[i]&&(0<t._deltaArray[i]?++s:--s);Math.abs(s)===o&&((0<s?"down":"up")!==t._direction&&(a=!0,t._direction=r)),t._isStopped||(a?(t._isAcceleration=!0,l.call(this,e)):Math.abs(s)===o&&function(e){var t=Math.abs(this._deltaArray[0]),n=Math.abs(this._deltaArray[1]),i=Math.abs(this._deltaArray[2]),r=Math.abs(c(e));i<r&&n<i&&t<n&&(this._isAcceleration||(l.call(this,e),this._isAcceleration=!0)),r<i&&i<=n&&(this._isAcceleration=!1)}.call(this,e)),t._isStopped&&(t._isStopped=!1,t._isAcceleration=!0,t._direction=r,l.call(this,e)),t._deltaArray.shift(),t._deltaArray.push(n)}}.call(r,e),r._options.preventMouse&&((t=(t=e)||o.event).preventDefault?t.preventDefault():t.returnValue=!1))},t=this._options.elem,n=s,i=this._wheelHandler,t.addEventListener?t.addEventListener(n,i,!!p&&{passive:!0}):t.attachEvent&&t.attachEvent("on"+n,i)}function l(e){e.direction=this._direction,this._options.callback.call(this,e)}function a(e,t){var n,i={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);return i}var s="onwheel"in e?"wheel":"mousewheel",u={callback:function(){},elem:e,preventMouse:!0};t.prototype={constructor:t,turnOn:function(){return this._isWorking=!0,this},turnOff:function(){return this._isWorking=!1,this},setOptions:function(e){return this._options=a(this._options,e),this},getOption:function(e){var t=this._options[e];if(void 0!==t)return t;throw Error("Unknown option")},destroy:function(){return e=this._options.elem,t=s,n=this._wheelHandler,e.removeEventListener?e.removeEventListener(t,n,!!p&&{passive:!0}):e.detachEvent&&e.detachEvent("on"+t,n),this;var e,t,n}};var c=function(e){return(c=e.wheelDelta&&!e.deltaY?function(e){return-1*e.wheelDelta}:function(e){return e.deltaY})(e)},p=function(){var e=!1;try{var t=Object.defineProperty&&Object.defineProperty({},"passive",{get:function(){e=!0}});o.addEventListener("test",function(){},t)}catch(e){}return e}();return t}("undefined"!=typeof window?window:this,document);"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&(module.exports=WheelIndicator),function(e){"use strict";var d="hasOwnProperty",i="length",r="replace",t=/\{\{(([@!]?)(.+?))\}\}(([\s\S]+?)(\{\{:\1\}\}([\s\S]+?))?)\{\{\/\1\}\}/g,n=/\{\{([=%])(.+?)\}\}/g,o=function(e){this.t=e};function f(e,t){for(var n=t.split(".");n[i];){if(!(n[0]in e))return!1;e=e[n.shift()]}return e}function b(e,p){return e[r](t,function(e,t,n,i,r,o,a,s){var l,u=f(p,i),c="";if(!u)return"!"===n?b(r,p):a?b(s,p):"";if(!n)return b(o,p);if("@"===n){for(l in e=p._key,t=p._val,u)u[d](l)&&(p._key=l,p._val=u[l],c+=b(r,p));return p._key=e,p._val=t,c}}).replace(n,function(e,t,n){var i=f(p,n);return i||0===i?"%"===t?new Option(i).text[r](/"/g,"&quot;"):i:""})}o.prototype.render=function(e){return b(this.t,e)},e.t=o}("undefined"!=typeof window?window:this),function(v,g){"use strict";v.echo=function(e,t,n){var i=e||"data-src-img",s=t||"src",r=n||100,o="addEventListener",a="classList",l="defineProperty",u="documentElement",c=function(e){this.elem=e,this.render(),this.listen()},p="echo--is-binded",d=g[u][a].contains(p)||"",f=[],b=function(){for(var e=0;e<f.length;e++){var t=f[e];(0<=(a=t.getBoundingClientRect()).top&&0<=a.left&&a.top)<=(v.innerHeight||g[u].clientHeight)&&(r=n=t,o=e,i=void(-1!==f.indexOf(r)&&f.splice(o,1)),n.src=n.dataset[s]||n.getAttribute("data-"+s),i&&i())}var n,i,r,o,a},h=function(e,t){var n,i,r,o,a=0;function s(){o=0,a=+new Date,r=e.apply(n,i),i=n=null}return function(){n=this,i=arguments;var e=new Date-a;return o||(t<=e?s():o=setTimeout(s,t-e)),r}}(b,r),y=function(){var e=!1;try{var t=Object[l]&&Object[l]({},"passive",{get:function(){e=!0}});v[o]("test",function(){},t)}catch(e){}return e}();c.prototype={init:function(){f.push(this.elem)},render:function(){b()},listen:function(){d||(v[o]("scroll",h,!!y&&{passive:!0}),g[u][a].add(p))}};var m=g.getElementsByClassName(i)||"";m&&function(){for(var e=0;e<m.length;e++)new c(m[e]).init()}()}}("undefined"!=typeof window?window:this,document),function(e,o){"use strict";var i;i=function(e,t,n){var i={"#":"getElementById",".":"getElementsByClassName","@":"getElementsByName","=":"getElementsByTagName","*":"querySelectorAll"}[e[0]],r=(t===n?o:t)[i](e.slice(1));return r.length<2?r[0]:r};var t=function(e){var t=e.container instanceof Node?e.container:i(e.container)||"",n=e.item instanceof NodeList?e.item:i(e.item)||"";this.props=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}(e,{container:t,nodeList:n})};t.prototype.mount=function(){if(!this.props.container)return!1;if(!this.props.nodeList||0===this.props.nodeList.length)return!1;var r="number"==typeof this.props.gutter&&isFinite(this.props.gutter)&&Math.floor(this.props.gutter)===this.props.gutter?this.props.gutter:0,e=this.props.done,t=this.props.container,n=this.props.nodeList;t.style.width="";var i=Array.prototype.forEach,o=t.getBoundingClientRect().width,a=n[0].getBoundingClientRect().width+r,s=Math.max(Math.floor((o-r)/a),1);o=a*s+r+"px",t.style.width=o,t.style.position="relative";for(var l=[],u=[],c=0;c<s;++c)u.push(c*a+r),l.push(r);this.props.rtl&&u.reverse(),i.call(n,function(e){var t=l.slice(0).sort(function(e,t){return e-t}).shift();t=l.indexOf(t);var n=parseInt(u[t]),i=parseInt(l[t]);e.style.position="absolute",e.style.webkitBackfaceVisibility=e.style.backfaceVisibility="hidden",e.style.transformStyle="preserve-3d",e.style.transform="translate3D("+n+"px,"+i+"px, 0)",l[t]+=e.getBoundingClientRect().height+r,1}),t.style.display="";var p=l.slice(0).sort(function(e,t){return e-t}).pop();t.style.height=p+"px","function"==typeof e&&e(n)},e.Minigrid=t}("undefined"!=typeof window?window:this,document),function(a,e){"use strict";if("function"!=typeof a.createEvent)return;var s,l,u,c,p,d,f,b,h,y=0,t=function(e){var t=e.toLowerCase(),n="MS"+e;return navigator.msPointerEnabled?n:window.PointerEvent?t:""},m={useJquery:!e.IGNORE_JQUERY&&"undefined"!=typeof jQuery,swipeThreshold:e.SWIPE_THRESHOLD||100,tapThreshold:e.TAP_THRESHOLD||150,dbltapThreshold:e.DBL_TAP_THRESHOLD||200,longtapThreshold:e.LONG_TAP_THRESHOLD||1e3,tapPrecision:e.TAP_PRECISION/2||30,justTouchEvents:e.JUST_ON_TOUCH_DEVICES},v=!1,n=t("PointerDown")||"touchstart",i=t("PointerUp")+" touchend",r=t("PointerMove")+" touchmove",g=function(e){return!e.pointerId||void 0===s||e.pointerId===s},o=function(e,t,n){for(var i=t.split(" "),r=i.length;r--;)e.addEventListener(i[r],n,!1)},S=function(e){return e.targetTouches?e.targetTouches[0]:e},x=function(){return(new Date).getTime()},w=function(e,t,n,i){var r=a.createEvent("Event");if(r.originalEvent=n,(i=i||{}).x=l,i.y=u,i.distance=i.distance,m.useJquery&&(r=jQuery.Event(t,{originalEvent:n}),jQuery(e).trigger(r,i)),r.initEvent){for(var o in i)i.hasOwnProperty(o)&&(r[o]=i[o]);r.initEvent(t,!0,!0),e.dispatchEvent(r)}for(;e;)e["on"+t]&&e["on"+t](r),e=e.parentNode};o(a,n+(m.justTouchEvents?"":" mousedown"),function(e){if(g(e)){var t="mousedown"===e.type;if(v=!t,s=e.pointerId,"mousedown"!==e.type||!v){var n=S(e);c=l=n.pageX,p=u=n.pageY,h=setTimeout(function(){w(e.target,"longtap",e),f=e.target},m.longtapThreshold),d=x(),y++}}}),o(a,i+(m.justTouchEvents?"":" mouseup"),function(e){if(g(e))if(s=void 0,"mouseup"===e.type&&v)v=!1;else{var t=[],n=x(),i=p-u,r=c-l;if(clearTimeout(b),clearTimeout(h),r<=-m.swipeThreshold&&t.push("swiperight"),r>=m.swipeThreshold&&t.push("swipeleft"),i<=-m.swipeThreshold&&t.push("swipedown"),i>=m.swipeThreshold&&t.push("swipeup"),t.length){for(var o=0;o<t.length;o++){var a=t[o];w(e.target,a,e,{distance:{x:Math.abs(r),y:Math.abs(i)}})}y=0}else c>=l-m.tapPrecision&&c<=l+m.tapPrecision&&p>=u-m.tapPrecision&&p<=u+m.tapPrecision&&0<=d+m.tapThreshold-n&&(w(e.target,2<=y&&f===e.target?"dbltap":"tap",e),f=e.target),b=setTimeout(function(){y=0},m.dbltapThreshold)}}),o(a,r+(m.justTouchEvents?"":" mousemove"),function(e){if(g(e)&&("mousemove"!==e.type||!v)){var t=S(e);l=t.pageX,u=t.pageY}}),e.tocca=function(e){for(var t in e)e.hasOwnProperty(t)&&(m[t]=e[t]);return m}}(document,"undefined"!=typeof window?window:this);
//# sourceMappingURL=vendors.min.js.map

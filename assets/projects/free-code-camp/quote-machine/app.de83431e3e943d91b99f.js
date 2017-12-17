webpackJsonp([0],[function(e,t,n){"use strict";function isArray(e){return"[object Array]"===i.call(e)}function isArrayBuffer(e){return"[object ArrayBuffer]"===i.call(e)}function isFormData(e){return"undefined"!=typeof FormData&&e instanceof FormData}function isArrayBufferView(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function isString(e){return"string"==typeof e}function isNumber(e){return"number"==typeof e}function isUndefined(e){return void 0===e}function isObject(e){return null!==e&&"object"==typeof e}function isDate(e){return"[object Date]"===i.call(e)}function isFile(e){return"[object File]"===i.call(e)}function isBlob(e){return"[object Blob]"===i.call(e)}function isFunction(e){return"[object Function]"===i.call(e)}function isStream(e){return isObject(e)&&isFunction(e.pipe)}function isURLSearchParams(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function trim(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function isStandardBrowserEnv(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function forEach(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),isArray(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function merge(){function assignValue(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=merge(e[n],t):e[n]=t}for(var e={},t=0,n=arguments.length;t<n;t++)forEach(arguments[t],assignValue);return e}function extend(e,t,n){return forEach(t,function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t}),e}var r=n(3),o=n(15),i=Object.prototype.toString;e.exports={isArray:isArray,isArrayBuffer:isArrayBuffer,isBuffer:o,isFormData:isFormData,isArrayBufferView:isArrayBufferView,isString:isString,isNumber:isNumber,isObject:isObject,isUndefined:isUndefined,isDate:isDate,isFile:isFile,isBlob:isBlob,isFunction:isFunction,isStream:isStream,isURLSearchParams:isURLSearchParams,isStandardBrowserEnv:isStandardBrowserEnv,forEach:forEach,merge:merge,extend:extend,trim:trim}},function(e,t,n){"use strict";(function(t){function setContentTypeIfUnset(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var r=n(0),o=n(18),i={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(4):void 0!==t&&(e=n(4)),e}(),transformRequest:[function(e,t){return o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(setContentTypeIfUnset(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(setContentTypeIfUnset(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){u.headers[e]={}}),r.forEach(["post","put","patch"],function(e){u.headers[e]=r.merge(i)}),e.exports=u}).call(t,n(17))},function(e,t,n){"use strict";function $on(e,t,n,r){e.addEventListener(t,n,r)}function qs(e,t){return(t||document).querySelector(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.$on=$on,t.qs=qs},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0),o=n(19),i=n(21),u=n(22),s=n(23),a=n(5),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(24);e.exports=function(e){return new Promise(function(t,f){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(e.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var w=e.auth.username||"",y=e.auth.password||"";p.Authorization="Basic "+c(w+":"+y)}if(d.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?u(d.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?d.response:d.responseText,i={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:e,request:d};o(t,f,i),d=null}},d.onerror=function(){f(a("Network Error",e,null,d)),d=null},d.ontimeout=function(){f(a("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var v=n(25),g=(e.withCredentials||s(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;g&&(p[e.xsrfHeaderName]=g)}if("setRequestHeader"in d&&r.forEach(p,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===l&&(l=null),d.send(l)})}},function(e,t,n){"use strict";var r=n(20);e.exports=function(e,t,n,o,i){var u=new Error(e);return r(u,t,n,o,i)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function Cancel(e){this.message=e}Cancel.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},Cancel.prototype.__CANCEL__=!0,e.exports=Cancel},function(e,t,n){"use strict";n(9);var r=n(2),o=n(10),i=function(e){return e&&e.__esModule?e:{default:e}}(o),u=n(12),s=function(e){return function(){u.QuotesAPI.random().then(function(t){e.setQuoteValue(t)})}},a=function(e){return function(){u.TweeterAPI.tweet(e)}},c=u.QuotesAPI.random().then(function(e){var t=new i.default;t.setQuoteValue(e),t.bindNewQuote(s(t)),t.bindTweetButton(a(t.getQuote()))});(0,r.$on)(window,"load",c)},function(e,t){},function(e,t,n){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(2),i=n(11),u=function(){function QuoteComponent(){_classCallCheck(this,QuoteComponent),this.$quote=(0,o.qs)("#quote"),this.$newQuoteButton=(0,o.qs)("button#new-quote"),this.$authorText=(0,o.qs)("#quote-author"),this.$tweetQuoteButton=(0,o.qs)("#tweet-quote")}return r(QuoteComponent,[{key:"setQuoteValue",value:function(e){this.$quote.innerText=e.quote,this.$authorText.innerText="-  "+e.author,this.$tweetQuoteButton.setAttribute("href",'https://twitter.com/intent/tweet?hashtags=quote&text="'+e.quote+'" '+e.author)}},{key:"getQuote",value:function(){return new i.Quote(this.$quote.innerText,this.$authorText.innerText.substr(2))}},{key:"bindNewQuote",value:function(e){(0,o.$on)(this.$newQuoteButton,"click",e)}},{key:"bindTweetButton",value:function(e){(0,o.$on)(this.$tweetQuoteButton,"click",e)}}]),QuoteComponent}();t.default=u},function(e,t,n){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});t.Quote=function Quote(e,t){_classCallCheck(this,Quote),this.quote=e,this.author=t}},function(e,t,n){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.TweeterAPI=t.QuotesAPI=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(13),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.QuotesAPI=function(){function QuotesAPI(){_classCallCheck(this,QuotesAPI)}return r(QuotesAPI,null,[{key:"random",value:function(){return this.client.get("cat=").then(function(e){return e.data}).catch(function(){throw new Error("Failed to get a quote")})}},{key:"client",get:function(){return i.default.create({baseURL:"https://andruxnet-random-famous-quotes.p.mashape.com",timeout:1e3,headers:{"X-Mashape-Key":"OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V"}})}}]),QuotesAPI}(),t.TweeterAPI=function(){function TweeterAPI(){_classCallCheck(this,TweeterAPI)}return r(TweeterAPI,null,[{key:"tweet",value:function(e){return this.client.get("intent/tweet",{params:{hashtags:"quote",text:'"'+e.quote+'" '+e.author}})}},{key:"client",get:function(){return i.default.create({baseURL:"https://twitter.com",timeout:1e3,headers:{}})}}]),TweeterAPI}()},function(e,t,n){e.exports=n(14)},function(e,t,n){"use strict";function createInstance(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var r=n(0),o=n(3),i=n(16),u=n(1),s=createInstance(u);s.Axios=i,s.create=function(e){return createInstance(r.merge(u,e))},s.Cancel=n(7),s.CancelToken=n(31),s.isCancel=n(6),s.all=function(e){return Promise.all(e)},s.spread=n(32),e.exports=s,e.exports.default=s},function(e,t){function isBuffer(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function isSlowBuffer(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&isBuffer(e.slice(0,0))}e.exports=function(e){return null!=e&&(isBuffer(e)||isSlowBuffer(e)||!!e._isBuffer)}},function(e,t,n){"use strict";function Axios(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var r=n(1),o=n(0),i=n(26),u=n(27);Axios.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),e=o.merge(r,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase();var t=[u,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(e){Axios.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){Axios.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=Axios},function(e,t){function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(e){if(n===setTimeout)return setTimeout(e,0);if((n===defaultSetTimout||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}function runClearTimeout(e){if(r===clearTimeout)return clearTimeout(e);if((r===defaultClearTimeout||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}function cleanUpNextTick(){s&&i&&(s=!1,i.length?u=i.concat(u):a=-1,u.length&&drainQueue())}function drainQueue(){if(!s){var e=runTimeout(cleanUpNextTick);s=!0;for(var t=u.length;t;){for(i=u,u=[];++a<t;)i&&i[a].run();a=-1,t=u.length}i=null,s=!1,runClearTimeout(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}var n,r,o=e.exports={};!function(){try{n="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){n=defaultSetTimout}try{r="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){r=defaultClearTimeout}}();var i,u=[],s=!1,a=-1;o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new Item(e,t)),1!==u.length||s||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=noop,o.addListener=noop,o.once=noop,o.off=noop,o.removeListener=noop,o.removeAllListeners=noop,o.emit=noop,o.prependListener=noop,o.prependOnceListener=noop,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(5);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";function encode(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var r=n(0);e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var i=[];r.forEach(t,function(e,t){null!==e&&void 0!==e&&(r.isArray(e)&&(t+="[]"),r.isArray(e)||(e=[e]),r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(encode(t)+"="+encode(e))}))}),o=i.join("&")}return o&&(e+=(-1===e.indexOf("?")?"?":"&")+o),e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,u={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(u[t]&&o.indexOf(t)>=0)return;u[t]="set-cookie"===t?(u[t]?u[t]:[]).concat([n]):u[t]?u[t]+", "+n:n}}),u):u}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){function resolveURL(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");return e=resolveURL(window.location.href),function(t){var n=r.isString(t)?resolveURL(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";function E(){this.message="String contains an invalid character"}function btoa(e){for(var t,n,o=String(e),i="",u=0,s=r;o.charAt(0|u)||(s="=",u%1);i+=s.charAt(63&t>>8-u%1*8)){if((n=o.charCodeAt(u+=.75))>255)throw new E;t=t<<8|n}return i}var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";E.prototype=new Error,E.prototype.code=5,E.prototype.name="InvalidCharacterError",e.exports=btoa},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,u){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===u&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";function InterceptorManager(){this.handlers=[]}var r=n(0);InterceptorManager.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},InterceptorManager.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},InterceptorManager.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=InterceptorManager},function(e,t,n){"use strict";function throwIfCancellationRequested(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var r=n(0),o=n(28),i=n(6),u=n(1),s=n(29),a=n(30);e.exports=function(e){return throwIfCancellationRequested(e),e.baseURL&&!s(e.url)&&(e.url=a(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||u.adapter)(e).then(function(t){return throwIfCancellationRequested(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(throwIfCancellationRequested(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";function CancelToken(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}var r=n(7);CancelToken.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},CancelToken.source=function(){var e;return{token:new CancelToken(function(t){e=t}),cancel:e}},e.exports=CancelToken},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}],[8]);
!function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s=2)}([function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.h=function(a,b){for(var c=[],d=[],f=arguments.length;2<f--;)c.push(arguments[f]);for(;c.length;){var g=c.pop();if(g&&g.pop)for(f=g.length;f--;)c.push(g[f]);else null!=g&&!0!==g&&!1!==g&&d.push(g)}return"function"==typeof a?a(b||{},d):{nodeName:a,attributes:b||{},children:d,key:b&&b.key}},b.app=function(j,e,k,n){function q(a){return"function"==typeof a?q(a(l,f)):null==a?"":a}function d(){t=!t;var b=q(k);for(n&&!t&&(u=function d(e,h,k,l,n){if(l===k);else if(null==k||k.nodeName!==l.nodeName){var o=function a(b,d){var e="string"==typeof b||"number"==typeof b?document.createTextNode(b):(d=d||"svg"===b.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",b.nodeName):document.createElement(b.nodeName),f=b.attributes;if(f){f.oncreate&&c.push(function(){f.oncreate(e)});for(var h=0;h<b.children.length;h++)e.appendChild(a(b.children[h]=q(b.children[h]),d));for(var j in f)g(e,j,f[j],null,d)}return e}(l,n);e.insertBefore(o,h),null!=k&&m(e,h,k),h=o}else if(null==k.nodeName)h.nodeValue=l;else{!function(b,d,e,f){for(var h in v(d,e))e[h]!==("value"===h||"checked"===h?b[h]:d[h])&&g(b,h,e[h],d[h],f);var i=a?e.oncreate:e.onupdate;i&&c.push(function(){i(b,d)})}(h,k.attributes,l.attributes,n=n||"svg"===l.nodeName);for(var i={},t={},f=[],s=k.children,p=l.children,u=0;u<s.length;u++){f[u]=h.childNodes[u];var w=r(s[u]);null!=w&&(i[w]=[f[u],s[u]])}for(var u=0,b=0;b<p.length;){var w=r(s[u]),y=r(p[b]=q(p[b]));if(t[w])u++;else if(null==y||a)null==w&&(d(h,f[u],s[u],p[b],n),b++),u++;else{var j=i[y]||[];w===y?(d(h,j[0],j[1],p[b],n),u++):j[0]?d(h,h.insertBefore(j[0],f[u]),j[1],p[b],n):d(h,f[u],null,p[b],n),t[y]=p[b],b++}}for(;u<s.length;)null==r(s[u])&&m(h,f[u],s[u]),u++;for(var u in i)t[u]||m(h,i[u][0],i[u][1])}return h}(n,u,i,i=b)),a=!1;c.length;)c.pop()()}function p(){t||(t=!0,setTimeout(d))}function v(a,b){var c={};for(var d in a)c[d]=a[d];for(var d in b)c[d]=b[d];return c}function h(a,b,c){var d={};return a.length?(d[a[0]]=1<a.length?h(a.slice(1),b,c[a[0]]):b,v(c,d)):b}function x(a,b){for(var c=0;c<a.length;)b=b[a[c++]];return b}function r(a){return a?a.key:null}function b(a){return a.currentTarget.events[a.type](a)}function g(a,c,d,e,f){if("key"===c);else if("style"===c)for(var g in v(e,d)){var h=null==d||null==d[g]?"":d[g];"-"===g[0]?a[c].setProperty(g,h):a[c][g]=h}else"o"===c[0]&&"n"===c[1]?(c=c.slice(2),a.events?e||(e=a.events[c]):a.events={},a.events[c]=d,d?e||a.addEventListener(c,b):a.removeEventListener(c,b)):c in a&&"list"!==c&&!f?a[c]=null==d?"":d:null!=d&&!1!==d&&a.setAttribute(c,d),null!=d&&!1!==d||a.removeAttribute(c)}function m(a,b,c){function d(){a.removeChild(function a(b,c){var d=c.attributes;if(d){for(var e=0;e<c.children.length;e++)a(b.childNodes[e],c.children[e]);d.ondestroy&&d.ondestroy(b)}return b}(b,c))}var e=c.attributes&&c.attributes.onremove;e?e(b,d):d()}var t,w=[].map,u=n&&n.children[0]||null,i=u&&function a(b){return{nodeName:b.nodeName.toLowerCase(),attributes:{},children:w.call(b.childNodes,function(b){return 3===b.nodeType?b.nodeValue:a(b)})}}(u),c=[],a=!0,l=v(j),f=function a(b,c,d){for(var e in d)"function"==typeof d[e]?function(a,f){d[a]=function(a){var e=f(a);return"function"==typeof e&&(e=e(x(b,l),d)),e&&e!==(c=x(b,l))&&!e.then&&p(l=h(b,v(c,e),l)),e}}(e,d[e]):a(b.concat(e),c[e]=v(c[e]),d[e]=v(d[e]));return d}([],l,v(e));return p(),f}},function(a,b,c){var d=c(5),f=c(6);a.exports=function(a,b,g){var h=b&&g||0;"string"==typeof a&&(b="binary"===a?Array(16):null,a=null);var j=(a=a||{}).random||(a.rng||d)();if(j[6]=64|15&j[6],j[8]=128|63&j[8],b)for(var i=0;16>i;++i)b[h+i]=j[i];return b||f(j)}},function(a,b,c){c(3),a.exports=c(7)},function(b,d,e){"use strict";function f(a){if(null==a)throw new TypeError("Cannot destructure undefined")}Object.defineProperty(d,"__esModule",{value:!0});var c=e(0),g=function(){return Object(c.h)("div",null,Object(c.h)("h1",null,"Hyperapp Google Invisible Recaptcha"),Object(c.h)("p",null,Object(c.h)("em",null,"Minimal demo demonstrating the invisible recaptcha usage")),Object(c.h)("hr",null))},h=e(4),j=e.n(h),i=null;!function(a){if(null==a)throw new TypeError("Cannot destructure undefined")}(Object(c.app)(null,null,function(a,b){return f(b),f(a),Object(c.h)("div",null,Object(c.h)(g,null),Object(c.h)(j.a,{onInstanceCreated:function(a){return i=a},sitekey:"6LcbGj4UAAAAACOzp7aOXS6J4kTJBRPJNy5O3JBh",onResolved:function(){alert("Captcha solved with response: "+i.getResponse())}}),Object(c.h)("section",null,Object(c.h)("button",{onclick:function(){return i&&(i.reset(),void i.execute())}},"Validate Recaptcha")))},document.body))},function(a,b,d){var e,f,g,h,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};h=function(a,b){"use strict";b=b&&b.hasOwnProperty("default")?b.default:b;var g=[],d=null,c=function(h){var j=h.sitekey,e=h.locale,i=h.badge,k=h.onResolved,a=h.onLoaded,l=h.onInstanceCreated;e||(e="en"),i||(i="bottomright"),a||(a=function(){});var f="GoogleRecaptchaResolved-"+b();window[f]=k;var m=function(){if(d){var b=window.grecaptcha.render(d,{sitekey:j,size:"invisible",badge:i,callback:f});l({execute:function(){return window.grecaptcha.execute(b)},reset:function(){return window.grecaptcha.reset(b)},getResponse:function(){return window.grecaptcha.getResponse(b)}}),a()}};window.grecaptcha?m():(g.push(m),document.querySelector("#recaptcha")||function(a){window.GoogleRecaptchaLoaded=function(){for(;g.length;)g.pop()()};var b=document.createElement("script");b.id="recaptcha",b.src="https://www.google.com/recaptcha/api.js?hl="+a+"&onload=GoogleRecaptchaLoaded&render=explicit",b.type="text/javascript",b.async=!0,b.defer=!0,b.onerror=function(a){throw a},document.body.appendChild(b)}(e))};return function(b){return a.h("div",{oncreate:function(a){d=a,c(b)}},[])}},"object"==i(b)&&void 0!==a?a.exports=h(d(0),d(1)):(f=[d(0),d(1)],void 0===(g="function"==typeof(e=h)?e.apply(b,f):e)||(a.exports=g))},function(a){var b="undefined"!=typeof crypto&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&msCrypto.getRandomValues.bind(msCrypto);if(b){var c=new Uint8Array(16);a.exports=function(){return b(c),c}}else{var d=Array(16);a.exports=function(){for(var a,b=0;16>b;b++)0==(3&b)&&(a=4294967296*Math.random()),d[b]=255&a>>>((3&b)<<3);return d}}},function(a){for(var b=[],c=0;256>c;++c)b[c]=(c+256).toString(16).substr(1);a.exports=function(a,c){var d=c||0,e=b;return e[a[d++]]+e[a[d++]]+e[a[d++]]+e[a[d++]]+"-"+e[a[d++]]+e[a[d++]]+"-"+e[a[d++]]+e[a[d++]]+"-"+e[a[d++]]+e[a[d++]]+"-"+e[a[d++]]+e[a[d++]]+e[a[d++]]+e[a[d++]]+e[a[d++]]+e[a[d++]]}},function(){}]);
var j=!0,k=null,m=!1,n=this,q=document;function r(a){return"string"==typeof a}function s(a){return"function"==typeof a}function t(a){return a&&a.length!=k&&!r(a)&&!(a&&a.nodeType)&&!s(a)}function u(a,b){if(t(a))for(var c=0;c<a.length;c++)b(a[c],c);else for(c in a)a.hasOwnProperty(c)&&b(c,a[c]);return a}function v(a,b){var c=[];u(a,function(a,e){b(a,e)&&c.push(a)});return c}function w(a,b,c){c=c||[];u(a,function(a,e){t(a=b(a,e))?u(a,function(a){c.push(a)}):a!=k&&c.push(a)});return c}function x(a,b,c){return(a!=k?""+a:"").replace(b,c||"")}function y(a){return parseFloat(x(a,/^[^\d-]/))}function A(a){var b={m:"absolute",g:"hidden",d:"block",f:k},c=a.get(b);a.set(b);b=a[0].offsetHeight;a.set(c);return b}function B(a){a()}function E(a){F?F.push(a):n.setTimeout(a,0)}function G(){function a(a,e){b==k&&(b=a,c=e,n.setTimeout(function(){u(d,B)},0))}var b,c=[],d=[],e=a.then=function(a,e){function f(){try{var d=b?a:e;if(s(d)){var f=d.apply(k,c);f&&s(f.then)?f.then(function(a){l(j,[a])},function(a){l(m,[a])}):l(j,[f])}else l(b,c)}catch(D){l(m,[D])}}var l=G();b!=k?n.setTimeout(f,0):d.push(f);return l};a.always=function(a){return e(a,a)};a.error=function(a){return e(0,a)};return a}function H(a,b,c){return s(a)?E(a):new I(J(a,b,c))}function J(a,b,c){function d(a){return t(a)?w(a,d):a}function e(a){a=d(a);return h?v(a,function(a){for(;a=a.parentNode;){if(a===h)return j;if(c)return m}}):a}var h;if(b&&1!=(b=J(b)).length)return w(b,function(b){return J(a,b)});h=b&&b[0];if(!r(a))return e(t(a)?a:[a]);b=(h||q).querySelectorAll(a);return c?e(b):b}function I(a){for(var b=0;b<a.length;b++)this[b]=a[b];this.length=a.length}var F=[],K=[],L=w(["msR","webkitR","mozR","r"],function(a){return n[a+"equestAnimationFrame"]})[0]||function(a){n.setTimeout(a,33)};u({each:function(a){u(this,a);return this},filter:function(a){return new I(v(this,a))},collect:function(a,b){return new I(w(this,a,b))},sub:function(a,b){var c=this.length,d=0>a?c+a:a,e=b==k?c:0<=b?b:c+b;return this.filter(function(a,b){return b>=d&&b<e})},find:function(a){for(var b=s(a)?a:function(b,c){if(a===b)return c},c,d=0;d<this.length;d++)if((c=b(this[d],d))!=k)return c},hasClass:function(a){var b=RegExp("\\b"+a+"\\b");return this.find(function(a){return b.test(a.className)?a:k})},remove:function(){this.each(function(a){a.parentNode.removeChild(a)})},get:function(a,b){var c=this,d=c[0];if(d){if(r(a)){var e=x(a,/^[$@]/),h,g=/^\$\$/.test(a)&&("hidden"==c.get("$visibility")||"none"==c.get("$display"));h="$"==a?d.className:"$$"==a?d.getAttribute("style"):"$$fade"==a?isNaN(h=g?0:y(c.get("$opacity")))?1:h:"$$slide"==a?(g?0:d.offsetHeight)+"px":/^\$/.test(a)?n.getComputedStyle(d,k).getPropertyValue(x(e,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):/^@/.test(a)?d.getAttribute(e):d[e];return b?y(h):h}var f={};u(a,function(a){f[a]=c.get(a)});return f}},set:function(a,b,c){var d=this,e;void 0!==b?"$$fade"==a||"$$slide"==a?d.set({g:0<(e=y(b))?"visible":"hidden",d:"block"}).set("$$fade"==a?{k:e}:{f:/px$/.test(b)?b:function(a,b,c){return e*(e&&A($(c)))+"px"},l:"hidden"}):d.each(function(d,e){var f=s(b)?b:c,l=x(a,/^[@$]/),p=d.className||"",z=/^\$/.test(a)?d.style:d,f=f?f(H(d).get(a),e,d,b):b;"$"==a?(u(f.split(/\s+/),function(a){var b=x(a,/^[+-]/),c=p;p=x(p,RegExp("\\b"+b+"\\b"));if(/^\+/.test(a)||b==a&&c==p)p+=" "+b}),d.className=x(p,/^\s+|\s+(?=\s|$)/g)):"$$"==a?d.setAttribute("style",f):/^@/.test(a)?f!=k&&z.setAttribute(l,f):z[l]=f}):r(a)||s(a)?d.set("$",a):u(a,function(a,b){d.set(a,b,c)});return d},append:function(a,b){return this.set(a,b,function(a,b,e,h){return(a!=k?""+a:"")+h})},prepend:function(a,b){return this.set(a,b,function(a,b,e,h){return h+(a!=k?""+a:"")})},add:function(a,b){return this.each(function(c,d){var e;(function g(a){t(a)?u(a,g):s(a)?g(a(c,d)):a!=k&&(a=a&&a.nodeType?a:q.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)})(a&&a.nodeType&&d?k:a)})},fill:function(a){return this.each(function(a){H(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c)})},addAfter:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c.nextSibling)})},addFront:function(a){return this.add(a,function(a,c){c.insertBefore(a,c.firstChild)})},replace:function(a){return this.add(a,function(a,c,d){d.replaceChild(a,c)})},clone:function(){return this.collect(function(a){var b={},c=a&&a.nodeType;return 1==c?(u(a.attributes,function(a){b["@"+a.name]=a.value}),H.el(a.tagName,b,H(a.childNodes).clone())):2<c&&5>c?a.textContent:k})},animate:function(a,b,c,d){var e=this,h=[],g=/-?[\d.]+/,f,l=G();d=d||{};d.time=0;d.stop=function(){f();l(m)};b=b||500;c=c||0;e.each(function(b){var c={b:H(b),a:{},c:{}};u(c.a=c.b.get(a),function(b,d){var e=a[b];"$$slide"==b&&(e=e*A(c.b)+"px");c.c[b]=/^[+-]=/.test(e)?x(e.substr(2),g,y(d)+y(x(e,/\+?=/))):e});h.push(c)});f=H.loop(function(a,f){function D(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(x(a,/[^\d,]+/g).split(",")[b])}function C(d,e){return d+a/b*(e-d)*(c+(1-c)*a/b*(3-2*a/b))}d.time=a;a>=b||0>a?(u(h,function(a){a.b.set(a.c)}),f(),d.time=d.stop=k,l(j,[e])):u(h,function(a){u(a.a,function(b,c){var d="rgb(",e=a.c[b];if(/^#|rgb\(/.test(e))for(var f=0;3>f;f++)d+=Math.round(C(D(c,f),D(e,f)))+(2>f?",":")");else d=x(e,g,C(y(c),y(e)));a.b.set(b,d)})})});return l},toggle:function(a,b,c,d){var e={},h=m,g=/\b(?=\w)/g,f=this;return!b?f.toggle(x(a,g,"-"),x(a,g,"+")):f.set(a)&&function(g){g!==h&&(h="boolean"==typeof g?g:!h,c?f.o(h?b:a,e.stop?e.stop()||e.time:c,d,e):f.set(h?b:a))}},on:function(a,b,c,d){return this.each(function(e,h){function g(a){a=a||n.event;if(!b.apply(d||a.target,c||[a,h])||c)a.preventDefault(),a.stopPropagation()}(b.M=b.M||[]).push({e:e,h:g,n:a});e.addEventListener(a,g,j)})},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b}},function(a,b){I.prototype[a]=b});u({$$:function(a){return J(a)[0]},el:function(a,b,c,d){return function(){var e=q.documentElement.namespaceURI,e=H(e?q.createElementNS(e,a):q.createElement(a));t(b)||"object"!=typeof b?e.add(b):e.set(b).add(c);d&&d(e);return e}},request:function(a,b,c,d,e,h){var g,f=c,l=0,p=G();try{return g=new XMLHttpRequest,c!=k&&(d=d||{},!r(c)&&(!c||!c.nodeType)&&(f=w(c,function C(a,b){return t(b)?w(b,function(b){return C(a,b)}):encodeURIComponent(a)+(b!=k?"="+encodeURIComponent(b):"")}).join("&")),/post/i.test(a)?(!c||!c.nodeType)&&!r(c)&&!d["Content-Type"]&&(d["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+f,f=k)),g.open(a,b,j,e,h),u(d,function(a,b){g.setRequestHeader(a,b)}),g.onreadystatechange=function(){4==g.readyState&&!l++&&(200==g.status?p(j,[g.responseText,g.responseXML]):p(m,[g.status,g.statusText,g.responseText]))},g.send(f),p}catch(z){l||p(m,[0,k,z!=k?""+z:""])}},toJSON:n.JSON&&JSON.stringify,parseJSON:n.JSON&&JSON.parse,ready:E,setCookie:function(a,b,c,d,e,h){q.cookie=a+"="+(h?b:escape(b))+(c?"; expires="+("object"==typeof c?c:new Date((new Date).getTime()+864e5*c)).toUTCString():"")+"; path="+(d?escapeURI(d):"/")+(e?"; domain="+escape(e):"")},getCookie:function(a,b){var c,d=(c=RegExp("(^|;)\\s*"+a+"=([^;]*)").exec(q.cookie))&&c[2];return b?d:d&&unescape(d)},loop:function(a){var b={i:a,j:(new Date).getTime(),a:function(){for(var a=0;a<K.length;a++)K[a]===b&&K.splice(a--,1)}};2>K.push(b)&&function d(){u(K,function(a){a.i(Math.max(0,(new Date).getTime()-a.j),a.a)}).length&&L(d)}();return b.a},off:function(a){u(a.M,function(a){a.e.removeEventListener(a.n,a.h,j)});a.M=k}},function(a,b){H[a]=b});q.addEventListener("DOMContentLoaded",function(){u(F,B);F=k},m);n.$=n.MINI=H;n.$$=H.$$;n.EE=H.el;
({1883:function(){var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function a(e){try{s(r.next(e))}catch(e){c(e)}}function i(e){try{s(r.throw(e))}catch(e){c(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}s((r=r.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var n,r,o,c,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}},n=this,r="weather-1";console.log("sw","production"),globalThis.addEventListener("install",(function(o){return e(n,void 0,void 0,(function(){var e;return t(this,(function(t){switch(t.label){case 0:return console.log("sw install"),[4,caches.open(r)];case 1:return e=t.sent(),console.log("catch",e),[4,e.addAll(["/","https://jindw.xyz/favicon.ico","/manifest.json","".concat("/dist","/index.js")])];case 2:return t.sent(),[4,globalThis.skipWaiting()];case 3:return t.sent(),[2]}}))}))})),globalThis.addEventListener("fetch",(function(n){var o=n.request;n.respondWith(function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:console.log("fetch",n.url),e.label=1;case 1:return e.trys.push([1,3,,6]),[4,fetch(n)];case 2:return[2,e.sent()];case 3:return e.sent(),console.log("catch",n.url),[4,caches.open(r)];case 4:return[4,e.sent().match(n)];case 5:return[2,e.sent()];case 6:return[2]}}))}))}(o))})),globalThis.addEventListener("activate",(function(o){return e(n,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return console.log("sw activate"),[4,caches.keys()];case 1:return e.sent().forEach((function(e){e!==r&&caches.delete(e)})),[4,globalThis.clients.claim()];case 2:return e.sent(),[2]}}))}))}))}})[1883]();
const CACHE_NAME = "weather";

// globalThis.addEventListener("install", function (event: any) {
//   console.log("[EVENT_INSTALL]");
//   event.waitUntil(caches.open(CACHE_NAME).then((globalThis as any).skipWaiting));
// });

globalThis.addEventListener("install", async (event) => {
  console.log("sw install");
  // 开启一个cache 得到一个cache对象
  const cache = await caches.open(CACHE_NAME);
  // 等待cache把所有的资源存储
  await cache.addAll(["/", "/manifest.json", "/index.js"]);
  // 等待skipWaiting结束才进入到activate
  await (globalThis as any).skipWaiting();
});
globalThis.addEventListener("fetch", (event: any) => {
  const req = event.request;
  event.respondWith(networkFirst(req));
});

// 网络优先
async function networkFirst(req) {
  try {
    // 优先网络读取最新的资源
    return await fetch(req);
  } catch (e) {
    // 去缓存中读取
    const cache = await caches.open(CACHE_NAME);
    return await cache.match(req);
  }
}

//
// globalThis.addEventListener("fetch", function (event: any) {
//   console.log("[EVENT_FETCH]", event);
//   event.respondWith(
//     caches
//       .match(event.request)
//       .then(function (resp) {
//         // console.log('[REQUEST]:', event.request)
//         const reqToCache = event.request.clone();
//
//         return (
//           resp ||
//           fetch(event.request).then(function (response) {
//             console.log("[EVENT_FETCH] lose cache");
//             const respToCache = response.clone();
//             // console.log('[RESPONSE]:', response)
//             caches.open(CACHE_NAME).then(function (cache: any) {
//               cache.put(reqToCache, respToCache);
//             });
//             return response;
//           })
//         );
//       })
//       .catch(function (e) {
//         console.log("[EVENT_FETCH] fetch error", e);
//       })
//   );
// });
//
// globalThis.addEventListener("activate", function (event: any) {
//   console.log("[EVENT_ACTIVATE]");
//   const cacheWhitelist = [CACHE_NAME];
//
//   event.waitUntil(
//     caches.keys().then(function (keyList) {
//       // console.log('[CACHES_KEYS]', keyList)
//       return Promise.all(
//         // eslint-disable-next-line array-callback-return
//         keyList.map(function (key) {
//           if (cacheWhitelist.indexOf(key) === -1) {
//             return caches.delete(key);
//           }
//         })
//       );
//     })
//   );
// });

globalThis.addEventListener("activate", async (event:any) => {
    console.log('sw activate')
    const keys = await caches.keys();
    // 判断key 删除旧的资源
    keys.forEach((key) => {
        if (key !== CACHE_NAME) {
            caches.delete(key);
        }
    });
    // 表示service worker激活后，立即活的控制权
    await (globalThis as any).clients.claim();
});

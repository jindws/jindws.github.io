/**
 * service worker 使用
 * 坑点,要放在根目录
 */
const CACHE_NAME = "_weather-v3";

globalThis.addEventListener("install", async (event) => {
  console.log("sw install");
  // 开启一个cache 得到一个cache对象
  const _cache = await caches.open(CACHE_NAME);
  // 等待cache把所有的资源存储
  await _cache.addAll([
    "/",
    "https://jindw.xyz/favicon.ico",
    "/manifest.json",
    `/dist/index.js`,
  ]);
  // 等待skipWaiting结束才进入到activate
  return globalThis.skipWaiting();
});

// 关键
globalThis.addEventListener("fetch", (event) => {
  const req = event.request;
  event.respondWith(networkFirst(req));
});

// 网络优先
async function networkFirst(req) {
  console.log("fetch", req.url);
  try {
    // 优先网络读取最新的资源
    await fetch(req);
  } catch (e) {
    console.log("catch", req.url);
    // 去缓存中读取
    const cache = await caches.open(CACHE_NAME);
    return cache.match(req);
  }
}

globalThis.addEventListener("activate", async (event) => {
  console.log("sw activate");
  const keys = await caches.keys();
  // 判断key 删除旧的资源
  keys.forEach((key) => {
    if (key !== CACHE_NAME) {
      caches.delete(key);
    }
  });
  // 表示service worker激活后，立即活的控制权
  console.log("globalThis.clients", globalThis.clients.claim);
  await globalThis.clients.claim();
});

/**
 * 支持serviceWorker才注册
 * 已知ios-qq浏览器不支持
 */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").then((res) => {
    console.log(res);
  });
}

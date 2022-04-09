function Get(url) {
  return new Promise((resolve) => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        resolve(data);
        localStorage.setItem(url, JSON.stringify(data));
      })
      .catch(() => {
        resolve(JSON.parse(localStorage.getItem(url) || "{}")); // 这里做了个缓存,在页面打开,断网不刷新生效,但因为有service worker 这里并不会生效了
      });
  });
}

export { Get };

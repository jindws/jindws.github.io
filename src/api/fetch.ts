function Get(url) {
  return new Promise((resolve) => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        resolve(data);
        localStorage.setItem(url, JSON.stringify(data));
      })
      .catch(() => {
        resolve(JSON.parse(localStorage.getItem(url) || "{}"));
      });
  });
}

export { Get };

// const isProduction = process.env.NODE_ENV === "production";

// if (isProduction) {
//   if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register("./dist/sw.js",{ scope: './dist/sw.js' }).then((res) => {
//       console.log(res);
//     });
//   }
// } else {
  navigator.serviceWorker.register("./sw.js").then((res) => {
    console.log(res);
  });
// }

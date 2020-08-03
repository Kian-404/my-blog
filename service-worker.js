/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "55dc82e051f89e3928d013041995e8aa"
  },
  {
    "url": "assets/css/0.styles.8119ecc0.css",
    "revision": "81ec3b7d8aaa3a808ab2f7249108ac02"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8722e39f.js",
    "revision": "9dbe27c7ee1b5a58a05110581d9a0f68"
  },
  {
    "url": "assets/js/11.624258dd.js",
    "revision": "4bc6fb2162ec1c1991c5aa2eb6710223"
  },
  {
    "url": "assets/js/12.633b89bd.js",
    "revision": "737956a3d8fbfe9d20bce8aedef7ca79"
  },
  {
    "url": "assets/js/13.2b92c5b3.js",
    "revision": "45261688e6f64ca20ed0f6e698e5debe"
  },
  {
    "url": "assets/js/14.665d6a2c.js",
    "revision": "c4a8d15ee842b0df241a858baf2cf8bd"
  },
  {
    "url": "assets/js/2.c9e7aa35.js",
    "revision": "380cf819eee48d2f6b1c05f02690b556"
  },
  {
    "url": "assets/js/3.8dfe3fb5.js",
    "revision": "1c4bdf0b778b63c9c6a4f8a0d8ba7554"
  },
  {
    "url": "assets/js/4.e2705505.js",
    "revision": "7390fc884c3b04809069347831e75fde"
  },
  {
    "url": "assets/js/5.aeb49012.js",
    "revision": "39f76b20c492391f2418b861a1bd4219"
  },
  {
    "url": "assets/js/6.ef7946db.js",
    "revision": "89fea1ab04c8b20e5cfb8ee8441d87bb"
  },
  {
    "url": "assets/js/7.3c64a9a7.js",
    "revision": "5c11c232bed38b0a8b237c74af68473e"
  },
  {
    "url": "assets/js/8.bc6c1e7c.js",
    "revision": "3f839d1ab81bb47f6c8bccbde885bbbd"
  },
  {
    "url": "assets/js/9.daaff1ee.js",
    "revision": "3e01a7afbd2f3cb918f77cdcdd9367c3"
  },
  {
    "url": "assets/js/app.f39130a0.js",
    "revision": "90058e09cec8e5f045a589e2855742cb"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "HTML/index.html",
    "revision": "4f07294276e09b33a2e8a0bf1637e3c7"
  },
  {
    "url": "index.html",
    "revision": "8d5e70407370e5ef92e70b1f573e9ad7"
  },
  {
    "url": "interview.html",
    "revision": "6631c81b15a9a28fb85663875c63c5fd"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "3b29a945855f26ec92b2685aa59a54bb"
  },
  {
    "url": "LeetCode/1.html",
    "revision": "36aae2c98dc271900155e6d5c7dcda93"
  },
  {
    "url": "LeetCode/2.html",
    "revision": "7f4b6cf0f7075c0ec0c68d5672be199a"
  },
  {
    "url": "LeetCode/index.html",
    "revision": "3983fe14c2be6851c250c784500d5274"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

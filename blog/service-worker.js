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
    "revision": "3e7f7970ab4a3a264a63d3ee04391b41"
  },
  {
    "url": "assets/css/0.styles.858c3dbc.css",
    "revision": "64ab0f430a31c60c9f14f3322de9d7d4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.63e6e168.js",
    "revision": "4678cb4cfc848568311b3dd4cc1f2b93"
  },
  {
    "url": "assets/js/11.74a6bef7.js",
    "revision": "4cdc5a736d91e44b12c5218a707896d0"
  },
  {
    "url": "assets/js/12.bb1a33c4.js",
    "revision": "079b9fcc89feba943082ee8b44a3d975"
  },
  {
    "url": "assets/js/13.1e07ef67.js",
    "revision": "dc4826620dd4d9a632be09b999bcdbc3"
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
    "url": "assets/js/8.dddc3f6a.js",
    "revision": "30d5887eecc475eb73098dd57ad3014f"
  },
  {
    "url": "assets/js/9.285cd760.js",
    "revision": "85f9d440719f7a2b9a3c22a5a59afa85"
  },
  {
    "url": "assets/js/app.335d7635.js",
    "revision": "e37f5babf46fdaa0ea8b0aee3cab2d59"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "HTML/index.html",
    "revision": "4196fcd12574b11bd7f88cb48dde3aab"
  },
  {
    "url": "index.html",
    "revision": "8fcee03e5c16f1e87a743d33b25b4c1a"
  },
  {
    "url": "interview.html",
    "revision": "42caf1e14a99a922bbf1bb74e3f93b48"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "c2c74db37ccd1a2bfac5ab540d10748e"
  },
  {
    "url": "LeetCode/1.html",
    "revision": "f738781051fba8140e8659ab81975b52"
  },
  {
    "url": "LeetCode/2.html",
    "revision": "96e27199b1b062d7a2d4ace4d591ed9d"
  },
  {
    "url": "LeetCode/index.html",
    "revision": "ac1a481c12b08412799179380a4b70b7"
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

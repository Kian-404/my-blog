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
    "revision": "9d24ea760176640475011e78d0308d83"
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
    "url": "assets/js/10.466d996b.js",
    "revision": "dca59183ac8a70ea39ffc89b12032d73"
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
    "url": "assets/js/9.d09177a4.js",
    "revision": "925a61fc99e438ffd1f8da946d8c9b2f"
  },
  {
    "url": "assets/js/app.4cdadc2a.js",
    "revision": "0233b77e900b9c0c223e7d1cf4539b1a"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "HTML/index.html",
    "revision": "12aa58e122021b4b68dc72d548e8ea9e"
  },
  {
    "url": "index.html",
    "revision": "2a33bfe438c9d524a5b0ec350d69955a"
  },
  {
    "url": "interview.html",
    "revision": "91f31963bf68154867ab1efacf9e4242"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "27814e813eb4de1421ab538e880a5690"
  },
  {
    "url": "LeetCode/1.html",
    "revision": "039c181f05ca0aefff9fc02aead99455"
  },
  {
    "url": "LeetCode/2.html",
    "revision": "562a3517967986f83bfd0a763c6ad334"
  },
  {
    "url": "LeetCode/index.html",
    "revision": "b059384152f718e3b18a8f513a0edc54"
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

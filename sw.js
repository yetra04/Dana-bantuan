const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'ast/img/ckq.png'  // Cek path dan kapitalisasi
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).catch((error) => {
        console.warn('Beberapa file gagal di-cache:', error);
      });
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

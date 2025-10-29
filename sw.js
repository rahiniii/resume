const CACHE_NAME = 'rahini-portfolio-v2';
const urlsToCache = [
  './',
  './index.html',
  './Projects.html',
  './assets/css-1/bootstrap.min.css',
  './assets/css-1/style.css',
  './assets/css/bootstrap.css',
  './assets/css/main.css',
  './assets/img/favicon.ico',
  './assets/img/image.jpeg',
  './favicon.ico'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      console.log('Opened cache');
      await Promise.all(
        urlsToCache.map(async (url) => {
          try {
            const response = await fetch(url, { cache: 'no-cache' });
            if (!response || !response.ok) {
              console.warn('[SW] Skipping cache for', url, 'status:', response && response.status);
              return;
            }
            await cache.put(url, response.clone());
          } catch (err) {
            console.warn('[SW] Failed to fetch/cache', url, err);
          }
        })
      );
      self.skipWaiting();
    })()
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const isHTML = request.headers.get('accept') && request.headers.get('accept').includes('text/html');

  if (isHTML) {
    // Network-first for HTML
    event.respondWith(
      fetch(request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => {});
        return response;
      }).catch(() => caches.match(request))
    );
    return;
  }

  // Cache-first for other assets
  event.respondWith(
    caches.match(request).then((cached) => {
      return (
        cached || fetch(request).then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => {});
          return response;
        })
      );
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});


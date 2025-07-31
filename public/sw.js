// Service Worker for performance optimization (Lightweight version)
const CACHE_NAME = 'toeflin-kuy-v2';
const urlsToCache = [
  '/',
  '/src/index.css',
  '/src/assets/heroimage.png',
  '/manifest.json'
];

// Install event - cache only essential resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('SW: Caching essential resources');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('SW: Cache installation failed', error);
      })
  );
});

// Fetch event - simplified caching strategy
self.addEventListener('fetch', (event) => {
  // Only cache GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip caching for analytics and external resources
  if (event.request.url.includes('google-analytics') || 
      event.request.url.includes('googletagmanager')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version if available
        if (response) {
          return response;
        }

        // For images and static assets, cache them
        if (event.request.destination === 'image' || 
            event.request.url.includes('/assets/') ||
            event.request.url.includes('.css') ||
            event.request.url.includes('.js')) {
          
          return fetch(event.request).then((response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
        }

        // For other requests, just fetch without caching
        return fetch(event.request);
      })
      .catch(() => {
        // Return offline fallback if needed
        if (event.request.destination === 'document') {
          return caches.match('/');
        }
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('SW: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

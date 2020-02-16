// install event
self.addEventListener('install', evt => {
  console.log('service worker has been installed');
});

// activate event
self.addEventListener('activate', evt => {
  console.log('service worker activated');
});

self.addEventListener('fetch', evt => {
  console.log('fetch event', evt);
});
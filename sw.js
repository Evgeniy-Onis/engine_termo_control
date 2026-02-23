self.addEventListener('fetch', (event) => {
  // Базовый пустой sw.js для прохождения теста PWA
  event.respondWith(fetch(event.request));
});

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("my-pwa-cache-v1").then(function (cache) {
      return cache.addAll([
        "/",
        "/offline",
        "/assets/images/favicon.png",
        "/javascript/govuk-frontend-4.4.1.min.js",
        "/javascript/pwa.js",
        "/stylesheets/govuk-frontend-4.4.1.min.css",
      ]);
    })
  );
});

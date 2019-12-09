const FILES_TO_CACHE = [
    "/",
    "./style.css",
    "./dist/bundle.js"
  ];

  self.addEventListener("activate", () => {
    caches.open("chronos-files-" + version).then(cache => {
        cache.addAll(FILES_TO_CACHE).then(() => {
            caches.delete("chronos-files-" + (version - 1))
        })
    })
})

self.addEventListener("fetch", loadFromCacheStorage)

function loadFromCacheStorage(event) {
    console.log("Tried to load something from fetch");

    const request = event.request

    const response = caches.match(request)
        .then(cacheResponse => {
            let response = cacheResponse ? cacheResponse : fetch(request)
            return response
        })

    event.respondWith(response)
}
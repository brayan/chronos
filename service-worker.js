const VERSION = 1

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./dist/bundle.js",
    "./design/icons/favicon-16x16.png"
  ]

  self.addEventListener("activate", () => {
    caches.open("chronos-files-" + VERSION).then(cache => {
        cache.addAll(FILES_TO_CACHE).then(() => {
            caches.delete("chronos-files-" + (VERSION - 1))
        })
    })
})

self.addEventListener("fetch", loadFromCacheStorage)

function loadFromCacheStorage(event) {
    const request = event.request

    const response = caches.match(request)
        .then(cacheResponse => {
            let response = cacheResponse ? cacheResponse : fetch(request)
            return response
        })

    event.respondWith(response)
}
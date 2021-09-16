export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "Suisei Archive Guide",
  "description": "This is a brief archiving guide written for Hoshiyomis to archive every stream of Suisei.",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/android-chrome-192x192.png"
      }
    ],
    [
      "meta",
      {
        "name": "twitter:card",
        "content": "https://guide.suisei.cc/android-chrome-192x192.png"
      }
    ],
    [
      "meta",
      {
        "name": "twitter:site",
        "content": "Suisei Archive Guide | Treasure every moment"
      }
    ],
    [
      "meta",
      {
        "name": "twitter:image",
        "content": "https://guide.suisei.cc/android-chrome-192x192.png"
      }
    ],
    [
      "meta",
      {
        "name": "twitter:description",
        "content": "This is a brief archiving guide written for Hoshiyomis to archive every stream of Suisei."
      }
    ],
    [
      "meta",
      {
        "property": "og:type",
        "content": "article"
      }
    ],
    [
      "meta",
      {
        "property": "og:title",
        "content": "Suisei Archive Guide | Treasure every moment"
      }
    ],
    [
      "meta",
      {
        "property": "og:site_name",
        "content": "Suisei Archive Guide"
      }
    ],
    [
      "meta",
      {
        "property": "og:url",
        "content": "https://guide.suisei.cc/"
      }
    ],
    [
      "meta",
      {
        "property": "og:image",
        "content": "https://guide.suisei.cc/android-chrome-192x192.png"
      }
    ],
    [
      "link",
      {
        "rel": "manifest",
        "href": "/manifest.webmanifest"
      }
    ],
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#3eaf7c"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

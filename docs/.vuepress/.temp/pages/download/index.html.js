export const data = {
  "key": "v-4cb29dce",
  "path": "/download/",
  "title": "Download",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "download/README.md",
  "git": {
    "updatedTime": 1631773879000,
    "contributors": [
      {
        "name": "aozaki-kuro",
        "email": "aozaki.kuro@gmail.om",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

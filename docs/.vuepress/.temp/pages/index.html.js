export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Introduction",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "What is this?",
      "slug": "what-is-this",
      "children": []
    },
    {
      "level": 2,
      "title": "IMPORTANT",
      "slug": "important",
      "children": []
    },
    {
      "level": 2,
      "title": "Changelog",
      "slug": "changelog",
      "children": []
    },
    {
      "level": 2,
      "title": "Disclaimer",
      "slug": "disclaimer",
      "children": []
    }
  ],
  "filePathRelative": "README.md",
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

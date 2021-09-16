export const data = {
  "key": "v-b5a41c1e",
  "path": "/preparation/",
  "title": "Preparation",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Windows Preparation",
      "slug": "windows-preparation",
      "children": [
        {
          "level": 3,
          "title": "$PATH",
          "slug": "path",
          "children": []
        },
        {
          "level": 3,
          "title": "Environment",
          "slug": "environment",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Ubuntu Preparation",
      "slug": "ubuntu-preparation",
      "children": [
        {
          "level": 3,
          "title": "Why using a server",
          "slug": "why-using-a-server",
          "children": []
        },
        {
          "level": 3,
          "title": "Enviroment Preparation",
          "slug": "enviroment-preparation",
          "children": []
        },
        {
          "level": 3,
          "title": "Other packages",
          "slug": "other-packages",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "preparation/README.md"
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

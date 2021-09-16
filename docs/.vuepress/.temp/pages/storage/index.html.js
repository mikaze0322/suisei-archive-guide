export const data = {
  "key": "v-3d00f70d",
  "path": "/storage/",
  "title": "Storage",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "rclone",
      "slug": "rclone",
      "children": [
        {
          "level": 3,
          "title": "Target Site",
          "slug": "target-site",
          "children": []
        },
        {
          "level": 3,
          "title": "Installation",
          "slug": "installation",
          "children": []
        },
        {
          "level": 3,
          "title": "Configuration",
          "slug": "configuration",
          "children": []
        },
        {
          "level": 3,
          "title": "Usage",
          "slug": "usage",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "storage/README.md"
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

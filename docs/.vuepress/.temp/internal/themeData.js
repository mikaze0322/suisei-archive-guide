export const themeData = {
  "logo": "/android-chrome-192x192.png",
  "contributors": false,
  "lastUpdated": false,
  "navbar": [
    {
      "text": "Preparation",
      "link": "/preparation/"
    },
    {
      "text": "Tools",
      "link": "/tools/",
      "children": [
        "/tools/youtube/",
        "/tools/minyami/",
        "/tools/kkr/",
        "/tools/radigo/",
        "/tools/rget/",
        "/tools/m3u8/"
      ]
    },
    {
      "text": "Storage",
      "link": "/storage/"
    }
  ],
  "sidebar": {
    "/": [
      ""
    ],
    "/tools/": [
      {
        "text": "Download",
        "children": [
          "/tools/youtube/",
          "/tools/minyami/",
          "/tools/kkr/",
          "/tools/radigo/",
          "/tools/rget/",
          "/tools/m3u8/"
        ]
      }
    ],
    "/preparation/": [
      "/preparation/"
    ],
    "/storage/": [
      "/storage/"
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

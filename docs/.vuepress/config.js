module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/ringo.png' }],
    ['meta', { name: 'twitter:card', content: 'https://guide.suisei.cc/ringo.png' }],
    ['meta', { name: 'twitter:site', content: 'Suisei Archive Guide | Treasure every moment' }],
    ['meta', { name: 'twitter:image', content: 'https://guide.suisei.cc/ringo.png' }],
    ['meta', { name: 'twitter:description', content: 'This is a brief archiving guide written for Hoshiyomis to archive every stream of Suisei.' }],
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { property: 'og:title', content: 'Suisei Archive Guide | Treasure every moment' }],
    ['meta', { property: 'og:site_name', content: 'Suisei Archive Guide' }],
    ['meta', { property: 'og:url', content: 'https://guide.suisei.cc/' }],
    ['meta', { property: 'og:image', content: 'https://guide.suisei.cc/ringo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#bb4036' }],
  ],
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-3F72EW40RP',
      },
    ],
    [
      '@vuepress/pwa',
      {
        skipWaiting: true,
      },
    ],
    [
      '@vuepress/plugin-pwa-popup',
      {
        locales: {
          '/': {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
          '/zh/': {
            message: '发现新内容可用',
            buttonText: '刷新',
          },
        },
      },
    ],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
          '/zh-TW/': {
            placeholder: '搜尋',
          },
        },
        // 排除首页
        isSearchable: (page) => page.path !== '/',
      },
    ],
    //[
    //  '@vuepress/docsearch',
    //  {
    //    apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>',
    //    locales: {
    //      '/': {
    //        placeholder: 'Search Documentation',
    //      },
    //    },
    //  },
    //],
    [
      '@vuepress/plugin-shiki',
      {
        Lang: [
          "bash",
          "powershell",
        ],
        theme: "material-default",
      },
    ],
  ],
  locales: {
    '/': {
      lang: "en-US",
      title: "Suisei Archive Guide",
      description: "This is a brief archiving guide written for Hoshiyomis to archive every stream of Suisei.",
    },
    '/zh/': {
      lang: 'zh-CN',
      title: "Suisei Archive Guide",
      description: "This is a brief archiving guide written for Hoshiyomis to archive every stream of Suisei.",
    },
    //'/zh-tw/': {
    //  lang: 'zh-TW',
    //  title: "Suisei Archive Guide",
    //  description: "This is a brief archiving guide written for Hoshiyomis to archive every stream of Suisei.",
    //},
  },
  themeConfig: {
    logo: '/ringo.png',
    contributors: false,
    lastUpdated: false,
    locales: {
      '/': {
        navbar: [
          {
            text: "Preparation",
            link: "/preparation/",
          },
          {
            text: "Tools",
            link: "/tools/",
            children: [
              "/tools/youtube/",
              "/tools/minyami/",
              "/tools/kkr/",
              "/tools/radigo/",
              "/tools/rget/",
              "/tools/m3u8/",
            ],
          },
          {
            text: "Storage",
            link: "/storage/",
            children: [
              "/storage/rclone/",
            ],
          },
        ],
        sidebar: {
          "/": [""],
          "/tools/": [
            {
              text: "Tools",
              children: [
                "/tools/youtube/",
                "/tools/minyami/",
                "/tools/kkr/",
                "/tools/radigo/",
                "/tools/rget/",
                "/tools/m3u8/",
              ],
            }
          ],
          "/preparation/": ["/preparation/"],
          "/storage/": [
            {
              text: "Storage",
              children: [
                "/storage/rclone/"
              ]
            }
          ],
        },
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
        selectLanguageAriaLabel: 'Languages',
      },
      '/zh/': {
        navbar: [
          {
            text: "准备工作",
            link: "/zh/preparation/",
          },
          {
            text: "常用工具",
            link: "/zh/tools/",
            children: [
              "/zh/tools/youtube/",
              "/zh/tools/minyami/",
              "/zh/tools/kkr/",
              "/zh/tools/radigo/",
              "/zh/tools/rget/",
              "/zh/tools/m3u8/",
            ],
          },
          {
            text: "存储管理",
            link: "/zh/storage/",
            children: [
              "/zh/storage/rclone/",
            ],
          },
        ],
        sidebar: {
          "/zh/": [""],
          "/zh/tools/": [
            {
              text: "常用工具",
              children: [
                "/zh/tools/youtube/",
                "/zh/tools/minyami/",
                "/zh/tools/kkr/",
                "/zh/tools/radigo/",
                "/zh/tools/rget/",
                "/zh/tools/m3u8/",
              ],
            }
          ],
          "/zh/preparation/": ["/zh/preparation/"],
          "/zh/storage/": [
            {
              text: "存储管理",
              children: [
                "/zh/storage/rclone/"
              ]
            }
          ],
        },
        selectLanguageText: '选择语言',
        selectLanguageName: '简体中文',
        selectLanguageAriaLabel: '选择语言',
      },
    },
  }
}

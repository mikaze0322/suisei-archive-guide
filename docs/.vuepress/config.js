module.exports = {
  lang: "en-US",
  title: "Suisei Archive Guide",
  description: "This is a brief archiving guide written for Hoshiyomis to archive every stream of Suisei.",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'twitter:card', content: 'https://guide.suisei.cc/logo.png' }],
    ['meta', { name: 'twitter:site', content: 'Suisei Archive Guide | Treasure every moment' }],
    ['meta', { name: 'twitter:image', content: 'https://guide.suisei.cc/logo.png' }],
    ['meta', { name: 'twitter:description', content: 'This is a brief archiving guide written for Hoshiyomis to archive every stream of Suisei.' }],
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { property: 'og:title', content: 'Suisei Archive Guide | Treasure every moment' }],
    ['meta', { property: 'og:site_name', content: 'Suisei Archive Guide' }],
    ['meta', { property: 'og:url', content: 'https://guide.suisei.cc/' }],
    ['meta', { property: 'og:image', content: 'https://guide.suisei.cc/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#7ecde6' }],
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
        Lang: "bash",
        theme: "material-default",
      },
    ],
  ],
  themeConfig: {
    logo: '/logo.png',
    contributors: false,
    lastUpdated: false,
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
      "/storage/": ["/storage/"],
    },
  }
}

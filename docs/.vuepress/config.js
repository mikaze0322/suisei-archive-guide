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
    ['meta', { property: 'og:image', content: 'https://guide.suisei.cc/logo.jpg' }],
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
          text: "Download",
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

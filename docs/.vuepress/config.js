module.exports = {
  lang: "en-US",
  title: "Suisei Archive Guide",
  description: "This is a brief archiving guide written for Hoshiyomis to archive every stream of Suisei.",
  head: [
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
    //nav:[ // 导航栏配置
    //  {text: '前端基础', link: '/accumulate/' },
    //  {text: '算法题库', link: '/algorithm/'},
    //  {text: '微博', link: 'https://baidu.com'}      
    //],
    contributors: false,
    lastUpdated: false,
    sidebar: {
      collapsable: false,
      "/": [
        "/",
        "/preparation",
        "/download/",
        "/storage",
      ],
      "/download/": [
        {
          text: "Download",
          collapsable: false,
          children: [
            "/download/youtube/",
            "/download/minyami/",
            "/download/kkr/",
            "/download/radigo/",
            "/download/rget/",
            "/download/m3u8/",
          ],
        }
      ],
    },
  }
}

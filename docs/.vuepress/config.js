module.exports = {
  lang: "en-US",
  title: "Suisei Archive Guide",
  description: "This is a brief archiving guide written for Hoshiyomis to archive every stream of Suisei.",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    logo: '/logo.png',
    //nav:[ // 导航栏配置
    //  {text: '前端基础', link: '/accumulate/' },
    //  {text: '算法题库', link: '/algorithm/'},
    //  {text: '微博', link: 'https://baidu.com'}      
    //],
    sidebar: {
      collapsable: false,
      "/": [
        "/",
        "/preparation",
        "/download/",
        "/storage",
      ],
      "/download/": [{
        text: "Download",
        children: [
          "/download/youtube/",
          "/download/minyami/",
          "/download/kkr/",
          "/download/radigo/",
          "/download/rget/",
          "/download/m3u8/",
        ],
      }],
    },
  }
}

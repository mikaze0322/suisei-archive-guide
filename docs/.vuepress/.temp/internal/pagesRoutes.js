import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Introduction",["/index.html","/README.md"]],
  ["v-3d00f70d","/storage/","Storage",["/storage/index.html","/storage/README.md"]],
  ["v-d440f426","/tools/","Download",["/tools/index.html","/tools/README.md"]],
  ["v-b5a41c1e","/preparation/","Preparation",["/preparation/index.html","/preparation/README.md"]],
  ["v-2459ea6c","/tools/kkr/","kkr",["/tools/kkr/index.html","/tools/kkr/README.md"]],
  ["v-66ddd58e","/tools/m3u8/","General .m3u8 stream",["/tools/m3u8/index.html","/tools/m3u8/README.md"]],
  ["v-2130fb4e","/tools/youtube/","youtube-dl / yt-dlp",["/tools/youtube/index.html","/tools/youtube/README.md"]],
  ["v-42c65646","/tools/radigo/","radigo",["/tools/radigo/index.html","/tools/radigo/README.md"]],
  ["v-66220d84","/tools/rget/","rget",["/tools/rget/index.html","/tools/rget/README.md"]],
  ["v-7080c034","/tools/minyami/","minyami",["/tools/minyami/index.html","/tools/minyami/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)

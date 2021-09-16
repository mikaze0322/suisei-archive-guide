import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Introduction",["/index.html","/README.md"]],
  ["v-4cb29dce","/download/","Download",["/download/index.html","/download/README.md"]],
  ["v-b5a41c1e","/preparation/","Preparation",["/preparation/index.html","/preparation/README.md"]],
  ["v-3d00f70d","/storage/","Storage",["/storage/index.html","/storage/README.md"]],
  ["v-2106c1f8","/download/m3u8/","General .m3u8 stream",["/download/m3u8/index.html","/download/m3u8/README.md"]],
  ["v-53a54a2b","/download/kkr/","kkr",["/download/kkr/index.html","/download/kkr/README.md"]],
  ["v-71b146c7","/download/minyami/","minyami",["/download/minyami/index.html","/download/minyami/README.md"]],
  ["v-2164a5fd","/download/rget/","rget",["/download/rget/index.html","/download/rget/README.md"]],
  ["v-cd4dad8c","/download/youtube/","youtube-dl / yt-dlp",["/download/youtube/index.html","/download/youtube/README.md"]],
  ["v-5083cf45","/download/radigo/","radigo",["/download/radigo/index.html","/download/radigo/README.md"]],
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

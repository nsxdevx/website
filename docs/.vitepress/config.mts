import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NsxBot",
  description: "Golang的全新 Onebot 框架",
  base:"/website/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '快速开始',
        collapsed: false,
        items: [
          { text: '介绍', link: '/start/introduction' },
          { text: '准备', link: '/start/start' },
          { text: '写一个聊天机器人吧', link: '/start/coding' },
        ]
      },
      {
        text: '其他',
        collapsed: false,
        items: [
          { text: 'OneBot 11 实现', link: '/other/onebot11' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nsxdevx/nsxbot' }
    ]
  }
})

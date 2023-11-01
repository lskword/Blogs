import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "Cool Lsk",
  description: "一个比较懒惰的前端",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "CoolLsk",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/lskword",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "Home", link: "/" },
      { text: "Categories", link: "/categories/reco/1/" },
      { text: "Tags", link: "/tags/tag1/1/" },
      {
        text: "Docs",
        children: [
          { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
          { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
        ],
      },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `🎉🎉🎉 尽可能多更新文档 ，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
          style: "font-size: 16px;",
        },
        { type: "hr", },
        { type: "title", content: "GitHub", },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://github.com/lskword" target="_blank">lskword<a/></li>
          </ul>`,
          style: "font-size: 16px;",
        },
        // {
        //   type: "hr",
        // },
        {
          type: "buttongroup",
          children: [
            {
              text: "打赏",
              link: "/docs/others/donate.html",
            },
          ],
        },
      ],
    },
    // commentConfig: {
    //   type: 'valie',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});

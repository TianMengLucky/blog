import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: '天梦的小站',
  subtitle: '喵喵喵',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/banner.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'top',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: true,         // Display the credit text of the banner image
      text: '',              // Credit text to be displayed
      url: 'https://www.pixiv.net/artworks/125156301'                // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: true,           // Display the table of contents on the right side of the post
    depth: 2                // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    {
      name: '友链',
      url: '/link/',
      icon: 'fa6-solid:link',
    },
    LinkPreset.About
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.png',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: '天梦',
  bio: '如何找到我，与我联系',
  links: [
  // Visit https://icones.js.org/ for icon codes
  // You will need to install the corresponding icon set if it's not already included
  // `pnpm add @iconify-json/<icon-set-name>`
/*     {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',       
      url: 'https://x.com/Bili_TianMeng',
    }, */
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/TianMengLucky',
    },
    {
      name: 'QQ',
      icon: 'fa6-brands:qq',
      url: 'https://qm.qq.com/q/QYNUGpon2o'
    },
    {
      name: 'bilibili',
      icon: 'fa6-brands:bilibili',
      url: 'https://space.bilibili.com/394107547'
    },
    {
      name: 'tiktok',
      icon: 'fa6-brands:tiktok',
      url: 'https://v.douyin.com/iUaDHxnb'
    }
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}

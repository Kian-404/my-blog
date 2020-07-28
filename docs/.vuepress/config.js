module.exports = {
  title: "Kian's 小破站",
  description: "Kian's 小破站",
  dest: './blog',
  base:'/my-blog/blog',
  port: '8080',
  head: [
    ['link', { rel: 'icon', href: '/logo.gif' }]
  ],
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/logo.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: require('./nav'),
    sidebar: require('./sidebar'),
    // sidebar: 'auto',
    // displayAllHeaders: true,
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "New content is available.",
        buttonText: 'Refresh'
      }
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！',
    lastUpdated: 'Last Updated',
  },
  plugins: {
    "@vuepress/back-to-top":{},
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    }
  },
}


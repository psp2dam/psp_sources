const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'PSP (2º DAM)',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Apuntes, PSP, DAM, FP, Programacion',

  /**
   * Directory to be deployed to http://mydeploymenthost/base/
   */  
  base: '/psp_sources/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   * Original theme-color: 3eaf7c
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3e7caf' }],
    // original color ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    //['link', { rel: 'icon', href: '/psp-32x32.png' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    
    // Smooth scrolling
    smoothScroll: true,
    // Github configuration
    // - Link to github repo in nav bar
    repo: 'psp2dam/psp_sources',
    repoLabel: 'PSP Notes',
    // - Link to page in github, at the bottom of each page
    docsDir: 'src',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    // Last updated info, at the bottom of each page
    lastUpdated: 'Last updated',
    // Navigation bar configuration, at top left on the nav bar (next to the title)
    logo: '/Logo_IES_Transparente_Blanco_v1-3.png',
    
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'AULES',
        link: 'https://aules.edu.gva.es/fp'
      }
    ],
    // Sidebar configuration
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: {
    
    '@vuepress/plugin-back-to-top': {

    },
/*    
    '@vuepress/plugin-medium-zoom': {
      selector: 'img',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 48,
        background: '#212530CC',
        // scrollOffset: 40,
      }
    },
    '@vuepress/plugin-last-updated': {

    }
    */
  }
}

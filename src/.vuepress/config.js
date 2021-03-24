const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'IES Doctor Balmis - PSP (2ºDAM)',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Apuntes del módulo PSP de 2º curso del CFGS DAM',

  /**
   * Directory to be deployed to http://mydeploymenthost/base/
   */  
  base: '/psp_sources/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   * Defaul theme-color: 3eaf7c
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3e7caf' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ['link', { rel: 'icon', href: '/psp-32x32.png' }]
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
    repo: 'psp2dam/psp_sources',
    repoLabel: 'PSP Notes',
    docsDir: 'src',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last updated',
    // Navigation bar configuration
    logo: '/Logo_IES_Transparente_Blanco_v1-3',
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
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom': {
      selector: 'img',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 48,
        background: '#21253080',
        scrollOffset: 40,
      }
    },
  ]
}

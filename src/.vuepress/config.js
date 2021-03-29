const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'PSP - 2º DAM',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Apuntes, PSP, DAM, FP, Programacion',

  /**
   * Directory to be deployed to http://mydeploymenthost/base/
   */  
  base: '/psp_sources/', // Producción
  // base: '/', // Desarrollo


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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favico_psp.png' }]
  ],

  /**
   * Internationalization - Site Level i18n Config
   */  

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Processes and Services Programming',
      description: '2nd DAM PSP Module'
    },
    '/es/': {
      lang: 'es-ES',
      title: 'Programación de Servicios y Procesos',
      description: 'Módulo PSP de 2º DAM'
    }
  },

  /**
   * Markdown format setting
   */  
  markdown: {
    lineNumbers: true,
    anchor: {
      extractHeaders: [ 'h1', 'h2', 'h3' ], 
      permalink: true, 
      permalinkBefore: false, 
      permaLinkAfter: true,
      permalinkSymbol: '&#x1F5F8;',
    },
    toc: {
      includeLevel: [1,2],
    },
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    // Sidebar behaviour
    sidebarDepth: 2,
    displayAllHeaders: true,

    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Help us improve this page on GitHub!',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          { text: 'AULES', link: 'https://aules.edu.gva.es/fp/' , ariaLabel: 'AULES' },
          { text: 'Course Index', ariaLabel: 'Course Index',
            items: [
              { text: 'Unit 1 - Introduction to concurrent programming', link: '/unit1/' },
              { text: 'Unit 2 - Processes programming', link: '/unit2/' }
            ]          

          }
        ],
        sidebar: {
          '/unit1/': [ { title: 'PSP - Unit 1: Concurrent programming', collapsable: true, 
            children: ['', 'part1', 'part2']
          } ],
          '/unit2/': [ { title: 'PSP - Unit 2: Processes programming', collapsable: true, 
            children: ['', 'part1', 'part2']
          } ],
          '/': [ { title: 'PSP - Contents', collapsable: true, 
              children: ['', '/unit1/', '/unit2/' ]
          } ],
        }
      },
      '/es/': {
        // text for the language dropdown
        selectText: 'Idioma',
        // label for this locale in the language dropdown
        label: 'Castellano',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Idioma',
        // text for the edit-on-github link
        editLinkText: 'Ayúdanos a mejorar esta página en GitHub!',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "Nuevo contenido disponible.",
            buttonText: "Actualizar"
          }
        },
        nav: [
          { text: 'AULES', link: 'https://aules.edu.gva.es/fp/' , ariaLabel: 'AULES' },
          { text: 'Contenido del curso', ariaLabel: 'Contenido del curso',
            items: [
              { text: 'Tema 1 - Introducción a la programación concurrente', link: '/es/unit1/' },
              { text: 'Tema 2 - Programación de procesos', link: '/es/unit2/' }
            ]          
          }
        ],
        sidebar: {
          '/es/unit1/': [ { title: 'PSP - Tema 1: Introducción a la programación concurrente', collapsable: true, 
            children: ['', 'part1', 'part2']
          } ],
          '/es/unit2/': [ { title: 'PSP - Tema 2: Programación de procesos', collapsable: true, 
            children: ['', 'part1', 'part2']
          } ],
          '/es/': [ { title: 'PSP - Contenidos', collapsable: true, 
            children: ['', '/unit1/', '/unit2/']
          } ],
        }
      }
    },
    // Smooth scrolling
    smoothScroll: true,
    // Github configuration
    // - Link to github repo in nav bar
    repo: 'psp2dam/psp_sources',
    repoLabel: 'GitHub',
    // - Link to page in github, at the bottom of each page
    docsDir: 'src',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    // Last updated info, at the bottom of each page
    lastUpdated: 'Last updated',
    // Navigation bar configuration, at top left on the nav bar (next to the title)
    logo: '/Logo_IES_Transparente_Blanco_v1-3.png',
/*    
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
*/    
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: {
    
    '@vuepress/plugin-back-to-top': {

    },  
    '@vuepress/plugin-medium-zoom': {
      selector: 'p img',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 48,
        background: '#212530CC',
        scrollOffset: 200,
      }
    },
    '@vuepress/plugin-last-updated': {
      dateOptions:{
        hour12: false
      }
    }
  }
}

---
title: VuePress install & config
# markdown:
#    image_dir: /images
#   absolute_image_path: false
# export_on_save:
#    html: true
#    puppeteer: true
---

<DownloadPDF-component />

<DocumentCover-component titulo="Tema 1 - VuePress" subtitulo="Instalación y configuración" />

[[toc]]

# 1. Instalación de VuePress <Badge text="v1.x" vertical="top"/>



VuePress está formado por dos componente: un [generador de sitios estáticos minimalista](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core) coun una [configuración de temas ](https://v1.vuepress.vuejs.org/theme/) basada en Vue y una [API de extensiones](https://v1.vuepress.vuejs.org/plugin/), junto con un [tema por defecto ](https://v1.vuepress.vuejs.org/theme/default-theme-config.html) optimizado para la escritura de documentación técnica. VuePress fue inicialmente desarrollado para satisfacer las necesidades de documentación del desarrollo de Vue y sus subproyectos.

Vue utiliza el lenguaje MarkDown para generar el contenido. Cada página generada por VuePress se convierte en una renderización en HTML estático proporcionando rapidez de carga y permitiendo posibilidades de posicionamiento SEO. Sin embargo, durante la generación de las páginas, Vue coge el contenido estático y lo convierte en una `Single-Page Application (SPA)`. Con la configuración se puede generar una navegación entre las páginas del sitio, generéndose todos los enlaces y estructura el sitio de forma previa.

## 1.1 Instalación del entorno <Badge text="new!" type="error"/>

Para poder usar VuePress, previamente debemos intalar [Node.js](https://nodejs.org/es/) en nuestro equipo.

A continuación, seguiremos los siguientes pasos para la instalación

``` sh
mkdir vuepress-starter && cd vuepress-starter
npm init
npm install -D vuepress
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

::: tip ℹ️ Nota
En el último paso hemos creado una página de ejemplo con el título "Hello VuePress"
:::

<div class="pagebreak"> </div>

## 1.2 Lanzar el entorno de pruebas / producción

Una vez creadas las páginas, podemos ver en tiempo real como va quedando nuestro sitio y ver cómo se reflejan los cambios que vamos haciendo sobre el mismo.

La primera vez, tenemos que editar el archivo package.json y añadirle algunos scripts

```json
 "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
```

A partir de ese momento podemos lanzar cualquiera de los dos entornos ejecutando los siguientes comandos desde el directorio raíz del proyecto (vuepress-starter en nuestro ejemplo)

```sh
    # Lanzar entorno de desarrollo
    npm run docs:dev
    # Lanzar entorno de producción
    npm run docs:build
```

::: warning ⚠️ Diferencias

- El entorno de desarrollo lanza un servidor web local en [localhost:8080](http://localhost:8080) y va compilando los cambios sobre la marcha para que podamos visualizarlos en el servidor lanzado.
  
- Por contra, el entrono de producción compila todos los archivos a HTML y genera una carpeta (docs/.vuepress/dist) con la exportación del sitio y todos los archivos necesarios para lanzarlo en cualquier servicio de alojamiento, bien sea GitHub Pages, un server en Azure o un servidor web local propio.
En este proceso, se realizan comprobaciones de enlaces rotos, archivos inexistentes y errores en la configuración que harían que el sitio web generado no funcionase.
:::

<div class="pagebreak"> </div>

## 1.3 Estructura de directorios

![Estrcutura de directorios de VuePress](/images/DirectoryStructure.jpg "Estructura de directorios")

- *.vuepress* es la carpeta que contiene todos los archivos de configuración y recursos estáticos (css, imágenes, pdf, ...) utilizados por el sitio web.
- *.vuepress/components* es la carpeta en la que podemos extender la funcionalidad por defecto de VuePress con nuevas etiquetas.

::: details 📋 Ejemplo de componente para generar la portada de los PDF (DocumentCover-component.vue)

```vue
<template>
  <div v-if="$lang == 'es-ES'" true class="documentcover" align="center">   
    <img :src="$withBase('/images/LogoPSP_mini_es.png')" alt="PSP Logo" />          
    <h1>{{titulo}}</h1>
    <h2>{{subtitulo}}</h2>
    <img :src="$withBase('/LogoIES.png')" alt="Logo IES Doctor Balmis" style="padding:2cm;" />         
    <CCLicense-component />
    <div class="pagebreak"> </div>
  </div>
  <div v-else class="documentcover" align="center">   
    <img :src="$withBase('/images/LogoPSP_mini_en.png')" alt="PSP Logo" />          
    <h1>{{titulo}}</h1>
    <h2>{{subtitulo}}</h2>
    <img :src="$withBase('/LogoIES.png')" alt="IES Doctor Balmis Logo" style="padding:2cm;" /> 
    <CCLicense-component />
    <div class="pagebreak"> </div>
</div>
  
</template> 
  

<script>
export default {
  props: ["titulo", "subtitulo"],
  data: function () {
    var theData = {
      onevar: this.titulo,
      somevar: this.subtitulo,
      // other object attributes
    };

    return theData;
  },
};
</script>
```

:::

- *.vuepress/styles/index.styl* es el archivo en el que podemos añadir o sobreescribir los estilos CSS del tema por defecto usado por VuePress. En mi caso yo lo utilizo principalmente para incluir/excluir estilos de la visualización en HTML y en PDF.

::: details 📋 Ejemplo de estilos aplicados

```css
@media only screen {
  .documentcover {
    display: none !important;    
  }
}

@media print {
  //-webkit-print-color-adjust: exact;

  // your code here
  .downloadLink
  {
    display: none !important;
  }
  .pagebreak
  {
    page-break-after: always;
  }
  .theme-code-block
  {
    display: block !important;
  }
 ```

 :::

Un ejemplo de esta última ocnfiguración la podemos ver en los bloques de código que permite añadir VuePress para mostrar diferencias entre dos lenguajes o bien entre dos librerías del mismo lenguaje.

<code-group>
<code-block title="PHP Example">
```php
# Post Here Code Example
```
</code-block>

<code-block title="Java Title">
```java
// Post Here Code Example
```
</code-block>
</code-group>

::: danger Versión pantalla vs imprimible
En la versión PDF de esta página, los códigos se mostrarán por separado. Esto se consigue con los estilos.
Además, la portada se verá sólo en el PDF y los enlaces de descarga/visualización del PDF se verán solo en el HTML.
:::

<div class="pagebreak"> </div>

## 1.4 El archivo de configuración config.js

Sin modificar la configuración por defecto el sitio es mínimo y no hay navegación entre las páginas. Para configurar y adaptar el sitio a nuestro guesto, debemos crear el archivo .vuepress/config.js. En este archivo estará toda la configuración específica de VuePress.

En este archivo configuraremos:
- Características generales del sitio
- Configuración de los idiomas en los que se mostrarán las páginas
- Configuración de la barra de navegación superior
- Configuración de la barra de navegación lateral
- Configuración de los plugins que vayamos añadiendo a nuestro sitio
  - Copiar código desde las cajas
  - Ampliar imágenes
  - Extensiones de Markdown
  - Exportación PDF
  - Configuración del repositorio Github de publicación
  - ...

Hay infinidad de configuraciones y customizaciones que se pueden realizar a un sitio. Es la parte más costosa de la configuración de VuePress.
Os dejo como ejemplo el archivo de configuración que tengo actualmente

```js
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
  // base: '/psp_sources/', // Producción
  base: '/', // Desarrollo

  // Host name for PDF export configuration
  host: 'localhost',

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
    ['link', { rel: 'icon', href: '/psp_favicon.png' }]
  ],

  /**
   * Internationalization - Site Level i18n Config
   */  

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Process and Service Programming',
      description: '2nd DAM PSP Module'
    },
    '/es/': {
      lang: 'es-ES',
      title: 'Programación de Servicios y Procesos',
      description: 'Módulo PSP de 2º DAM'
    }
  },

  theme: 'default-prefers-color-scheme',
  
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

    // extended-theme-configurations
    overrideTheme: 'light',
    prefersTheme: 'light',

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
            children: ['', 'part1', 'part2', 'part1_']
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
            children: ['', 'part1', 'part2', 'part1_']
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
    logo: '/LogoIES.png',
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: {
    
    '@snowdog/vuepress-plugin-pdf-export': {
      puppeteerLaunchOptions: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      },
      sorter: 'pathOrdered',
      outputFileName: 'book.pdf',
      theme: 'default-prefers-color-scheme',  
      pageOptions: {
        format: 'A4',
        displayHeaderFooter: true,
        headerTemplate: `
        <style>
          .header, .footer{ font-family: "Segoe UI", Roboto, Oxygen, Arial, freesans, sans-serif; padding: 0mm 1mm; margin: 0 1cm ; width: 100%; text-align: right ;}
          .header { font-size: 10px; }
          .footer {font-size: 9px;}
          .border-bottom { border-bottom: 1pt solid #3eaf7c;}
          .border-top { border-top: 1pt solid #3eaf7c; border-right: 1pt solid #3eaf7c;}
        </style>
        <div class="border-bottom header"><span style="float:left;">CFGS DAM</span><span class="title"></span></div>
      `,
      footerTemplate: `
        <div class="border-top footer">
          <span style="float:left; text-align:left;">IES Doctor Balmis</span>
          <b><span class="pageNumber"></span> / <span class="totalPages"></span></b>
        </div>
      `,
        printBackground: true,
        scale: 0.9,
        margin: {top: '1.5cm', bottom: '1.5cm', left: '1cm', right: '1cm', },
      },
    },
    '@vuepress/plugin-back-to-top': {

    },  
    '@vuepress/plugin-medium-zoom': {
      selector: 'p img, table img, figure img',
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
    },
    '@xiaopanda/vuepress-plugin-code-copy': {
      buttonStaticIcon: false,
      buttonIconTitle: 'Copy',
      buttonAlign: 'bottom',
      buttonColor: '#3eaf7c'
    },
    'vuepress-plugin-mermaidjs': {

    },
    'vuepress-plugin-graphviz': {

    }
  }
}

```
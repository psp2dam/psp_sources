<template>
  <div v-if="$lang == 'es-ES'" true class="downloadLink" align="right">
    <a :href="$withBase('/pdf/'+$page.title+'.pdf')" download>
      <img :src="$withBase('/images/download-pdf.png')" title="descarga como PDF" alt="descarga PDF" height="50" />      
    </a>
    <a :href="$withBase('/pdf/'+$page.title+'.pdf')" target="_blank">
      <img :src="$withBase('/images/open-pdf.png')" title="abre como PDF" alt="abre PDF" height="50" />      
    </a>
  </div>
  <div v-else true class="downloadLink" align="right">
    <a :href="$withBase('/pdf/'+$page.title+'.pdf')" download>
      <img :src="$withBase('/images/download-pdf.png')" title="download as PDF" alt="download PDF" height="50" />      
    </a>
    <a :href="$withBase('/pdf/'+$page.title+'.pdf')" target="_blank">
      <img :src="$withBase('/images/open-pdf.png')" title="open as PDF"alt="open PDF" height="50" />      
    </a>

  </div>

</template>


<template>
  <div v-if="$lang == 'es-ES'" true class="downloadLink" align="right">
    <a :href="$withBase('/pdf/'+$page.path.replace(/\//g,'_').replace('html', 'pdf'))" download><Badge text="descarga archivo PDF" type="error" vertical="top" />
      <img :src="$withBase('/images/download-pdf.png')" alt="documento PDF" height="50" />      
    </a>
  </div>
  <div v-else true class="downloadLink" align="right">
    <a :href="$withBase('/pdf/'+$page.path.replace(/\//g,'_').replace('html', 'pdf'))" download><Badge text="download PDF file" type="error" vertical="top" />
      <img :src="$withBase('/images/download-pdf.png')" alt="PDF document" height="50" />      
    </a>
  </div>

</template>


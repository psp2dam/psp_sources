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
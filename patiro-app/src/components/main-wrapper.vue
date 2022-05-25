<template>
  <div class="main-wrapper">
  <p>{{title}}</p>
  <list-patients />
  </div>
</template>

<script>

import ListPatients from './list-patients.vue'

export default {
  name: "main-wrapper",
  components:{
    ListPatients
 },
  props:{},
  data(){
    return{
      // title:"Main wrapper"
    }
  },
  
}
</script>

<style>
.main-wrapper{
   justify-content: center; 
}
</style>
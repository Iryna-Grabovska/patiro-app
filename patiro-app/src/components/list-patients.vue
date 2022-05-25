<template>
  <div class="list-patients">
    <form-patient />
    <h3>List patients</h3>
    <div class="grid">
 <patient-table
   v-for="patient in PATIENTS"
    :key= "patient.id"
    :patients_data="patient" 
    @sendId=" showMoreInfo" 
    />
   
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PatientTable from './patient-table.vue'
import FormPatient from './form-patient.vue'
export default {
  name:"list-patients",
  components:{
    PatientTable,
    FormPatient
  },
  props:{},
  data(){
    return{  
    }
  },
  computed:{...mapGetters(['PATIENTS'])},
  methods:{
    showMoreInfo(data){
          console.log(data);
        },
     ...mapActions(
         ['GET_PATIENTS_API']
       )
     },
  mounted(){
        this.GET_PATIENTS_API()
      },

}
</script>

<style>

</style>
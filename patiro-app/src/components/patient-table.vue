<template>
 
<div class="patients-table">
    <PopUp v-if="isPopUpVisible" 
      :popupTitle="Title"
      @closePopup='closeInfoPopup'>
      
      <p class="patients-name" > {{patients.name}}</p>
      <hr/>
      <p>Height: {{patients.height}}</p>
            <p>Weight: {{patients.weight}}</p>
      <p > Phone: {{patients.phoneNumber}}</p>
      <p> Address: {{patients.address}}</p>
</PopUp>
      
    <div class="patints-list" >
      <p class="patient-name">  {{patients_data.name}} </p>
       <p > Join date: {{patients_data.joinDate.split('T')[0]}}</p>
      <button class="btn-info" @click="showPopupInfo">more info </button>
    </div>

  </div>

</template>

<script>
import axios from 'axios'
import PopUp from './pop-up-patient.vue'

export default {
  name:"patients-table",
  components:{
    PopUp
  },
  props:{
    patients_data:{
      type: Object,
      dedault(){
        return{}
      }  
    },  
  },
  
  data(){return{
    patients: null,
     isPopUpVisible: false,
      loading: true,
       errored: false,
  }},

  methods:{
    showPopupInfo(){
      this.isPopUpVisible= true;
        axios
       .get(`https://patiro-developer.azurewebsites.net/api/Member/${this.patients_data.id}`)
         .then((response) => (this.patients = response.data))
           .catch(error=>{
console.log(error),
           this.errored= true
        })
         .finally(() => (this.loading = false));
    },
    closeInfoPopup(){
      this.isPopUpVisible= false; 
    }
  }
}

</script>

<style >
.patints-list{
  display: flex;
      margin-bottom: 10px;
    justify-content: space-between;
}

.patient-name{
  font-size: 16px;
  font-weight: 600;
}

.patients-name{
  font-size: 16px;
  font-weight: 600;
  color: #42b983;
}

.btn-info {
  background-color: #42b983;

  border: none;
 color: white;
  padding: 8px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;

 font-size: 12px;

}

</style>
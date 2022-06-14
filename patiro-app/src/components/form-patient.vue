<template>
  <section>
    <div>
      <h3> Registration patient</h3>
      <form class="input-feild" 

        v-on:submit.prevent="submitForm" 
      >
        <input
          class="search-input"
          type="text"
          placeholder="Name"
          v-model="form.name"
          id="name"
        />
      
        <input
          class="search-input"
          v-model="form.address"
          placeholder="address"
          type="text"
          id="address"
        />
        <input
          class="search-input"
          v-model="form.phoneNumber"
          placeholder="phone number"
          type="text"
          id="phoneNumber"
        
        />
        <br/>
          <div>
          </div>
        <input
          class="search-input"
          v-model="this.form.weight"
          placeholder="weight"
          type="number"
          id="weight"
        />
        <input
          class="search-input"
          v-model="this.form.height"
          placeholder="height"
          type="number"
          id="height"
        />
        <br/>
            <span> Status {{form.status.text}}</span>
        <select v-model="form.status"  id="status">
    <option v-for="option in form.status" :value="option.value" :key="option.id">
      {{ option.text }}
    </option>
  </select>
  <br/>
        <button class="btn-search" >Add patient</button>
      </form>
      
    </div>
  </section>
</template>

<script>

import axios from "axios";

export default {

  name: "PostPage",
 data(){return {
     
      form:{
         patients:null,
      status: [
        { text: 'New', value: 0 },
        { text: 'Pending', value: 1 },
        { text: 'Disqualified', value: 2 },
        { text: 'Qualified', value: 3 }
      ],
      name: "",
      address: "",
      phoneNumber:"",
      weight:"",
      height:"",
    }
    }
  },

  methods: {
     submitForm(){
    this.submitting = true;
 
         axios.post(`https://patiro-developer.azurewebsites.net/api/Member/${this.id}`, this.form)
                 .then((response) => 
                  console.log(response)
                 )
                 .catch((error) => 
                    console.log(error)
                 ).finally(() => {
                    
                 }); 
               
  }

}
}

</script>

<style >

.search-input {

  padding: 6px;

  border: 2px solid black;

  margin-top: 8px;

  margin-right: 16px;

  font-size: 19px;

  width: 20%;

  color: black;

}

.input-feild {
  justify-content: space-around;
align-items: center;
  margin: 10px 0px;
}

.btn-search {
margin-top: 20px;
  background-color: #42b983;

  border: none;

  color: white;

  padding: 15px 32px;

  text-align: center;

  text-decoration: none;

  display: inline-block;

  font-size: 16px;

}

</style>
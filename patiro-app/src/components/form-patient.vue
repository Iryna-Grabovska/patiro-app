<template>
  <section>
    <div>
      <h3> Registration patient</h3>
      <form class="input-feild"  v-on:submit.prevent="submitForm"
      >
        <input
          class="search-input"
          type="text"
          placeholder="Name"
          v-model="form.name"

        />
      
        <input
          class="search-input"
          v-model="form.address"
          placeholder="address"
          type="text"
        />
        <input
          class="search-input"
          v-model="form.phoneNumber"
          placeholder="phone number"
          type="tex"
        
        />
        <br/>
          <div>
          </div>
        <input
          class="search-input"
          v-model="form.weight"
          placeholder="weight"
          type="number"
        />
        <input
          class="search-input"
          v-model="form.height"
          placeholder="height"
          type="number"
        />
        <br/>
            <span> Status {{form.status.text}}</span>
        <select v-model="form.status" >
    <option v-for="option in form.status" :value="option.value" :key="option.id">
      {{ option.text }}
    </option>
  </select>
  <br/>
        <button class="btn-search" v-on:click="getData">Add patient</button>
      </form>
      
    </div>
  </section>
</template>

<script>

import axios from "axios";

export default {

  name: "PostPage",
 data() {

    return {
      form:{
      status: [
        { text: 'New', value: 0 },
        { text: 'Pending', value: 1 },
        { text: 'Disqualified', value: 2 },
        { text: 'Qualified', value: 3 }
      ],
      title: "patient registration",
      users: [],
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
       axios
        .post(`https://patiro-developer.azurewebsites.net/api/Member/${this.form.users}`,
         this.form)
                 .then((respons) => {
                  console.log(respons);
                 })
                 .catch((error) => {
                    console.log(error);
                 }).finally(() => {
                    
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
<template>
  <div>

    <div>
      <button @click="login">Login</button>
      <button @click="getPosts">getPosts</button>
    </div>



  </div>
</template>

<script setup>

import {useAuthStore} from '~/store/auth'

import axios from "axios";

const login = async () => {
  await  useAuthStore().login('admin@admin.com', 'password')
  localStorage.setItem('token', useAuthStore().accessToken )
  console.log(useAuthStore().accessToken)
}

const getPosts = async () => {
  const token = localStorage.getItem('token')

  console.log(token)


  const options = {
    method: 'GET',
    url: 'http://127.0.0.1:8000/api/posts',
    headers: {
      Authorization: `Bearer ${token} `
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });


}


</script>

<style scoped>

</style>

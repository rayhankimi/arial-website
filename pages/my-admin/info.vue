<template>
  <div class="admin-container">
    <h1>Welcome to Info Page</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import {definePageMeta} from "#imports";
import auth from "~/middleware/auth.ts"

definePageMeta({
  layout: 'admin',
  middleware: 'auth'
});

const router = useRouter();



const logout = () => {
  localStorage.removeItem('authToken'); // Hapus token dari localStorage
  router.push('/login'); // Redirect ke halaman login
};
</script>


<style>
.admin-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
}
</style>

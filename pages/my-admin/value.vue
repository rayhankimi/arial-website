<template>
  <div class="w-full border-2 border-black rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white mx-auto p-2 my-4">
    <h1 class="text-3xl font-heading">Device Value Management</h1>
    <p class="text-xl font-heading">Akan digunakan untuk lihat, ubah, dan hapus nilai pada device</p>
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

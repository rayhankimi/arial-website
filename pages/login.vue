<template>
  <div class="flex items-center justify-center min-h-screen bg-green-200">
    <!-- Card -->
    <div
        class="bg-amber-200 w-full max-w-sm p-6 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] text-black"
    >
      <!-- Judul & Subjudul -->
      <h2 class="text-2xl font-bold mb-1">Login</h2>
      <p class="text-sm mb-4">Silakan masukkan email dan password Anda</p>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label for="email" class="block mb-1 font-medium">Email:</label>
          <input
              type="email"
              id="email"
              v-model="email"
              required
              placeholder="name@example.com"
              class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="password" class="block mb-1 font-medium">Password:</label>
          <input
              type="password"
              id="password"
              v-model="password"
              required
              placeholder="********"
              class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <p v-if="error" class="text-red-600 text-sm">{{ error }}</p>

        <div class="flex justify-between">
          <button
              type="button"
              class="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 text-gray-800 shadow-[4px_4px_0px_rgba(0,0,0,1)]"
              @click="handleCancel"
          >
            Cancel
          </button>
          <button
              type="submit"
              :disabled="loading"
              class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          >
            {{ loading ? 'Logging in...' : 'Login' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCookie } from '#app'
import {definePageMeta} from "#imports";

definePageMeta({
  layout: 'login'
});

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref(null)
const router = useRouter()

const authTokenCookie = useCookie('authToken')

const handleLogin = async () => {
  loading.value = true
  error.value = null

  try {
    const response = await $fetch('/api/user/token/', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
      },
      baseURL: useRuntimeConfig().public.baseURL,
    })

    authTokenCookie.value = response.token

    await router.push('/my-admin/todo')
  } catch (err) {
    error.value = 'Invalid email or password.'
  } finally {
    loading.value = false
  }
}

const handleCancel = () => {
  // Contoh jika ingin kembali ke halaman utama
  router.push('/')
}
</script>

<style scoped>
/* Tambahan styling kustom (jika diperlukan) */
</style>

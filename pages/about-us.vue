<script setup lang="ts">
</script>

<template>
  <div class="container">
    <h1>About Us</h1>
    <p>
      Halaman ini memuat informasi tentang kami.
    </p>
    <h1 v-for="i in 20"> Ini About Page {{ i }}</h1>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 64px);
  color: #000;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
p {
  line-height: 1.5;
}
</style>


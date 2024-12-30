<script setup lang="ts">
import SideBar from "~/components/SideBar.vue";
</script>

<template>
  <div class="container">
    <div class="side-bar-container">
      <SideBar class="side-bar" />
    </div>
    <div class="main-component-container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* Kontainer utama */
.container {
  display: grid;
  grid-template-columns: 17% 83%; /* Sidebar 30%, konten utama 70% */
  grid-template-rows: 100%; /* Konten dan sidebar di grid penuh */
  height: 100vh; /* Pastikan tinggi layar penuh */
  border-radius: 20px; /* Membuat efek rounded */
  overflow: hidden;
}

/* Sidebar */
.side-bar-container {
  color: white;
  border-radius: 20px 0 0 20px; /* Rounded hanya di kiri */
}

/* Konten utama */
.main-component-container {
  padding: 1rem;
  border-radius: 0 20px 20px 0; /* Rounded hanya di kanan */
  overflow-y: auto; /* Scroll jika konten terlalu panjang */
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 100%; /* Sidebar dan konten di satu kolom */
    grid-template-rows: auto auto; /* Sidebar di atas konten */
    height: auto; /* Tinggi menyesuaikan konten */
  }

  .side-bar-container {
    border-radius: 20px 20px 0 0; /* Rounded di atas */
    height: auto; /* Sidebar tidak lagi memenuhi tinggi layar */
  }

  .main-component-container {
    border-radius: 0 0 20px 20px; /* Rounded di bawah */
    height: auto; /* Konten mengikuti tinggi konten */
  }
}
</style>


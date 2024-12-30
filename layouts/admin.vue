<script setup lang="ts">
  import {definePageMeta} from "#imports";
  import SideBar from "~/components/SideBar.vue";

  definePageMeta({
    middleware: [
      'auth'
    ]
  })
</script>

<template>
  <div >
    <SideBar />
    <slot />
  </div>
</template>

<style scoped>

</style>
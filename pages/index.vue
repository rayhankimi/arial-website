<script setup>
import {computed, onMounted, ref} from "vue";

const monitorData = ref(null)

onMounted(async () => {
  monitorData.value = await $fetch('/api/latest-value').catch(() => null)
})

const trafficDateReadable = computed(() => {
  if (!monitorData.value?.taken_at) return 'Loading...'
  const dateObj = new Date(monitorData.value.taken_at)
  return dateObj.toLocaleString()
})
</script>

<template>
  <div class="flex w-full flex-col justify-center items-center py-2 px-6 ">
    <Hero
        :image="monitorData?.image || '/placeholder.webp'"
        :trafficValue="monitorData?.value || 0"
        :trafficDate="trafficDateReadable"
        :motor="monitorData?.motorcycle_count || 0"
        :mobil="monitorData?.car_count || 0"
        :truck-kecil="monitorData?.smalltruck_count || 0"
        :kendaraan-besar="monitorData?.bigvehicle_count || 0"
    />
  </div>
</template>


<style scoped>


</style>
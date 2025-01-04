<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import NavBar from '~/components/NavBar.vue'
import Monitor from '~/components/Monitor.vue'

const showRightSection = ref(false)
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
  <NavBar class="fixed top-0 left-0 w-full h-20 z-50 bg-teal-600 text-black" />

  <div class="pt-16 flex flex-col md:flex-row">
    <div class="w-auto md:w-7/12">
      <slot />
    </div>

    <div
        class="hidden md:block
         fixed
         right-0
         top-16
         w-full md:w-5/12
         px-4 py-4
         h-[calc(100vh-4rem)]
         overflow-auto
         shadow-[8px_8px_0px_rgba(0,0,0,1)]
         "
    >
      <Monitor
          :image="monitorData?.image || '/placeholder.webp'"
          :trafficValue="monitorData?.value || 0"
          :trafficDate="trafficDateReadable"
          :motor="monitorData?.motorcycle_count || 0"
          :mobil="monitorData?.car_count || 0"
          :truck-kecil="monitorData?.smalltruck_count || 0"
          :kendaraan-besar="monitorData?.bigvehicle_count || 0"
      />
    </div>


    <!-- Tombol Mobile -->
    <button
        class="fixed bottom-4 right-4 z-50 p-4 bg-yellow-500 text-black rounded-full
             shadow-md shadow-[2px_4px_0px_rgba(0,0,0,1)] bg-[#69D2E7] hover:bg-[#69D2E7]
             shadow-[2px_4px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2
             focus:ring-blue-300 block md:hidden"
        @click="showRightSection = true"
    >
      Monitor Kemacetan
    </button>

    <!-- Modal Mobile -->
    <transition name="fade">
      <div
          v-if="showRightSection"
          class="modal fixed inset-0 z-50 p-4 flex flex-col overflow-auto bg-[#87CEEB]"
      >
        <button
            class="self-end mb-4 bg-red-500 text-white px-4 py-2 rounded shadow-[2px_4px_0px_rgba(0,0,0,1)] hover:bg-red-600"
            @click="showRightSection = false"
        >
          Tutup
        </button>
        <div class="flex flex-col items-center">
          <Monitor
              :image="monitorData?.image || '/placeholder.webp'"
              :trafficValue="monitorData?.value || 0"
              :trafficDate="trafficDateReadable"
              :motor="monitorData?.motorcycle_count || 0"
              :mobil="monitorData?.car_count || 0"
              :truck-kecil="monitorData?.smalltruck_count || 0"
              :kendaraan-besar="monitorData?.bigvehicle_count || 0"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>


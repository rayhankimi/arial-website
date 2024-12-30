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
  <!-- NavBar dengan teks hitam -->
  <NavBar class="fixed top-0 left-0 w-full h-16 z-50 bg-teal-600 text-black" />

  <!-- Wrapper konten, offset 4rem (h-16) dari atas -->
  <div class="pt-16 flex flex-col md:flex-row">
    <!-- Left (slot) -->
    <div class="w-full md:w-3/5 border-r border-black">
      <slot />
    </div>

    <!-- Right section sticky -->
    <!-- top-16 agar menempel di bawah navbar saat di-scroll -->
    <div class="hidden md:block w-full md:w-2/5 px-8 py-8 fixed right-0 top-16">
      <h1 class="text-3xl font-bold mb-4 text-right">
        Status monitor kemacetan
      </h1>
      <Monitor
          :image="monitorData?.image || '/gwk.jpg'"
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
             shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2
             focus:ring-yellow-300 block md:hidden"
        @click="showRightSection = true"
    >
      Monitor Kemacetan
    </button>

    <!-- Modal Mobile -->
    <transition name="fade">
      <div
          v-if="showRightSection"
          class="modal fixed inset-0 z-50 p-4 flex flex-col overflow-auto bg-[#49CAAE]"
      >
        <button
            class="self-end mb-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            @click="showRightSection = false"
        >
          Tutup
        </button>
        <div class="flex flex-col items-center">
          <h1 class="text-3xl font-bold text-center mb-4">
            Status monitor kemacetan
          </h1>
          <Monitor
              :image="monitorData?.image || '/gwk.jpg'"
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


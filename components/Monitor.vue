<script setup>
// Define props untuk menerima data dari parent
defineProps({
  trafficValue: Number,
  trafficDate: String,
  motor: Number,
  mobil: Number,
  truckKecil: Number,
  kendaraanBesar: Number,
  image: String,
});


</script>

<template>
  <div
      class="w-4/5
           md:max-w-full
           h-auto
           rounded-md
           mx-auto my-auto
           px-4 py-5"
  >
    <h1 class="text-center sm:text-lg md:text-2l lg:text-3xl mb-3 font-semibold"> Status Monitor Kemacetan</h1>
    <figure class="w-[calc(80%+3rem)] h-[calc(50%+3rem) border-black mx-auto shadow-[8px_8px_0px_rgba(0,0,0,1)] ">
      <img
          :src="image"
          alt="thumbnail"
          class="w-full h-full object-cover"
      />
    </figure>
    <div class="mt-4 text-left">
      <!-- Contoh pakai clamp agar teksnya ikut “menyusut” di layar sempit -->
      <h1 class="[font-size:clamp(1.25rem,3vw,2rem)] mb-2 text-center font-semibold">
        Tingkat Kemacetan : {{ trafficValue }}
      </h1>
      <h1 class="text-sm md:text-base mb-2">
        Pada : {{ trafficDate }}
      </h1>
      <ul class="text-sm md:text-base leading-tight">
        <li> Motor : {{ motor }} </li>
        <li> Mobil : {{ mobil }}</li>
        <li> Truck Kecil : {{ truckKecil }}</li>
        <li> Kendaraan Besar : {{ kendaraanBesar }}</li>
      </ul>
    </div>
  </div>
</template>



<style scoped>

</style>
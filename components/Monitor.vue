<script setup>
import {useAsyncData} from "#app";

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
  <div class="w-full border-2 border-black rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-teal-200 mx-auto my-4">
    <div class="block">
      <div class="w-full h-full">
        <figure class="w-full h-64 border-black border-b-2">
          <img
              :src="image"
              alt="thumbnail"
              class="w-full h-full object-cover"
          />
        </figure>
        <div class="px-6 py-5 text-left h-full">
          <h1 class="text-[32px] mb-4 text-center text-semibold"> Tingkat Kemacetan : {{ trafficValue }}</h1>
          <h1 class="text-md mb-4"> Pada : {{ trafficDate }} </h1>
          <ul>
            <li> Motor : {{ motor }} </li>
            <li> Mobil : {{ mobil }}</li>
            <li> Truck Kecil : {{ truckKecil }}</li>
            <li> Kendaraan Besar {{ kendaraanBesar }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>
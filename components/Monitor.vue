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
  <div class="w-full  rounded-md py-2 " >
    <div class=" text-center md:text-left ">
      <h1 class="text-2xl md:text-3xl lg:text-3xl mb-2 font-semibold">
        Tingkat Kemacetan : {{ trafficValue }}
      </h1>
      <h1 class="text-lg md:text-2xl lg:text-3xl mb-2">
        Pada : {{ trafficDate }}
      </h1>
      <ul class="text-lg md:text-2xl lg:text-3xl leading-tight">
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
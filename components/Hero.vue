<script setup lang="ts">
import Scroll from "~/components/Scroll.vue";

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
  <div class="flex flex-col min-h-[60vh] xl:min-h-[85%] md:flex-row justify-center items-center ">
    <!-- Card 1 -->
    <div>
      <div class="flex flex-col  md:flex-row">
        <div data-aos="fade-right" class="flex justify-center w-full md:w-1/3 p-2 m-2 mx-auto">
          <figure class="md:mb-4 inline-block md:max-w-lg mx-auto flex justify-center items-center">
            <img
                :src="image"
                class="md:mb-4 mx-auto w-[45%] md:w-[80%]  border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                alt="indexgif"/>

          </figure>

        </div> <!-- End of Card 1 -->

        <div
            data-aos="fade-left"
            class="flex flex-col w-full md:w-2/3 p-2 md:p-4  md:my-4 space-y-2 md:space-y-4 md:justify-center bg-[#D1BB9E] px-4  text-black  border-2 border-black shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_0.8)]"
        >
          <h1 class="text-2xl md:text-3xl xl:text-5xl my-2 font-semibold">
            Arial Capstone Project
          </h1>
          <h2 class="text-sm md:text-lg xl:text-2xl">Kami coba untuk membantu masalah kemacetan di bali dengan solusi
            computer vision</h2>
          <div>
            <h3 class="text-sm md:text-lg xl:text-2xl font-semibold">Status kemacetan simpang unud real-time : </h3>
            <p class="text-sm md:text-lg xl:text-2xl ">
              Tingkat Kemacetan : {{ trafficValue }}
            </p>
            <p class="text-sm md:text-lg xl:text-2xl">
              Pada : {{ trafficDate }}
            </p>
            <ul class="text-sm md:text-lg xl:text-2xl">
              <li> Motor : {{ motor }}</li>
              <li> Mobil : {{ mobil }}</li>
              <li> Truck Kecil : {{ truckKecil }}</li>
              <li> Kendaraan Besar : {{ kendaraanBesar }}</li>
            </ul>
          </div>


        </div> <!--- End of Card 2 --->
      </div>
      <Scroll/>
    </div>
  </div>
</template>

<style scoped>

</style>
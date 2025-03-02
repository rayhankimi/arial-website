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

    <div class="flex flex-col md:flex-row justify-center mt-6 ">
      <div
          data-aos="fade-left"
          class="flex flex-col w-full md:w-4/5 p-4 my-4 space-y-4 md:justify-center bg-[#EAD8C0] p-5 text-black  border-2 border-black shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_0.8)]"
      >
        <div class="flex flex-col md:flex-row">
          <div class="flex flex-col md:w-4/5">
            <h3 class="text-lg md:text-3xl font-semibold my-3"> Tentang Kami</h3>
            <hr/>
            <div class="flex flex-col">
              <p class="text-md md:text-lg">
                Kami adalah tim Capstone Project beranggotakan 3 orang mahasiswa Teknik Elektro Universitas Udayana
                yang
                berusaha mencari solusi atas kemacetan yang terjadi di Pulau Bali menggunakan algoritma computer vision
                guna mendeteksi kemacetan dan mengirimkannya melalui internet.
              </p>
              <p class="text-md md:text-lg">
                Capstone project merupakan tugas akhir sebagai penentu kelulusan mahasiswa Teknik Elektro Universitas
                Udayana dimana
                mahasiswa diharapkan dapat menyelesaikan sebuah masalah melalui proyek kolaboratif
              </p>
            </div>
            <p class="text-md md:text-2xl font-semibold"> teknologi yang kami gunakan :</p>
            <ul>
              <li class="text-md md:text-2xl "> Computer Vision YoLoV5 (pendeteksi kendaraan)</li>
              <li class="text-md md:text-2xl "> Panel surya (sumber energi)</li>
              <li class="text-md md:text-2xl "> ESP32 (pengontrol lalu lintas)</li>
              <li class="text-md md:text-2xl "> Django REST (protokol web)</li>
              <li class="text-md md:text-2xl "> Vue.js (website)</li>
            </ul>
          </div>

          <div
              class="flex flex-col w-full md:w-1/2 p-4 m-2  mx-auto">

            <figure data-aos="fade-top" class="mb-4 inline-block md:max-w-lg mx-auto  ">
              <img
                  src="/team.jpg"
                  class="mb-4  w-[80%]  mx-auto border-2 border-black bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                  alt="indexgif"/>
              <figcaption class="text-md text-neutral-600 mx-auto">
                <p></p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row justify-center mt-6 ">
      <div
          data-aos="fade-left"
          class="flex flex-col w-full md:w-4/5 p-4 my-4 space-y-4 md:justify-center bg-[#EAD8C0] p-5 text-black  border-2 border-black shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_0.8)]"
      >
        <div class="flex flex-col md:flex-row">
          <div class="flex flex-col md:w-4/5">
            <h3 class="text-lg md:text-3xl font-semibold my-3"> Cara kerja sistem</h3>
            <div class="flex flex-col">
              <p class="text-md md:text-lg">
                Sistem kami bekerja dengan cara mendeteksi kendaraan yang melintas di simpang unud menggunakan algoritma
                computer vision YoLoV5. Data yang didapat kemudian diolah dan dikirimkan ke server menggunakan protokol
                web Django REST. Server kemudian mengirimkan data tersebut ke ESP32 yang berfungsi sebagai pengontrol
                lalu lintas.
              </p>
              <p class="text-md md:text-lg">
                Guna menghemat energi, kami menggunakan panel surya sebagai sumber energi cadangan untuk ESP32 dan kamera.
                Alat kami dapat dibongkar pasang secara mudah, sehingga dapat diimplementasikan di berbagai tempat secara
                cepat tergantung dengan jalan dan persimpangan yang akan diawasi.
              </p>
            </div>
<!--            <p class="text-md md:text-2xl font-semibold"> teknologi yang kami gunakan :</p>-->
<!--            <ul>-->
<!--              <li class="text-md md:text-2xl "> Computer Vision YoLoV5 (pendeteksi kendaraan)</li>-->
<!--              <li class="text-md md:text-2xl "> Panel surya (sumber energi)</li>-->
<!--              <li class="text-md md:text-2xl "> ESP32 (pengontrol lalu lintas)</li>-->
<!--              <li class="text-md md:text-2xl "> Django REST (protokol web)</li>-->
<!--              <li class="text-md md:text-2xl "> Vue.js (website)</li>-->
<!--            </ul>-->
          </div>

          <div
              class="flex flex-col w-full md:w-1/2 p-4 m-2  mx-auto">

            <figure data-aos="fade-top" class="mb-4 inline-block md:max-w-lg mx-auto  ">
              <img
                  src="/cv.jpeg"
                  class="mb-4  w-[80%]  mx-auto border-2 border-black bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                  alt="indexgif"/>
              <figcaption class="text-md text-neutral-600 mx-auto">
                <p></p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>


</style>
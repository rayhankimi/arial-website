<script setup>
import {computed, onMounted, ref} from "vue";
import Monitor from "~/components/Monitor.vue";

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
  <div>
    <div class="pt-[84px] md:pt-[72px] min-h-screen sm:h-screen box-border">

      <!--        Flex Main Container        -->
      <div class="flex flex-col w-full h-full">

        <!--        Upper part        -->
        <div class="flex flex-col md:flex-row h-[65%]">
          <!--        First Section (35% + 35%)        -->
          <div
              class="bg-[#71BBB2] order-2 md:order-1 w-full md:w-[60%] border-2 p-3 md:border-1 border-[#497D74] md:rounded-e-lg flex flex-col md:flex-row items-center justify-center md:justify-left">
            <!--        First Section, First Content        -->
            <div class="w-full md:w-[40%]  flex place-items-start justify-center">
              <div class="flex flex-col p-3">
                <figure class="w-full h-[200px] md:h-[250px] lg:h-[300px] border-black mx-auto overflow-hidden">
                  <img
                      :src="monitorData?.image || '/placeholder.webp'"
                      alt="thumbnail"
                      class="w-full h-full object-cover"
                  />
                </figure>
              </div>
            </div> <!-- End of First Section, First Content -->

            <!--        First Section, Second Content       -->
            <div class="w-full md:w-[60%] items-left justify-center md:justify-left">
              <div class="flex flex-col">
                <h1 class="text-center text-2xl md:text-left md:text-3xl  font-semibold "> Status Monitor Kemacetan</h1>
                <Monitor
                    :trafficValue="monitorData?.value || 0"
                    :trafficDate="trafficDateReadable"
                    :motor="monitorData?.motorcycle_count || 0"
                    :mobil="monitorData?.car_count || 0"
                    :truck-kecil="monitorData?.smalltruck_count || 0"
                    :kendaraan-besar="monitorData?.bigvehicle_count || 0"
                />
              </div>
            </div> <!-- End of First Section, Second Content -->

          </div> <!-- End of First Section -->

          <!--        Second Section (30%)        -->
          <div class="order-1 md:order-2 w-full md:w-[40%] flex items-center justify-center">
            <div class="p-3 md:p-6 flex funnel-display-bold flex-col">
              <h1 class="text-5xl md:text-4xl lg:text-6xl text-right py-4">
                Arial,
              </h1>
              <div class="flex flex-row flex-wrap items-center">
                <h1 class="text-2xl lg:text-4xl px-0.5">
                  Kami coba mencari solusi
                </h1>
                <h1 class="text-2xl lg:text-4xl px-0.5">
                  untuk
                </h1>
                <h1 class="text-2xl lg:text-4xl px-0.5 changing-text">
                </h1>
                <h1 class="text-2xl lg:text-4xl px-0.5">
                  yang sedang
                </h1>
                <h1 class="text-2xl lg:text-4xl px-0.5 changing-text2">
                </h1>
                <h1 class="text-2xl lg:text-4xl px-0.5">
                  agar tidak
                </h1>
                <h1 class="text-2xl lg:text-4xl px-0.5 changing-text3">
                </h1>
                <h1 class="text-2xl lg:text-4xl px-0.5">
                  karena macet.
                </h1>
              </div>
            </div>
          </div> <!-- End of Second Section -->

        </div> <!-- End of Upper Part -->


        <!--        Lower Part        -->
        <div class="flex flex-col md:flex-row h-[35%]">

          <!--        Third Section        -->
          <div
              class="order-3 md:order-none w-full md:w-[35%] flex place-items-start justify-start">
            <div class="flex flex-col p-6">
              <h1 class="text-3xl font-semibold "> Tentang Kami </h1>
              <div class="flex flex-col p-3">
                <figure class="w-full h-[200px] md:h-[250px] lg:h-[300px] border-black mx-auto overflow-hidden">
                  <img
                      src="/team.jpg"
                      alt="thumbnail"
                      class="w-full h-full object-cover"
                  />
                </figure>
              </div>
              <p class="text-lg xl:text-2xl mb-3">
                Kami adalah tim Capstone Project beranggotakan 3 orang mahasiswa Teknik Elektro Universitas Udayana yang
                berusaha mencari solusi atas kemacetan yang terjadi di Pulau Bali.
              </p>
              <div class="w-[80%]">

                <button class="rounded-md bg-black">
            <span
                class="block -translate-x-2 -translate-y-2 rounded-md border-2 border-black text-white bg-[#578E7E] p-1.5 text-md md:text-xl hover:-translate-y-3
        active:translate-x-0 active:translate-y-0 transition-all"
            >
        <a href="/about-us">
          Tentang Kami
        </a>
      </span>
                </button>
              </div>
            </div>
          </div> <!-- End of Third Section -->

          <!--        Fourth Section        -->
          <div class="order-4 md:order-none w-full md:w-[35%] flex place-items-start justify-start">
            <div class="flex flex-col p-6">
              <h1 class="text-3xl font-semibold"> Rumusan Masalah </h1>
              <div class="flex flex-col p-3">
                <figure class="w-full h-[200px] md:h-[250px] lg:h-[300px] border-black mx-auto overflow-hidden">
                  <img
                      src="/traffic.jpg"
                      alt="thumbnail"
                      class="w-full h-full object-cover"
                  />
                </figure>
              </div>
              <p class="text-lg xl:text-2xl mb-3">
                Kemacetan di pulau Bali mengalami peningkatan yang signifikan dari waktu ke waktu. Kurangnya manajemen
                lampu merah yang efektif menjadi salah satu penyebab utama kemacetan di pulau Bali...
              </p>
              <div class="w-[80%]">
                <button class="rounded-md bg-black">
            <span
                class="block -translate-x-2 -translate-y-2 rounded-md border-2 border-black text-white bg-[#578E7E] p-1.5 text-md md:text-xl hover:-translate-y-3
        active:translate-x-0 active:translate-y-0 transition-all"
            >
        <a href="/info">
          Info selengkapnya
        </a>
      </span>
                </button>
              </div>
            </div>
          </div> <!-- End of Fourth Section -->

          <!--        Fifth Section        -->
          <div class="order-5 md:order-none w-full md:w-[30%] flex place-items-start justify-center">
            <div class="flex flex-col p-6">
              <h1 class="text-3xl font-semibold"> Solusi dari kami </h1>
              <div class="flex flex-col p-3">
                <figure class="w-full h-[200px] md:h-[250px] lg:h-[300px] border-black mx-auto overflow-hidden">
                  <img
                      src="/cv.jpeg"
                      alt="thumbnail"
                      class="w-full h-full object-cover"
                  />
                </figure>
              </div>
              <p class="text-lg xl:text-2xl mb-3">
                Kami melakukan pengembangan pada lampu merah dengan model computer vision yang dapat berubah tergantung
                kepadatan jumlah lalu lintas...
              </p>
              <div class="w-[80%]">
                <button class="rounded-md bg-black">
            <span
                class="block -translate-x-2 -translate-y-2 rounded-md border-2 border-black text-white bg-[#578E7E] p-1.5 text-md md:text-xl hover:-translate-y-3
        active:translate-x-0 active:translate-y-0 transition-all"
            >
        <a href="/contact">
          Kontak kami
        </a>
      </span>
                </button>
              </div>
            </div>
          </div> <!-- End of Fifth Section -->

        </div> <!-- End of Lower Part -->

      </div> <!-- End of Main Container -->
    </div> <!-- End of .pt-... -->
  </div> <!-- End of first div -->
</template>


<style scoped>

/* Font funnel */
.funnel-display-bold {
  font-family: "Funnel Display", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}

/* Animasi warna dan teks bergerak */
@keyframes colorFade {
  0%, 10% {
    color: black;
  }
  15%, 25% {
    color: white;
  }
  30%, 40% {
    color: black;
  }
}

@keyframes textChange {
  0%, 25% {
    content: "mahasiswa";
  }
  26%, 50% {
    content: "ojek online";
  }
  51%, 75% {
    content: "warga lokal";
  }
  76%, 100% {
    content: "turis";
  }
}

@keyframes textChange2 {
  0%, 25% {
    content: "berangkat ke kampus";
  }
  26%, 50% {
    content: "ambil orderan";
  }
  51%, 75% {
    content: "beraktivitas di luar";
  }
  76%, 100% {
    content: "berjalan-jalan";
  }
}

@keyframes textChange3 {
  0%, 25% {
    content: "datang telat";
  }
  26%, 50% {
    content: "rugi waktu";
  }
  51%, 75% {
    content: "habis bensin";
  }
  76%, 100% {
    content: "habis kesabaran";
  }
}

/* Menyambungkan animasi ke elemen text */
.changing-text::after {
  content: "kemacetan";
  display: inline-block;
  animation: textChange 12s infinite steps(1, end), colorFade 3s infinite ease-in-out;
}

.changing-text2::after {
  content: "kemacetan";
  display: inline-block;
  animation: textChange2 12s infinite steps(1, end), colorFade 3s infinite ease-in-out;
}

.changing-text3::after {
  content: "kemacetan";
  display: inline-block;
  animation: textChange3 12s infinite steps(1, end), colorFade 3s infinite ease-in-out;
}
</style>
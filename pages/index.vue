<script setup lang="ts">
import Card from "~/components/Card.vue";
import Monitor from "~/components/Monitor.vue";
import {onMounted, ref} from "vue";

const showRightSection = ref(false);

// Fetch data di komponen induk
const monitorData = ref(null);
const monitorError = ref(null);

onMounted(async () => {
  try {
    monitorData.value = await $fetch('/api/user/device/1/latest-value', {
      baseURL: useRuntimeConfig().public.baseURL,
      headers: {
        Authorization: `Token ${useRuntimeConfig().public.apiSecret}`,
      },
    });
  } catch (err) {
    monitorError.value = err;
  }
});
</script>

<template>
  <div class="container">
    <div class="flex flex-col-reverse md:flex-row">

      <!-- LeftSection -->
      <div class="left-section w-full md:w-3/5 px-5 py-8 md:px-8">
        <h1 class="text-5xl funnel-display-bold text-right px-8 py-4"> Arial,</h1>
        <div class="message flex flex-row flex-wrap items-center px-4 md:px-8">
          <h1 class="text-lg sm:text-3xl md:text-2xl lg:text-3xl funnel-display-bold px-0.5">
            Kami coba mencari solusi
          </h1>
          <h1 class="text-lg sm:text-3xl md:text-2xl lg:text-3xl funnel-display-bold px-0.5">
            untuk
          </h1>
          <h1 class="text-lg sm:text-3xl md:text-2xl lg:text-3xl funnel-display-bold px-0.5 changing-text">
          </h1>
          <h1 class="text-lg sm:text-3xl md:text-2xl lg:text-3xl funnel-display-bold px-0.5">
            yang sedang
          </h1>
          <h1 class="text-lg sm:text-3xl md:text-2xl lg:text-3xl funnel-display-bold px-0.5 changing-text2">
          </h1>
          <h1 class="text-lg sm:text-3xl md:text-2xl lg:text-3xl funnel-display-bold px-0.5">
            agar tidak
          </h1>
          <h1 class="text-lg sm:text-3xl md:text-2xl lg:text-3xl funnel-display-bold px-0.5 changing-text3">
          </h1>
          <h1 class="text-lg sm:text-3xl md:text-2xl lg:text-3xl funnel-display-bold px-0.5">
            karena macet.
          </h1>
        </div>

        <div class="space-y-8 py-4">
          <Card

              image="/traffic.jpg"
              title="Terjebak macet karena lampu tak kunjung hijau?"
              description="Apakah anda pernah terjebak macet namun lampu lalu lintas tidak kunjung berubah?

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu lacus non nibh accumsan cursus. Donec interdum semper libero nec lacinia. Pellentesque lobortis vitae eros a scelerisque. Nulla varius ullamcorper est id dignissim. Suspendisse in elit ac mauris dapibus tincidunt luctus nec tellus. Nunc accumsan magna a dui finibus, a tincidunt mi viverra. Nunc ex quam, tincidunt in eros vitae, lacinia faucibus nisl. Sed ac eros nisl. Phasellus faucibus iaculis pharetra. Etiam id lobortis dui.

Etiam rhoncus, urna et posuere viverra, purus mauris bibendum erat, id suscipit mi nisi a nibh. Aenean et mi felis. Duis id odio sodales, viverra augue in, vulputate felis. Phasellus vestibulum mattis hendrerit. Nunc et mollis ante. Suspendisse potenti. Aliquam erat volutpat. Aenean interdum dignissim gravida. Nunc at orci pellentesque, egestas justo non, sodales enim. Praesent malesuada justo et massa dignissim, eget malesuada eros vehicula. Etiam convallis ex id turpis finibus tempus. Nullam nisi lectus, ornare tincidunt risus sed, ultricies maximus arcu. Phasellus et leo at ante mattis fermentum.  "
          />
          <Card

              image="/img.png"
              title="Dilengkapi dengan model Computer Vision"
              description="

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu lacus non nibh accumsan cursus. Donec interdum semper libero nec lacinia. Pellentesque lobortis vitae eros a scelerisque. Nulla varius ullamcorper est id dignissim. Suspendisse in elit ac mauris dapibus tincidunt luctus nec tellus. Nunc accumsan magna a dui finibus, a tincidunt mi viverra. Nunc ex quam, tincidunt in eros vitae, lacinia faucibus nisl. Sed ac eros nisl. Phasellus faucibus iaculis pharetra. Etiam id lobortis dui.

Etiam rhoncus, urna et posuere viverra, purus mauris bibendum erat, id suscipit mi nisi a nibh. Aenean et mi felis. Duis id odio sodales, viverra augue in, vulputate felis. Phasellus vestibulum mattis hendrerit. Nunc et mollis ante. Suspendisse potenti. Aliquam erat volutpat. Aenean interdum dignissim gravida. Nunc at orci pellentesque, egestas justo non, sodales enim. Praesent malesuada justo et massa dignissim, eget malesuada eros vehicula. Etiam convallis ex id turpis finibus tempus. Nullam nisi lectus, ornare tincidunt risus sed, ultricies maximus arcu. Phasellus et leo at ante mattis fermentum. "
          />
        </div>
      </div>


      <!-- RightSection -->
      <div
          class="right-section hidden md:block w-full md:w-2/5 px-8 py-8 sticky top-16"
      >
        <div class="flex flex-col items-center">
          <h1 class="funnel-display-bold text-5xl text-right">
            Status monitor kemacetan
          </h1>
          <Monitor
              :image="monitorData?.image || '/gwk.jpg'"
              :trafficValue="monitorData?.value || 0"
              :trafficDate="monitorData?.taken_at || 'Loading...'"
              :motor="monitorData?.motorcycle_count || 0"
              :mobil="monitorData?.car_count || 0"
              :truck-kecil="monitorData?.smalltruck_count || 0"
              :kendaraan-besar="monitorData?.bigvehicle_count || 0"
          />
        </div>
      </div>

      <!-- Button for Mobile -->
      <button
          class="fixed bottom-4 right-4 z-50 p-4 bg-yellow-500 text-black rounded-full shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 block md:hidden"
          @click="showRightSection = true"
      >
        Monitor Kemacetan
      </button>

      <transition name="fade">
        <!-- Modal for mobile -->
        <div
            v-if="showRightSection"
            class="modal fixed inset-0 z-50  p-4 flex flex-col overflow-auto"
        >
          <button
              class="self-end mb-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              @click="showRightSection = false"
          >
            Tutup
          </button>
          <div class="flex flex-col items-center">
            <h1 class="funnel-display-bold text-3xl text-center mb-4">
              Status monitor kemacetan
            </h1>
            <Monitor
                :image="monitorData?.image || '/gwk.jpg'"
                :trafficValue="monitorData?.value || 0"
                :trafficDate="monitorData?.taken_at || 'Loading...'"
                :motor="monitorData?.motorcycle_count || 0"
                :mobil="monitorData?.car_count || 0"
                :truck-kecil="monitorData?.smalltruck_count || 0"
                :kendaraan-besar="monitorData?.bigvehicle_count || 0"
            />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  min-height: calc(100vh - 64px);
}

.left-section {
  border-right: 1px solid black;
}

.right-section{
  height: fit-content;
}

.modal {
  background-color: #49CAAE;
}

.funnel-display-bold {
  font-family: "Funnel Display", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}

@keyframes colorFade {
  0%, 10% {
    color: black;
  }
  /* Teks hitam bertahan cukup lama */
  15%, 25% {
    color: white;
  }
  /* Gradasi menjadi putih */
  30%, 40% {
    color: black;
  }
  /* Kembali menjadi hitam */
}

/* Keyframes untuk pergantian teks */
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

/* Styling efek gradasi dan pergantian teks */
.changing-text::after {
  content: "kemacetan"; /* Teks default */
  display: inline-block;
  animation: textChange 12s infinite steps(1, end), /* Pergantian teks */ colorFade 3s infinite ease-in-out; /* Animasi gradasi warna */
}

.changing-text2::after {
  content: "kemacetan"; /* Teks default */
  display: inline-block;
  animation: textChange2 12s infinite steps(1, end), /* Pergantian teks */ colorFade 3s infinite ease-in-out; /* Animasi gradasi warna */
}

.changing-text3::after {
  content: "kemacetan"; /* Teks default */
  display: inline-block;
  animation: textChange3 12s infinite steps(1, end), /* Pergantian teks */ colorFade 3s infinite ease-in-out; /* Animasi gradasi warna */
}

/* Transisi untuk modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px); /* Modal muncul dari bawah */
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0); /* Modal kembali ke posisi normal */
}
</style>

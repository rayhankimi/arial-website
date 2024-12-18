<script setup lang="ts">
import Card from "~/components/Card.vue";
</script>

<template>
  <div class="container">
    <div class="flex flex-col-reverse md:flex-row">
      <!-- LeftSection -->
      <div class="left-section w-full md:w-3/5 px-5 py-8 md:px-8">
        <h1 class="text-5xl funnel-display-bold text-right px-8 py-4"> Arial,</h1>
        <div class="flex flex-row flex-wrap items-center px-4 md:px-8">
          <h1 class="text-lg sm:text-3xl md:text-2xl lg:text-3xl funnel-display-bold px-0.5">
            Merupakan solusi teknis
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
      <div class="right-section w-full md:w-2/5 p-8 md:px-8">
        <Monitor
            image="/gwk.jpg"
            title="Hello World"
            description="This is monitor component"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  min-height: calc(100vh - 64px);
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
</style>

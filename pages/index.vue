<script setup lang="ts">
import Card from "~/components/Card.vue";
</script>

<template>
  <div class="container">
    <!-- Judul besar -->
    <h1 class="text-5xl funnel-display-bold text-right py-4">
      Arial,
    </h1>

    <!-- Teks animasi -->
    <div class="message flex flex-row flex-wrap items-center">
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

    <!-- Kartu / Card -->
    <div class="space-y-8 py-4">
      <Card
          image="/traffic.jpg"
          title="Terjebak macet karena lampu tak kunjung hijau?"
          description="Apakah anda pernah terjebak macet namun lampu lalu lintas tidak kunjung berubah?

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu lacus non nibh accumsan cursus. ..."
      />

      <Card
          image="/img.png"
          title="Dilengkapi dengan model Computer Vision"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu lacus non nibh accumsan cursus. ..."
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;          /* Supaya lebar konten tidak terlalu melar */
  margin: 0 auto;             /* Center konten secara horizontal */
  padding: 2rem;             /* Ruang dalam agar teks tidak mepet tepi */
  min-height: calc(100vh - 64px);
}

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


<script setup lang="ts">
</script>

<template>
  <div>
    <div class="pt-[84px] md:pt-[72px] min-h-screen sm:h-screen box-border">
      <!--- Flex main container ---->
      <div class="flex flex-col w-full h-full">
        <!--- Upper ---->
        <div class="flex flex-col md:flex-row h-[65%]">
          <!--        First Section (35% + 35%)        -->
          <div
              class="bg-[#71BBB2] order-2 md:order-1 w-full md:w-[60%] border-2 p-3 md:border-1 border-[#497D74] md:rounded-e-lg flex flex-col md:flex-row items-center justify-center md:justify-left">
            <!--        First Section, First Content        -->
            <div class="w-full md:w-[40%]  flex place-items-start justify-center">
              <div class="flex flex-col p-3">
                <figure class="w-full h-[200px] md:h-[250px] lg:h-[300px] border-black mx-auto overflow-hidden">
                  <img
                      src="/team.jpg"
                      alt="thumbnail"
                      class="w-full h-full object-cover"
                  />
                </figure>
              </div>
            </div> <!-- End of First Section, First Content -->

            <!--        First Section, Second Content       -->
            <div class="w-full md:w-[60%] items-left justify-center md:justify-left">
              <div class="flex flex-col">
                <h1 class="text-center text-2xl md:text-left md:text-3xl  font-semibold "> Tentang Kami</h1>
                <p class="text-lg">
                  Kami adalah tim Capstone Project beranggotakan 3 orang mahasiswa Teknik Elektro Universitas Udayana
                  yang
                  berusaha mencari solusi atas kemacetan yang terjadi di Pulau Bali.</p>
                <p class="text-lg">
                  Capstone project merupakan tugas akhir sebagai penentu kelulusan mahasiswa Teknik Elektro Universitas
                  Udayana dimana
                  mahasiswa diharapkan dapat menyelesaikan sebuah masalah melalui proyek kolaboratif
                </p>
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
        </div> <!-- End of Upper -->
        <!--        Lower Part        -->
        <div class="flex flex-col md:flex-row h-[35%]">

          <!--        Third Section        -->
          <div
              class="order-3 md:order-none w-full md:w-[35%] flex place-items-start justify-start">
            <div class="flex flex-col p-6">
              <h1 class="text-3xl font-semibold "> Jonathan Marthen M. </h1>
              <div class="flex flex-col p-3">
                <figure class="w-full h-[200px] md:h-[250px] lg:h-[300px] border-black mx-auto overflow-hidden">
                  <img
                      src="/men.jpg"
                      alt="thumbnail"
                      class="w-full h-full object-cover"
                  />
                </figure>
              </div>
              <p class="text-md xl:text-lg mb-3">
                Merupakan mahasiswa Teknik Elektro di Universitas Udayana dengan jurusan Elektronika yang termotivasi
                dan memiliki passion besar pada teknologi elektronika dan robotika. Menguasai pemrograman C++ dan Python
                serta antusias untuk menerapkan pengetahuan teoretis ke tantangan praktis, unggul dalam memecahkan
                masalah, dan berkontribusi pada solusi inovatif. Aktif mencari peluang untuk mendapatkan pengalaman
                langsung dan memperluas keahlian dalam proyek ini, terkhususnya pada sistem kontrol (Elektronika dan
                sistem kontrol lampu merah)
              </p>
            </div>
          </div> <!-- End of Third Section -->

          <!--        Fourth Section        -->
          <div class="order-4 md:order-none w-full md:w-[35%] flex place-items-start justify-start">
            <div class="flex flex-col p-6">
              <h1 class="text-3xl font-semibold"> Rayhan Kimi Nabiel A. </h1>
              <div class="flex flex-col p-3">
                <figure class="w-full h-[200px] md:h-[250px] lg:h-[300px] border-black mx-auto overflow-hidden">
                  <img
                      src="/men.jpg"
                      alt="thumbnail"
                      class="w-full h-full object-cover"
                  />
                </figure>
              </div>
              <p class="text-md xl:text-lg mb-3">
                Merupakan seorang mahasiswa Teknik Elektro konsentrasi Elektronika yang penuh semangat dan berdedikasi,
                dengan keahlian khusus di Python dan C untuk firmware engineering, serta fokus yang kuat pada Internet
                of Things dan sistem mikrokontroler. Di luar keahlian utamanya, Rayhan juga mahir menggunakan berbagai
                development framework seperti Django, FastAPI, dan Vue.js. Hal ini memungkinkannya untuk menghadapi
                masalah dengan pendekatan yang holistik dan inovatif pada alat ini terkhususnya di bagian perancangan
                sistem observasi (Web API serta Design Web dan model Computer Vision pada Raspberry Pi).
              </p>

            </div>
          </div> <!-- End of Fourth Section -->

          <!--        Fifth Section        -->
          <div class="order-5 md:order-none w-full md:w-[30%] flex place-items-start justify-center">
            <div class="flex flex-col p-6">
              <h1 class="text-3xl font-semibold"> I Putu Gede Pringga A.P </h1>
              <div class="flex flex-col p-3">
                <figure class="w-full h-[200px] md:h-[250px] lg:h-[300px] border-black mx-auto overflow-hidden">
                  <img
                      src="/men.jpg"
                      alt="thumbnail"
                      class="w-full h-full object-cover"
                  />
                </figure>
              </div>
              <p class="text-md xl:text-lg mb-3">
                Merupakan mahasiswa Teknik Elektro dengan peminatan Energi di Universitas Udayana. Di sela-sela kuliah
                bekerja sebagai teknisi lepas yang ahli dalam perawatan alat dan sistem tenaga listrik. Pringga
                merupakan orang yang berdedikasi dan selalu penasaran untuk belajar hal-hal baru. Dengan pendekatan
                langsung dan komitmen untuk menyelesaikan tugas dengan efisien, Pringga berusaha memberikan solusi
                praktis dan andal untuk bagian power dan electrical dari alat ini (Perhitungan serta rangkaian listrik
                serta sumber daya cadangan beserta energi baru terbarukan).
              </p>

            </div>
          </div> <!-- End of Fifth Section -->
        </div> <!-- End of Lower Part -->
      </div>
    </div>
  </div>
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


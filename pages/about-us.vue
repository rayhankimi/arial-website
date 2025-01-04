<script setup lang="ts">
</script>

<template>
  <div class="container ">
    <h1>About Us</h1>
    <Card
        image="/men.jpg"
        title="I Putu Gede Pringga Aditya Pratama"
        description="
Merupakan mahasiswa Teknik Elektro dengan peminatan Energi di Universitas Udayana. Di sela-sela kuliah bekerja sebagai teknisi lepas yang ahli dalam perawatan alat dan sistem tenaga listrik. Pringga merupakan orang yang berdedikasi dan selalu penasaran untuk belajar hal-hal baru. Dengan pendekatan langsung dan komitmen untuk menyelesaikan tugas dengan efisien, Pringga berusaha memberikan solusi praktis dan andal untuk bagian power dan electrical dari alat ini (Perhitungan serta rangkaian listrik serta sumber daya cadangan beserta energi baru terbarukan).
"
    />
    <Card
        image="/men.jpg"
        title="Rayhan Kimi Nabiel Athallah"
        description="
Merupakan seorang mahasiswa Teknik Elektro konsentrasi Elektronika yang penuh semangat dan berdedikasi, dengan keahlian khusus di Python dan C untuk firmware engineering, serta fokus yang kuat pada Internet of Things dan sistem mikrokontroler. Di luar keahlian utamanya, Rayhan juga mahir menggunakan berbagai development framework seperti Django, FastAPI, dan Vue.js. Hal ini memungkinkannya untuk menghadapi masalah dengan pendekatan yang holistik dan inovatif pada alat ini terkhususnya di bagian perancangan sistem observasi (Web API serta Design Web dan model Computer Vision pada Raspberry Pi).
"
    />
    <Card
        image="/men.jpg"
        title="Jonathan Marthen Mamboran"
        description="
Merupakan mahasiswa Teknik Elektro di Universitas Udayana dengan jurusan Elektronika yang termotivasi dan memiliki passion besar pada teknologi elektronika dan robotika. Menguasai pemrograman C++ dan Python serta antusias untuk menerapkan pengetahuan teoretis ke tantangan praktis, unggul dalam memecahkan masalah, dan berkontribusi pada solusi inovatif. Aktif mencari peluang untuk mendapatkan pengalaman langsung dan memperluas keahlian dalam proyek ini, terkhususnya pada sistem kontrol (Elektronika dan sistem kontrol lampu merah)
"
    />
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px; /* Supaya lebar konten tidak terlalu melar */
  margin: 0 auto; /* Center konten secara horizontal */
  padding: 2rem; /* Ruang dalam agar teks tidak mepet tepi */
  min-height: calc(100vh - 64px);
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  line-height: 1.5;
}
</style>


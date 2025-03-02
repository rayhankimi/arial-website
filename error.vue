<template>
  <NuxtLayout name="404">
    <div class="flex flex-col md:flex-row justify-center mt-6">
      <div
          data-aos="fade-left"
          class="flex flex-col w-full md:w-2/5 p-4 my-4 space-y-4 md:justify-center bg-red-400 p-5 text-black border-2 border-black
      shadow-[4px_4px_0px_1px_rgba(0,_0,_0,_0.6)]  transition-all  max-w-md"
      >
        <div class="flex flex-col md:flex-row">
          <div class="flex flex-col">
            <h3 class="text-lg md:text-3xl font-semibold my-3">
              ERROR! Page yang dituju belum ada!
            </h3>
            <div class="flex flex-col">
              <p class="text-lg md:text-2xl">Kode : 404 Page Not Found</p>
              <p class="text-md md:text-lg mb-6">
                Mungkin antara belum dibuat atau anda mengetikkan URL yang salah
              </p>
              <a href="/" class="rounded-md bg-black inline-block max-w-max">
              <span
                  class="inline-flex items-center gap-2 -translate-x-1 -translate-y-1
                rounded-md border-2 border-black text-white bg-red-500
                px-4 py-2 text-md md:text-xl hover:-translate-y-2
                active:translate-x-0 active:translate-y-0 transition-all"
              >
                <span>Kembali</span>
              </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>

</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.button {
  padding: 4px 6px;
  margin: 10px 0px;
  background: black;
  color: white;
}
</style>
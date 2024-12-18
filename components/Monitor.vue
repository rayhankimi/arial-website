<script setup >
defineProps({
  title: String,
  description: String,
  image: String,
})
</script>

<template>
  <div class="w-full border-2 border-black rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-yellow-200 mx-auto my-4">
    <div class="block">
      <div class="w-full h-full">
        <figure class="w-full h-64 border-black border-b-2">
          <img
              :src="image"
              alt="thumbnail"
              class="w-full h-full object-cover"
          />
        </figure>
        <div class="px-6 py-5 text-left h-full">
          <h1 class="text-[32px] mb-4 text-center text-semibold">{{ title }}</h1>
          <p class="text-sm mb-4"> {{ description}} </p>
          <strong>Read More</strong>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>
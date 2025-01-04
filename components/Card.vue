<script setup >
  const props = defineProps({
    title: String,
    description: String,
    image: String,
    indexPage: Boolean,
  })

  const cardSize = computed(() => {
    return props.indexPage
        ? `w-full border-2 border-black rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-[#DAF5F0] mx-auto my-4`
        : `w-3/5 border-2 border-black rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-[#DAF5F0] my-4`;
  });
</script>

<template>
  <div
      :class="cardSize">
    <div class="block">
      <div >
        <figure
            class="w-full h-72 border-black border-b-2`">
          <img
              :src="image"
              alt="thumbnail"
              class="w-full h-full object-cover"
          />
        </figure>
        <div class="px-6 py-5 text-left h-full">
          <h1 class="text-[32px] mb-4 font-semibold">{{ title }}</h1>
          <p class="text-md mb-4"> {{ description}} </p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
</style>
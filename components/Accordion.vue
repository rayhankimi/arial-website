<template>
  <div :class="['border-2 rounded-lg shadow-md', customClass]">
    <!-- Header Accordion -->
    <div
        class="flex items-center justify-between p-4 cursor-pointer"
        @click="toggleAccordion"
    >
      <div class="flex items-center space-x-4">
        <!-- Status Todo -->
        <span
            :class="statusClass"
            class="text-lg font-bold"
        >
          {{ isCompleted ? "Selesai" : "Belum Selesai" }}
        </span>
        <!-- Title -->
        <h2 class="text-lg font-bold">{{ title }}</h2>
      </div>
      <!-- Sisa Waktu -->
      <span
          class="text-lg font-bold"
          :class="deadlineClass"
      >
        (Sisa waktu: {{ deadlineText }} hari)
      </span>
      <span
          class="text-2xl font-bold transition-transform duration-300"
          :class="{ 'rotate-180': isOpen }"
      >
        ▼
      </span>
    </div>

    <!-- Konten Accordion -->
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div
          v-show="isOpen"
          ref="content"
          class="overflow-hidden bg-white border-t border-black"
      >
        <div class="p-4">
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>


<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
  deadlineText: {
    type: String,
    required: true,
  },
  statusClass: {
    type: String,
    required: true,
  },
  deadlineClass: {
    type: String,
    required: true,
  },
  customClass: {
    type: String,
    default: "",
  },
});

const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
};

const beforeEnter = (el) => (el.style.height = "0");
const enter = (el) => {
  el.style.transition = "height 0.3s ease";
  el.style.height = el.scrollHeight + "px";
};
const leave = (el) => {
  el.style.transition = "height 0.3s ease";
  el.style.height = "0";
};
</script>

<template>
  <div class="bg-white rounded-lg shadow">
    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-300">
      <slot name="header">
        <h2 v-if="title" class="text-2xl font-medium">{{ title }}</h2>
      </slot>

      <button
        type="button"
        @click="close"
        class="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
        data-modal-hide="default-modal">
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
        <span class="sr-only">Close modal</span>
      </button>
    </div>

    <div v-if="$slots.body" class="p-4">
      <slot name="body" />
    </div>

    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-300">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useModal } from "@/stores/modal";

  const store = useModal();

  defineProps<{
    title?: string;
  }>();

  function close() {
    store.close();
  }
</script>
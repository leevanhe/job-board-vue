<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script setup lang="ts">
  import { computed } from "vue";

  type Type = 'link' | 'link-danger' | 'button' | 'button-danger';

  const props = withDefaults(defineProps<{
    type?: Type,
  }>(), {
    type: 'button',
  });

  const classes = computed(() => {
    if (props.type === 'button') {
      return 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5';
    } else if (props.type === 'button-danger') {
      return 'text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5';
    } else if (props.type === 'link')  {
      return 'text-white';
    } else {
      return 'text-red-500';
    }
  })
</script>

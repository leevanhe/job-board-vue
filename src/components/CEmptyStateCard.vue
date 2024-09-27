<template>
  <div class="border border-dashed border-gray-500 rounded-lg text-center mt-4 py-6">
    <p>{{ title }}</p>
    <slot/>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string;
  }>();
</script>
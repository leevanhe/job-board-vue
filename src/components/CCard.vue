<template>
  <component :is="component" v-bind="bindings" class="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow" :class="{ 'hover:bg-gray-100': link }">
    <slot />
  </component>
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import { type RouteLocationRaw, RouterLink } from "vue-router";

  const props = defineProps<{
    link?: RouteLocationRaw;
  }>();

  const component = computed(() => (props.link ? RouterLink : "div"));

  const bindings = computed(() => ({
    to: props.link
  }));
</script>
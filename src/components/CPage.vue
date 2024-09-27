<template>
  <div @scroll="onScroll" class="h-screen bg-slate-100 overflow-scroll">
    <CNavBar />

    <div class="mx-auto max-w-screen-xl py-8 mt-14">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import CNavBar from "@/components/CNavBar.vue";

  const emit = defineEmits<{ (e: 'scrolledToBottom') }>();

  function onScroll ($event: Event) {
    if ($event.target && $event.target.scrollTop + $event.target.clientHeight >= $event.target.scrollHeight) {
      emit('scrolledToBottom');
    }
  }
</script>
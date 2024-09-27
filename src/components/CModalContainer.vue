<template>
  <div
    @click="close"
    v-if="modal.isOpen"
    class="fixed top-0 right-0 left-0 bottom-0 z-50 bg-black/30 overflow-y-auto overflow-x-hidden flex justify-center items-center w-full max-h-full">
    <div @click.stop class="relative p-4 w-full max-w-2xl max-h-full">
      <component :is="modal.component" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useModal } from "@/stores/modal";

  const modal = useModal();

  function close() {
    modal.close();
  }
</script>
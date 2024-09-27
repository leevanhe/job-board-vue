<template>
  <CModalContainer/>
  <RouterView />
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite'
  import { RouterView } from 'vue-router'
  import CModalContainer from '@/components/CModalContainer.vue'

  onMounted(() => {
    initFlowbite();
  })
</script>
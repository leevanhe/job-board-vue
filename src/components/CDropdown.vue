<template>
  <div v-click-outside="close">
    <CButton @click="toggle">
      <span class="flex items-center">
        {{ title }}
        <Arrow/>
      </span>
    </CButton>

    <div v-show="panelState" class="bg-white rounded-md px-5 py-2.5 block fixed mt-2 shadow">
      <div class="flex flex-col items-start justify-start not-last:*:mb-2">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import CButton from "@/components/CButton.vue";
  import Arrow from "@/components/icons/arrow.vue";

  defineProps<{
    title: string;
  }>();

  const panelState = ref(false);

  const toggle = () => {
    panelState.value = !panelState.value;
  };

  function close() {
    panelState.value = false;
  }
</script>
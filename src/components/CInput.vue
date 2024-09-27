<template>
  <div>
    <input
      :type="type"
      v-model="model"
      v-bind="$attrs"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
      :class="{'border-red-500': validation.$error}"/>
    <span v-if="validation.$error" class="text-red-500 text-xs">{{ validation.$errors[0].$message }}</span>
  </div>
</template>

<script setup lang="ts">
  type InputType = "text" | "password" | "number" | "email";

  withDefaults(
    defineProps<{
      type?: InputType;
      validation?: any;
    }>(),
    {
      type: "text"
    }
  );

  const model = defineModel();
</script>

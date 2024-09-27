<template>
  <div class="flex justify-between">
    <h1>{{ job.title }}</h1>
    <h3>{{ formatAmount(job.salary) }}</h3>
  </div>

  <div class="flex justify-between">
    <div class="flex">
      <p>{{ job.employer.company_name }}</p>
      <p class="ml-2">{{ job.location }}</p>
    </div>

    <div>
      <CTag>{{ job.experience }}</CTag>
      <CTag class="ml-3">{{ job.category }}</CTag>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { formatAmount } from "@/utils/format";
  import type Job from "@/models/Job";
  import CTag from "@/components/CTag.vue";

  defineProps<{
    job: Job;
  }>();
</script>
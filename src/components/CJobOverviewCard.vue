<template>
  <CCard :link="{ name: 'job-overview', params: { jobId: job.id } }">
    <CJobOverviewContent :job/>
  </CCard>
</template>

<script setup lang="ts">
  import CCard from "@/components/CCard.vue";
  import type Job from "@/models/Job";
  import { formatAmount } from "@/utils/format";
  import CTag from "@/components/CTag.vue";
  import CJobOverviewContent from "@/components/CJobOverviewContent.vue";

  defineProps<{
    job: Job;
  }>();
</script>

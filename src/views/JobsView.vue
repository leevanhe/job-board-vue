<template>
  <CPage @scrolledToBottom="fetchJobs">
    <template v-if="jobStore.jobs.length > 0">
      <CJobOverviewCard v-for="job in jobStore.jobs" :key="job.id" :job class="not-last:mb-4"/>
    </template>

    <CEmptyStateCard v-else title="There are no jobs!"/>
  </CPage>
</template>

<script setup lang="ts">
  import CPage from "@/components/CPage.vue";
  import { useJob } from "@/stores/jobs";
  import CJobOverviewCard from "@/components/CJobOverviewCard.vue";
  import CEmptyStateCard from "@/components/CEmptyStateCard.vue";

  const jobStore = useJob();

  function fetchJobs() {
    jobStore.fetchJobs()
  }
</script>
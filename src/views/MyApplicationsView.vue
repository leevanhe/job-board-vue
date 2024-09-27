<template>
  <CPage>
    <template v-if="myApplicationsStore.applications.length > 0">
      <CMyApplicationCard v-for="application in myApplicationsStore.applications" :key="application.id" :application class="not-last:mb-4"/>
    </template>

    <CEmptyStateCard v-else title="No applications!">
      <p>Go find some jobs <RouterLink :to="{ name: 'jobs-overview' }">Here!</RouterLink></p>
    </CEmptyStateCard>
  </CPage>
</template>

<script setup lang="ts">
  import CPage from "@/components/CPage.vue";
  import { useMyApplications } from "@/stores/myApplications";
  import CCard from "@/components/CCard.vue";
  import CJobOverviewContent from "@/components/CJobOverviewContent.vue";
  import CEmptyStateCard from "@/components/CEmptyStateCard.vue";
  import CMyApplicationCard from "@/components/CMyApplicationCard.vue";

  const myApplicationsStore = useMyApplications();
</script>
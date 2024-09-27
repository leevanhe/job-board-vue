<template>
  <CPage>
    <CJobDetailCard :job/>

    <h1 class="mt-4 mb-2 text-xl font-bold">Applications</h1>

    <CCard>
      <template v-if="job.applications && job.applications.length > 0">
        <div v-for="application in job.applications" :key="application.id" class="flex justify-between not-last:pb-4">
          <div>
            <p>{{ application.user.name }}</p>
            <p class="text-slate-400">{{ formatDistanceToNow(new Date(application.created_at), { addSuffix: true}) }}</p>
          </div>
          <p>{{ formatAmount(application.expected_salary) }}</p>
        </div>
      </template>

      <template v-else>
        <p>There are no applications!</p>
      </template>
    </CCard>
  </CPage>
</template>

<script setup lang="ts">
  import CPage from "@/components/CPage.vue";
  import { useJob } from "@/stores/jobs";
  import CJobDetailCard from "@/components/CJobDetailCard.vue";
  import CCard from "@/components/CCard.vue";
  import { formatAmount } from "@/utils/format";
  import { formatDistanceToNow } from "date-fns";

  const job = useJob().getCurrent;
</script>
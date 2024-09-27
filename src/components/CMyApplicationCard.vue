<template>
  <CCard>
    <CJobOverviewContent :job />

    <div class="flex justify-between mt-2">
      <div>
        <p>Applied: {{ formatDistanceToNow(new Date(application.created_at), { addSuffix: true}) }}</p>
        <p>Other applications: {{ job.application_count }}</p>
        <p>Your asking salary: {{ application.expected_salary }}</p>
        <p>average asking salary: {{ job.applications_avg_expected_salary }}</p>
      </div>

      <div class="flex items-end">
        <CButton type="button-danger">Delete</CButton>
      </div>
    </div>
  </CCard>
</template>

<script setup lang="ts">
  import CCard from "@/components/CCard.vue";
  import CJobOverviewContent from "@/components/CJobOverviewContent.vue";
  import type Application from "@/models/Application";
  import { formatDistanceToNow } from "date-fns";
  import { computed } from "vue";
  import { present } from "@/utils/typescript";
  import CButton from "@/components/CButton.vue";

  const props = defineProps<{
    application: Application;
  }>();

  const job = computed(() => present(props.application.job))
</script>
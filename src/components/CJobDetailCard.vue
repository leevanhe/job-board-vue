<template>
  <CCard>
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
        <CTag>{{ job.category }}</CTag>
      </div>
    </div>

    <div class="mt-4">
      {{ job.description }}
    </div>

    <CButton @click="apply" v-if="canApply" class="mt-2">Apply</CButton>
  </CCard>
</template>

<script setup lang="ts">
  import CCard from "@/components/CCard.vue";
  import type Job from "@/models/Job";
  import { formatAmount } from "@/utils/format";
  import CTag from "@/components/CTag.vue";
  import CButton from "@/components/CButton.vue";
  import { useAuth } from "@/stores/auth";
  import { useModal } from "@/stores/modal";
  import ApplyModal from "@/modals/ApplyModal.vue";
  import { computed } from "vue";
  import { present } from "@/utils/typescript";

  const authStore = useAuth();
  const modalStore = useModal();

  const props = defineProps<{
    job: Job;
  }>();

  const canApply = computed(() => !props.job.wo_applications?.some((a) => a.user.id === present(authStore.user).id))

  function apply() {
    modalStore.open(ApplyModal);
  }
</script>
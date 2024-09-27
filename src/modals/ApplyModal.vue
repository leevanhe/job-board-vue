<template>
  <form @submit.prevent="submit">
    <CModal title="Login">
      <template #body>
        <div>
          <label for="salary">Expected salary</label>
          <CInput v-model="formData.salary" name="salary" type="number" placeholder="salary" :validation="v$.salary" />
        </div>

        <div class="mt-4">
          <label for="cv">Upload cv</label>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="cv">Upload file</label>
          <input @change="onFileChanged($event)" aria-describedby="cv_help" id="cv" type="file" accept="image/png, image/jpg, application/pdf"
                 class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none">
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="cv_help">PNG, JPG or PDF (MAX. 1MB).</p>
          <span v-if="v$.cv.$error" class="text-red-500 text-xs">{{ v$.cv.$errors[0].$message }}</span>
        </div>
      </template>

      <template #footer>
        <CButton>Submit</CButton>
      </template>
    </CModal>
  </form>
</template>

<script setup lang="ts">
  import { computed, reactive } from "vue";
  import { useVuelidate } from "@vuelidate/core";
  import { between, required } from "@vuelidate/validators";
  import CModal from "@/components/CModal.vue";
  import CInput from "@/components/CInput.vue";
  import CButton from "@/components/CButton.vue";
  import { useModal } from "@/stores/modal";
  import { useJob } from "@/stores/jobs";
  import { present } from "@/utils/typescript";

  const jobStore = useJob();
  const modalStore = useModal();

  const formData = reactive({
    salary: jobStore.current?.salary,
    cv: null,
  });

  const rules = computed(() => {
    return {
      salary: {
        required,
        between: between(present(jobStore.current?.salary) - 1000, present(jobStore.current?.salary) + 1000)
      },
      cv: {
        required,
      }
    };
  });

  const v$ = useVuelidate(rules, formData);

  function onFileChanged($event: Event) {
    const target = $event.target as HTMLInputElement;
    if (target && target.files) {
      formData.cv = target.files[0];
    }
  }

  async function submit() {
    const result = await v$.value.$validate();
    if (result) {
      await jobStore.apply(formData.salary, formData.cv);
      modalStore.close();
    }
  }
</script>
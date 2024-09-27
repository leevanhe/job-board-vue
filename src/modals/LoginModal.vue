<template>
  <form @submit.prevent="submit">
    <CModal title="Login">
      <template #body>
        <div>
          <label for="email">Email</label>
          <CInput v-model="formData.email" name="name" type="email" placeholder="e-mail" :validation="v$.email" />
        </div>

        <div class="mt-4">
          <label for="password">Password</label>
          <CInput v-model="formData.password" name="password" type="password" placeholder="password" :validation="v$.password" />
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
  import { email, minLength, required } from "@vuelidate/validators";
  import CModal from "@/components/CModal.vue";
  import CInput from "@/components/CInput.vue";
  import CButton from "@/components/CButton.vue";
  import { useAuth } from "@/stores/auth";
  import { useModal } from "@/stores/modal";

  const auth = useAuth();
  const modal = useModal();

  const formData = reactive({
    email: null,
    password: null
  });

  const rules = computed(() => {
    return {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    };
  });

  const v$ = useVuelidate(rules, formData);

  async function submit() {
    const result = await v$.value.$validate();
    if (result) {
      await auth.authenticate(formData.email, formData.password);
      modal.close();
    }
  }
</script>
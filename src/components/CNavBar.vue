<template>
  <nav class="border-gray-200 bg-gray-900 fixed w-full top-0 start-0">
    <div class="max-w-screen-xl flex flex-wrap items-center  justify-between mx-auto p-4">
      <RouterLink :to="{ name: 'jobs-overview' }" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="@/assets/icon.png" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">JobPicker</span>
      </RouterLink>

      <button
        data-collapse-toggle="navbar-default" type="button" aria-controls="navbar-default" aria-expanded="false"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>

      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-900 border-gray-700">
          <li class="flex items-center">
            <RouterLink :to="{ name: 'jobs-overview' }" aria-current="page" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
              Jobs
            </RouterLink>
          </li>

          <li v-if="authStore.user">
            <CDropdown :title="authStore.user.name">
              <RouterLink :to="{ name: 'my-applications' }">My applications</RouterLink>
              <CButton type="link-danger" @click="logout">Logout</CButton>
            </CDropdown>
          </li>
          <li v-if="!authStore.user">
            <CButton type="link" @click="login">Login</CButton>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { useModal } from "@/stores/modal";
  import { useAuth } from "@/stores/auth";
  import LoginModal from "@/modals/LoginModal.vue";
  import CButton from "@/components/CButton.vue";
  import CDropdown from "@/components/CDropdown.vue";

  const modalStore = useModal();
  const authStore = useAuth();

  function login() {
    modalStore.open(LoginModal);
  }

  function logout() {
    authStore.logout();
  }
</script>
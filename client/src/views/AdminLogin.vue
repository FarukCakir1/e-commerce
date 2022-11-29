<script setup>
import { ref } from 'vue';
import { useAdminStore } from '../store/Admin';

  const store = useAdminStore()

  const loginData = ref({
    admin_name: null,
    admin_password: null
  })

  const handleLogin = () => {
    store.handleLogin(loginData)
  }

</script>

<template>
  <div
    class="w-screen h-screen bg-admin-white flex flex-col justify-start items-center pt-20"
  >
    <h1 class="text-3xl font-medium my-5 text-gray-600">ADMİN GİRİŞİ</h1>
    <div
      class="w-2/6 h-4/6 bg-admin-dark shadow-md rounded-md flex flex-col justify-start pt-8 items-start gap-y-9 px-8"
    >
      <label for="admin_name" class="text-admin-light-gray w-full">
        Kullanıcı Adı
        <input
          v-model="loginData.admin_name"
          type="text"
          name="admin_name"
          class="w-full py-3 text-admin-dark px-3 mt-3 text-lg rounded-sm outline-none"
        />
      </label>
      <label for="admin_name" class="text-admin-light-gray w-full">
        Şifre
        <input
          v-model="loginData.admin_password"
          type="password"
          name="admin_name"
          class="w-full py-3 text-admin-dark px-3 mt-3 text-lg rounded-sm outline-none"
        />
      </label>

      <button @click="handleLogin" class="py-4 mt-5 w-full rounded-sm bg-admin-light-gray hover:bg-admin-gray hover:text-admin-white">
        Giriş Yap
      </button>
    </div>
  </div>
</template>

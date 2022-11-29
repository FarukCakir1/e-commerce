<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/User";

const store = useUserStore();

const newUserData = ref({
  full_name: null,
  e_mail: null,
  password: null,
  phone_number: null,
  favorites: []
});
</script>

<template>
  <div
    class="w-full h-full py-16 flex flex-col justify-center items-center bg-gray-50"
  >
    <h1 class="text-3xl">Merhaba,</h1>
    <p>Shopper'a üye olarak kaliteli ürünlere ulaşabilirsin</p>
    <div
      class="w-3/12 h-5/6 bg-white flex flex-col border shadow-md mt-4 py-12 px-12 gap-y-5"
    >
      <label for="fullname" class="flex flex-col gap-y-2">
        <span>Ad Soyad</span>
        <input
          v-model="newUserData.full_name"
          type="text"
          id="fullname"
          class="w-full bg-gray-100 outline-none py-2 rounded-md text-lg px-2 border border-gray-300"
        />
      </label>
      <label for="email" class="flex flex-col gap-y-2">
        <span>E-Mail</span>
        <input
          v-model="newUserData.e_mail"
          type="text"
          id="email"
          class="w-full bg-gray-100 outline-none py-2 rounded-md text-lg px-2 border border-gray-300"
        />
      </label>
      <label for="password" class="flex flex-col gap-y-2">
        <span>Şifre</span>
        <input
          v-model="newUserData.password"
          type="password"
          id="password"
          class="w-full bg-gray-100 outline-none py-2 rounded-md text-lg px-2 border border-gray-300"
        />
      </label>
      <label for="password" class="flex flex-col gap-y-2">
        <span>Telefon Numarası</span>
        <input
          v-model="newUserData.phone_number"
          type="text"
          id="password"
          class="w-full bg-gray-100 outline-none py-2 rounded-md text-lg px-2 border border-gray-300"
        />
      </label>

      <button @click="store.registerUser(newUserData)" class="w-full py-3 bg-blue-500 rounded-md mt-16 text-white">
        Üye Ol
      </button>
    </div>
  </div>
</template>

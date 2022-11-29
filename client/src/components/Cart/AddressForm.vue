<script setup>

import {ref} from "vue"
import { useUserStore } from "../../store/User";
const userStore = useUserStore()
const emit = defineEmits()


const address = ref({
    customer_id: userStore._currentUser._id,
    name: null,
    lastname: null,
    phone:null,
    city:null,
    district:null,
    neighbour:null,
    fullAddress:null
})


</script>
<template>
  <div class="w-full flex flex-col gap-y-5 mt-5 py-8">
    <div class="w-full flex justify-between">
        <label for="name" class="w-5/12 flex flex-col">
            <span>İsim*</span>
            <input v-model="address.name" type="text" id="name" class="w-full bg-slate-50 border py-1 pl-2 outline-none rounded-md focus:border-green-400">
        </label>
        <label for="surname" class="w-5/12 flex flex-col">
            <span>Soyisim*</span>
            <input v-model="address.lastname" type="text" id="surname" class="w-full bg-slate-50 border py-1 pl-2 outline-none rounded-md focus:border-green-400">
        </label>
    </div>
    <div class="w-full flex justify-between">
        <label for="phonenum" class="w-5/12 flex flex-col">
            <span>Telefon*</span>
            <input v-model="address.phone" type="text" id="phonenum" class="w-full bg-slate-50 border py-1 pl-2 outline-none rounded-md focus:border-green-400">
        </label>
        <label for="city" class="w-5/12 flex flex-col">
            <span>İl*</span>
            <input v-model="address.city" type="text" id="city" class="w-full bg-slate-50 border py-1 pl-2 outline-none rounded-md focus:border-green-400">
        </label>
    </div>
    <div class="w-full flex justify-between">
        <label for="district" class="w-5/12 flex flex-col">
            <span>İlçe*</span>
            <input v-model="address.district" type="text" id="district" class="w-full bg-slate-50 border py-1 pl-2 outline-none rounded-md focus:border-green-400">
        </label>
        <label for="town" class="w-5/12 flex flex-col">
            <span>Mahalle*</span>
            <input v-model="address.neighbour" type="text" id="town" class="w-full bg-slate-50 border py-1 pl-2 outline-none rounded-md focus:border-green-400">
        </label>
    </div>
    
    <label for="address" class="w-full flex flex-col">
        <span>Adres*</span>
        <textarea v-model="address.fullAddress" name="address" id="address" class=" resize-none h-20 outline-none border bg-slate-50 rounded-md p-3"></textarea>
    </label>

    <div class="w-full flex justify-between">
        <button @click="$emit('backToCart')" class="w-4/12 py-3 mt-3 border bg-slate-50 rounded-md self-center">Sepete Dön</button>
        <button @click="$emit('PaymentStep', address)" class="w-4/12 py-3 mt-3 border bg-slate-100 rounded-md self-center">Ödemeye Geç</button>
    </div>
    
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const props = defineProps(["customer"]);

const expand = ref(false);
</script>

<template>
  <div class="w-full flex flex-col">
    <div
      class="w-full h-16 flex bg-slate-100 justify-between items-center px-5"
    > 
      <span class="text-xl">
        {{customer.full_name}}
        <!-- Customer Name -->
      </span>
      <div @click="expand = !expand">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 330 330"
          style="enable-background: new 0 0 330 330"
          xml:space="preserve"
          width="25px"
          class="fill-slate-600"
          v-if="expand == false"
        >
          <path
            id="XMLID_23_"
            d="M315,0H15C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V15
	C330,6.716,323.284,0,315,0z M255,180h-75v75c0,8.284-6.716,15-15,15s-15-6.716-15-15v-75H75c-8.284,0-15-6.716-15-15
	s6.716-15,15-15h75V75c0-8.284,6.716-15,15-15s15,6.716,15,15v75h75c8.284,0,15,6.716,15,15S263.284,180,255,180z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 330 330"
          style="enable-background: new 0 0 330 330"
          xml:space="preserve"
          width="25px"
          class="fill-gray-600"
          v-if="expand == true"
        >
          <path
            id="XMLID_26_"
            d="M315,0H15C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V15
	C330,6.716,323.284,0,315,0z M255,180H75c-8.284,0-15-6.716-15-15s6.716-15,15-15h180c8.284,0,15,6.716,15,15S263.284,180,255,180z"
          />
        </svg>
      </div>
    </div>
    <div
      class="bg-white"
      :class="[{ 'h-44 border border-gray-500': expand }, { 'h-0 border-none': !expand } ]"
    >
        <div v-if="expand" class="w-full h-full p-3 gap-y-1 flex flex-col">
            <span class="">İsim Soyisim: {{customer.full_name}}</span>
            <span>
              İletişim Numarası: +90 
              {{customer.phone_number.substring(0,3)}} 
              {{customer.phone_number.substring(3, 6)}}
              {{customer.phone_number.substring(6, 8)}}
              {{customer.phone_number.substring(8, 10)}}
            </span>
            <span>Mail Adresi: {{customer.e_mail}}</span>
            <span>Adres: şimdilik boş</span>
            <div class="w-full flex justify-end">
              <button class="bg-red-500 py-3 rounded-md text-white text-sm px-2">Engelle</button>
            </div>
        </div>
    </div>
  </div>
</template>

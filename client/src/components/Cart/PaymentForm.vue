<script setup>
    import { ref, computed, reactive } from "vue"

    const props = defineProps(["orderInfos"])

    const front = ref(true)

    const Cardİnfos = ref({
        fullname:null,
        cardNumber: null,
        expireYear:null,
        expireMonth:null,
        CVV:null
    })
    const handleSeparete = () => {
        Cardİnfos.value.cardNumber = Cardİnfos.value.cardNumber?.match(/.{1,4}/g).join(" ")     
    }
    
   
</script>

<template>
  <div class="w-full flex h-full py-5">
    <div class="w-1/2 h-full border-r flex flex-col gap-y-2 px-5">
      <h1 class="text-lg mb-3">Kart bilgileri</h1>
      <label for="cardNum" class="w-full flex flex-col gap-y-1">
        <span class="text-sm">Kart Üzerindeki İsim</span>
        <input
        v-model="Cardİnfos.fullname"
          type="text"
          id="cardNum"
          class="w-full bg-slate-50 border py-2 pl-2 outline-none rounded-md focus:border-green-400"
          @focus="front = true"
        />
      </label>
      <label for="cardNum" class="w-full flex flex-col gap-y-1 mt-5 mb-5">
        <span class="text-sm">Kart Numarası</span>
        <input
          v-model="Cardİnfos.cardNumber"
          type="text"
          id="cardNum"
          class="w-full bg-slate-50 border py-2 pl-2 outline-none rounded-md focus:border-green-400"
          @focus="front = true"
          @focusout="handleSeparete"
        />
      </label>
      <div class="w-full flex justify-between">
        <div class="w-3/6 flex gap-x-5">
          <label for="month" class="w-full flex flex-col gap-y-1">
            <span class="text-sm">Son Kullanma Tarihi</span>
            <div class="w-full flex gap-x-3">
              <input
                v-model="Cardİnfos.expireMonth"
                type="text"
                id="month"
                class="w-2/6 bg-slate-50 border py-2 pl-2 outline-none rounded-md focus:border-green-400"
                @focus="front = true"
                placeholder="Ay"
              />
              <input
                v-model="Cardİnfos.expireYear"
                type="text"
                id="year"
                class="w-2/6 bg-slate-50 border py-2 pl-2 outline-none rounded-md focus:border-green-400"
                @focus="front = true"
                placeholder="Yıl"
              />
            </div>
          </label>
        </div>
        <div class="w-1/6">
            <label for="cvv">
                <span class="text-sm">CVV</span>
                <input
                v-model="Cardİnfos.CVV"
                type="text"
                id="year"
                class="w-full bg-slate-50 border py-2 pl-2 outline-none rounded-md focus:border-green-400"
                placeholder="CVV"
                @focus="front = false"
              />
            </label>
        </div>
      </div>
    </div>
    <div class="w-1/2 flex items-center px-8">
      <!-- Front Side -->
        <div v-if="front===true" class="w-full h-44 flex flex-col justify-end rounded-md bg-slate-200 px-3">
            <div class="w-full wordspace text-center text-lg mb-2">{{Cardİnfos.cardNumber}}</div>
            <div class="pl-44 text-sm"><span>{{Cardİnfos.expireMonth}}/{{Cardİnfos.expireYear}}</span></div>
            <div class="pb-3">{{Cardİnfos.fullname}}</div>
        </div>

      <!-- Back Side -->
      <div v-if="front===false" class="w-full h-44 flex flex-col justify-start rounded-md bg-slate-200 ">
            <div class="w-full h-9 mt-5 bg-black"></div>
            <div class="w-full h-6 flex justify-start pr-16 mt-3 pl-3">
              <div class="w-full h-full bg-white flex justify-end">
                <span class="text-sm pr-1">{{Cardİnfos.CVV}}</span>
              </div>
            </div>
        </div>
    </div>
  </div>
  <div class="w-full h-24 bg-white border flex rounded-md shadow-md mt-5">
    <div class="w-1/2 h-full border-r flex flex-col py-2 px-5 gap-y-1">
      <h1>Adres Bilgileri</h1>
      <span class="text-sm font-thin">{{orderInfos.neighbour}} Mahallesi {{orderInfos.fullAddress}}</span>
      <span class="text-sm font-bold">{{orderInfos.district}}/{{orderInfos.city}}</span>
    </div>
    <div class="w-1/2 h-full border-r flex flex-col py-2 px-5 gap-y-1">
      <h1>Kişisel Bilgiler</h1>
      <span class="text-sm">{{orderInfos.name}} {{orderInfos.lastname}}</span>
      <span class="text-sm font-bold">+90 {{orderInfos.phone}}</span>
    </div>
  </div>
</template>

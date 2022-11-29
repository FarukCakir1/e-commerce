<script setup>
import { ref, inject, computed } from "vue";
import { useShoppingCartStore } from "../store/ShoppingCart";
import { useOrderStore } from "../store/Order"
import router from "../router"

import CartItem from "../components/Cart/CartItem.vue";
import AddressForm from "../components/Cart/AddressForm.vue";
import PaymentForm from "../components/Cart/PaymentForm.vue"

const store = useShoppingCartStore();
const ordersStore = useOrderStore();

const orderInfos = ref({})

const totalPrice = computed(() => {
  let total = 0;
  store.products.map(prd => {
    total += prd.price * prd.orderQuantity
  })
  return total
});

const tax = computed(() => {
  return totalPrice.value * 0.18
})

const transportPrice = computed(() => {
  return totalPrice.value * 0.03
})

const finalPrice = computed(() => {
  return totalPrice.value + tax.value + transportPrice.value
})

const step = ref(1)

const beforePaymentStep = (e) => {
  orderInfos.value = {products: [...store.products], ...e, status: "Onay Bekliyor"}
  console.log(orderInfos.value)
  step.value = 3
}

const handleNewOrder = () => {
  ordersStore.newOrder(orderInfos.value)
  store.unloadCart()
}

</script>

<template>
  <div class="w-screen h-screen flex flex-col py-10 items-center">
    <div v-if="store.products.length === 0" class="w-4/6 h-40 shadow-md flex flex-col items-center justify-start gap-y-3 py-5">
        <h1 class="text-lg">Sepetiniz şu an boş</h1>
        <p class="text-gray-400 font-light">Fırsatlardan yararlanmak için hemen alışverişe başla</p>
        <button @click="router.push('/')" class="w-1/6 py-2 bg-sky-500 text-white rounded-sm">Başla</button>
    </div>
    <div v-else class="w-4/6 scrollbar flex gap-x-3 relative">
      <div v-if="step === 1" class="w-4/6 scrollbar px-3 py-8 shadow-lg">
        <CartItem v-for="product in store.products" :product="product" />
      </div>
      <div v-if="step===2" class="w-full border rounded-md shadow-md px-16 py-5">
        <h1 class="text-xl">Teslimat Adresi</h1>
        <AddressForm @backToCart="step = 1" @PaymentStep="beforePaymentStep"/>
      </div>
      
      <div v-if="step===3" class="w-full border rounded-md shadow-md">     
        <PaymentForm  :orderInfos="orderInfos"/>
      </div>
      <div v-if="store.products.length !== 0" class="w-3/12 flex flex-col gap-y-8 h-[265px] sticky top-9">
        <div class="w-full h-4/6 border flex-col px-3 py-5">
          <div class="w-full flex justify-between text-sm">
            <span class="text-gray-600 text-sm">Ürün Toplam</span>
            <span>{{totalPrice}}₺</span>
          </div>
          <div class="w-full flex justify-between text-sm">
            <span class="text-gray-600 text-sm mt-2">KDV 18%</span>
            <span class="mt-2">{{tax}}₺</span>
          </div>
          <div class="w-full flex justify-between text-sm border-b pb-2">
            <span class="text-gray-600 text-sm mt-2">Nakliye Bedeli</span>
            <span class="mt-2">{{transportPrice}}₺</span>
          </div>
          <div class="w-full flex justify-between text-sm pb-2">
            <span class="text-gray-600 text-sm mt-5">Toplam Fiyat: </span>
            <span class="mt-5">{{finalPrice}}₺</span>
          </div>
        </div>
        <button
          v-if="step === 1"
          class="w-full py-4 bg-green-500 rounded-md text-white"
          @click="step = 2"
        >
          Sepeti Onayla
        </button>
        <button
          @click="handleNewOrder"
          v-if="step === 3"
          class="w-full py-4 bg-green-500 rounded-md text-white"
        >
          Siparişi Tamamla
        </button>
      </div>
    </div>
  </div>
</template>

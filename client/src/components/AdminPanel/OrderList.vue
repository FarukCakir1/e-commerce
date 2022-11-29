<script setup>
    import { useOrderStore } from '../../store/Order';
    import  OrderCard  from "./orders/OrderCard.vue"
    const store = useOrderStore()
    store.getAllOrders()
</script>


<template>
  <div class="w-full h-max bg-slate-50 flex flex-col justify-start items-center gap-y-8 py-8">
    <OrderCard v-for="order in store._getOrders" :order="order"/>
  </div>
</template>

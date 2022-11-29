<script setup>
import { computed } from "@vue/reactivity";

import { useUserStore } from "../../../store/User";
import { useOrderStore } from "../../../store/Order";
import { useShoppingCartStore } from "../../../store/ShoppingCart";

import dayjs from "dayjs";
import "dayjs/locale/tr";

const userStore = useUserStore();
const orderStore = useOrderStore();
const ShoppingCartStore = useShoppingCartStore()

const props = defineProps(["order"]);


const orderedPieces = computed(() => {
  return props.order.products.length;
});
const customerName = computed(() => {
  const customer = userStore._allUsers.find(
    (user) => user._id === props.order.customer_id
  );
  return customer.full_name;
});

const handleUpdataStatus = (status) => {
  orderStore.updateStatus(props.order._id, { status: status });
};

const handleCompleteOrder = () => {
  ShoppingCartStore.completeOrder(props.order.products)
  handleUpdataStatus('Teslim Edildi')
}
</script>

<template>
  <div
    class="w-4/6 h-80 bg-white border rounded-sm shadow-sm p-3 flex flex-col"
  >
    <span class="text-bold">{{
      dayjs(order.createdAt).locale("tr").format("DD MMMM YYYY")
    }}</span>
    <div class="flex justify-between">
      <span class="text-sm text-gray-500"
        >{{ orderedPieces }} adet ürün sipariş edildi</span
      >
      <span
        class="text-sm text-gray-500"
        :class="[
          { 'text-yellow-400': order.status === 'Onay Bekliyor' },
          { 'text-red-400': order.status === 'İptal Edildi' },
          { 'text-sky-400': order.status === 'Onaylandı' },
          { 'text-green-400': order.status === 'Kargoya Verildi' },
          { 'text-green-400': order.status === 'Teslim Edildi' },
        ]"
      >
        {{ order.status }}
      </span>
    </div>
    <div class="h-[1px] bg-slate-200"></div>
    <div class="w-full flex gap-x-5">
      <div
        v-for="product in order.products"
        class="w-32 h-32 flex justify-center items-center p-1 border mt-3"
      >
        <img :src="product.product_image" class="w-28 h-28" alt="" />
      </div>
    </div>
    <div class="w-full flex justify-between mt-4">
      <div class="w-3/6 truncate flex flex-col">
        <span class="uppercase text-[15px] font-light"
          >{{ order.fullAddress }} {{ order.district }}/{{ order.city }}</span
        >
        <span class="uppercase text-[15px] font-light tiny-word-space">
          +90 ({{ order.phone.replace(/\s/g, "").substring(0, 3) }})
          {{ order.phone.replace(/\s/g, "").substring(3, 6) }}
          {{ order.phone.replace(/\s/g, "").substring(6, 8) }}
          {{ order.phone.replace(/\s/g, "").substring(8, 10) }}
        </span>
        <span class="uppercase text-[15px] font-light">{{ customerName }}</span>
      </div>
      <div
        v-if="order.status !== 'Teslim Edildi' && order.status !== 'İptal Edildi'"
        class="w-3/6 flex justify-end gap-x-2 items-end text-white"
      >
        <button
          v-if="order.status === 'Onay Bekliyor'"
          class="w-2/6 h-4/6 bg-sky-500 border py-1 rounded-md"
          @click="handleUpdataStatus('Onaylandı')"
        >
          Onayla
        </button>

        <button
          v-if="order.status === 'Onaylandı'"
          class="w-2/6 h-4/6 bg-green-500 border py-1 rounded-md"
          @click="handleUpdataStatus('Kargoya Verildi')"
        >
          Kargola
        </button>

        <button
          v-if="order.status === 'Kargoya Verildi'"
          class="w-2/6 h-4/6 bg-green-500 border py-1 rounded-md"
          @click="handleCompleteOrder"
        >
          Siparişi Tamamla
        </button>
        
        <button
          v-if="order.status !== 'Kargoya Verildi'"
          class="w-2/6 h-4/6 bg-red-400 border py-1 rounded-md"
          @click="handleUpdataStatus('İptal Edildi')"
        >
          İptal Et
        </button>
      </div>
    </div>
  </div>
</template>

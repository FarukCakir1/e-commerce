<script setup>
import { computed } from "vue";
import dayjs from "dayjs";
import "dayjs/locale/tr";
const props = defineProps(["order"]);

const totalPrice = computed(() => {
  let total = 0;
  props.order.products.map((prd) => {
    total += prd.price * prd.orderQuantity;
  });

  return total;
});

const orderPiece = computed(() => {
    return props.order.products.length
})

</script>
<template>
  <div class="w-4/6 h-52 bg-white flex flex-col border rounded-sm shadow-sm">
    <div class="w-full h-16 flex flex-col border-b p-3 text-gray-500">
      <span>{{
        dayjs(order.createdAt).locale("tr").format("DD MMMM YYYY")
      }}</span>
      <span class="text-sm"
        >Toplam: <span class="text-orange-400">{{ totalPrice }}₺</span></span
      >
    </div>
    <div class="w-full h-full flex flex-col py-1 px-5">
      <span
        class="text-sm"
        :class="[
          { 'text-orange-300': order.status === 'Onay Bekliyor' },
          { 'text-red-400': order.status === 'İptal Edildi' },
          { 'text-green-400': order.status === 'Kargoya Verildi' },
          { 'text-sky-400': order.status === 'Siparişiniz Onaylandı' },
          { 'text-green-400': order.status === 'Teslim Edildi' },
        ]"
      >
        {{ order.status }}</span
      >
      <div class="w-full flex gap-x-3 mt-2">
        <div v-for="prd in order.products" class="w-18 h-18 ml-1 gap-x-3 border flex items-center justify-center p-1">
          <img :src="prd.product_image" class="w-16 h-16" alt="" />
        </div>
      </div>
      <div class="w-full flex justify-end text-sm text-gray-500">
        <span>{{orderPiece}} adet ürün {{order.status}}</span>
      </div>
    </div>
  </div>
</template>

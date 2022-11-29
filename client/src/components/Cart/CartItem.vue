<script setup>
import { useShoppingCartStore } from "../../store/ShoppingCart";
const store = useShoppingCartStore();
const props = defineProps(["product"]);



</script>

<template>
  <div class="w-full h-40 flex border-t mb-2 relative">
    <div class="w-36 self-center">
      <img :src="product.product_image" alt="" class="w-36 h-36" />
    </div>
    <div class="w-full flex flex-col items-start justify-start py-3 px-5">
      <h2 class="text-xl font-bold">{{ product.name }}</h2>
      <span class="w-full text-sm font-thin"
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam
        odio minima corrupti, accusantium
      </span>

      <div class="w-full h-full flex items-end justify-between pl-5">
        <span>{{ product.price }} $</span>
        <div class="w-24 flex justify-between">
          <button
            @click="store.decreaseOrderQuantity(product._id)"
            class="border rounded-md w-8 text-center h-9"
          >
            -
          </button>
          <span class="h-9 flex items-center">{{ product.orderQuantity }}</span>
          <button
            @click="store.increaseOrderQuantity(product._id)"
            class="border rounded-md w-8 text-center h-9"
          >
            +
          </button>
        </div>
      </div>
    </div>
    <button @click="store.dropProduct(product._id)" class="absolute top-2 right-2">
      <svg
        width="16px"
        viewBox="-80 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
        />
      </svg>
    </button>
  </div>
</template>

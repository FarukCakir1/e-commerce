<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "../../store/Products";
import { useShoppingCartStore } from "../../store/ShoppingCart";
import Product from "./Product.vue";

const productStore = useProductsStore()
const cartStore = useShoppingCartStore();

productStore.getAllProducts()
const products = ref(productStore._allProducts);

const filteredProducts = computed(() => {
  if(useRoute().params.id){
    return products.value.filter(prd => prd.category === useRoute().params.id)
  }

  return productStore._allProducts
})

const handleAdd = (e) => {
  cartStore.addToCart(e)
}




</script>

<template>
  <div class="w-5/6 h-full flex flex-wrap gap-x-8 justify-start gap-y-8">
    <Product  v-for="product in filteredProducts" :product="product" @addToCartEvent="handleAdd"/>
  </div>
</template>

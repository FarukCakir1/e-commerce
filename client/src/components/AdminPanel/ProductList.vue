<script setup>
// from vue
import { computed, ref } from "@vue/reactivity";
// stores
import { useProductsStore } from "../../store/Products";
// components
import ProductCard from "./productList/Productcard.vue"
import EditMenu from "./productList/EditMenu.vue"

const store = useProductsStore();
store.getAllProducts();

const editMenuStatus = ref(false)
const editingProduct = ref(null)

const productLength = computed(() => {
  return store._allProducts.length;
});

const handleDelete = (e) => {
  store.deleteProduct(e)
}

const handleOpenEditMenu = (e) => {
  editMenuStatus.value = true
  editingProduct.value = e

  console.log(editingProduct.value)
}


</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <EditMenu v-if="editMenuStatus" :editingProduct="editingProduct"/>
    <div class="w-3/6 h-5/6
    ">
      <h1 class="text-2xl uppercase font-bold text-center mb-5">
        Stok Kaydı
      </h1>
      <span class="text-lg">{{ productLength }} adet ürün listeleniyor</span>
      <ProductCard v-for="product in store._allProducts" :product="product" @deleteEvent="handleDelete" @openEdit="handleOpenEditMenu"/>
    </div>
  </div>
</template>

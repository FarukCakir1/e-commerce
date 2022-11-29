<script setup>
    import { computed } from '@vue/reactivity';
    import router from '../../router';
    import { useCategoriesStore } from '../../store/Categories';
    import { useProductsStore } from '../../store/Products';
    import { useRoute } from 'vue-router';
    const store = useCategoriesStore()
    const productStore = useProductsStore()
    store.getAllCategories()

    const currentRoute = computed(() => {
    return useRoute().path.toString();
  })
</script>


<template>
  <div v-if="!currentRoute.includes('/admin')" class="bg-white h-14 border-b border-t flex justify-center">
    <div v-for="category in store._existingCategories" class="flex justify-center items-center px-3 mx-2 hover:bg-gray-100 cursor-pointer">
        <span @click="router.push(`/${category._id}`)">{{category.name}}</span>
    </div>
  </div>
</template>

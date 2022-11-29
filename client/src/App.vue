<script setup>
 import { computed } from 'vue';
 import { useRoute } from 'vue-router';
 import Categories from './components/Home/Categories.vue';

  const currentRoute = computed(() => {
    return useRoute().path.toString();
  })

  console.log(useRoute().params);

</script>


<template>
  <div class="h-max overflow-x-hidden">

    <Header v-if="!currentRoute.includes('/admin')" />
    <Categories />
    <router-view></router-view>
    <Footer v-if="!currentRoute.includes('/admin')" />
  </div>
</template>



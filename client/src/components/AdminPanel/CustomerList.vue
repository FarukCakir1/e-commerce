<script setup>
    import CustomerCard from './customer/CustomerCard.vue';
    import { useUserStore } from '../../store/User';

    const customerStore = useUserStore();
    customerStore.getAllUsers()

</script>


<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="w-3/6 h-4/6 flex flex-col gap-y-5 items-center">
        <CustomerCard v-for="customer in customerStore._allUsers" :customer="customer"/>
    </div>
    
  </div>
</template>

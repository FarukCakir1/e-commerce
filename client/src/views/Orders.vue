<script setup>
import { ref } from "vue"
import { useOrderStore } from "../store/Order";
import { useUserStore } from "../store/User";
import OrderedItem from "../components/Orders/OrderedItem.vue";
import { computed } from "@vue/reactivity";

const filter = ref("Hepsi")
const userStore = useUserStore();
const orderStore = useOrderStore();
orderStore.usersOrder(userStore._currentUser._id);

const setFilter = (data) => {
  filter.value = data
}

const filteredList = computed(() => {
  if(filter.value === "Hepsi"){
    return orderStore._userOrders
  }else{
    return orderStore._userOrders.filter(ord => ord.status === filter.value)
  }
})

</script>

<template>
  <div class="w-screen bg-slate-50 flex flex-col items-center py-16">
    <div class="w-4/6 h-20 flex items-center bg-white mb-2 px-6">
      <label for="filter" class="w-48">
        <span class="font-semibold text-sm">Filtrele</span>
        <div id="filter" class="w-48 py-1 border border-orange-200 relative group">
          <span class="px-2 text-sm">{{filter}}</span>
          <div
            class="w-full h-38 border border-slate-300 absolute top-8 hidden right-0 z-10 group-hover:block bg-white"
          >
            <div class="w-full h-full flex flex-col p-3">
              <span @click="setFilter('Hepsi')" class="text-xs font-medium p-1 hover:bg-slate-100">Hepsi</span>
              <span @click="setFilter('İptal Edildi')" class="text-xs font-medium p-1 hover:bg-slate-100">İptal Edilen</span>
              <span @click="setFilter('Siparişiniz Onaylandı')" class="text-xs font-medium p-1 hover:bg-slate-100">Onaylandı</span>
              <span @click="setFilter('Onay Bekliyor')" class="text-xs font-medium p-1 hover:bg-slate-100">Onay Bekleyen</span>
              <span @click="setFilter('Kargoya Verildi')" class="text-xs font-medium p-1 hover:bg-slate-100">Kargoya Verilen</span>
              <span @click="setFilter('Teslim Edildi')" class="text-xs font-medium p-1 hover:bg-slate-100">Teslim Edilen</span>
            </div>
          </div>
        </div>
      </label>
    </div>
    <div class="w-full h-full flex flex-col items-center gap-y-3">
      <OrderedItem v-for="order in filteredList" :order="order" />
    </div>
  </div>
</template>

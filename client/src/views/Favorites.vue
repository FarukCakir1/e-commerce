<script setup>
  import {useUserStore} from "../store/User"
  import FavoriteCard from "../components/Favorites/FavoriteCard.vue";

  const store = useUserStore()

</script>

<template>
  <div class="w-screen bg-slate-50 flex justify-center py-16">
    <div v-if="store._currentUser?.favorites.length !==0" class="w-4/6 h-max flex flex-col items-center bg-white shadow-md">
      <FavoriteCard v-for="product in store._currentUser.favorites" :product="product"/>
    </div>
    <div v-else class="w-4/6 h-56 bg-white shadow-md flex flex-col gap-y-3 items-center py-8">
      <h1 class="text-xl font-semibold">Favori ürününüz bulunmuyor.</h1>
      <span class="font-thin">Beğendiğiniz ürünleri favorilerinize ekleyerek indirimlerden ve ya kampanyalardan haberdar olabilirsiniz.</span>
      <button class="uppercase p-3 bg-blue-400 text-white rounded-sm">Alışverişe başla</button>
    </div>
  </div>
</template>

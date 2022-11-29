<script setup>
    import { ref } from 'vue';
    import { useAdminStore } from '../../store/Admin';

    const store = useAdminStore()
    store.getAllAdmins();


    const createMenuStat = ref(false)
    const adminList = ref(store._allRegisteredAdmins)
    
    const newAdminInfos = ref({
        admin_name: null,
        admin_password: null
    })

    const handleCreate = () => {
        store.createNewAdmin(newAdminInfos.value)
        createMenuStat.value = false
    }
</script>


<template>
  <div class="w-full h-full flex justify-center items-center">
    <div v-if="createMenuStat" class="flex justify-center items-center absolute top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.5)]">
        <div class="w-2/6 h-3/6 bg-slate-50 flex flex-col gap-y-5 py-2 px-8">
            <h1 class="text-xl text-center">Yeni Admin Oluştur</h1>
            <label for="name">
                <span>Admin Name:</span>
                <input v-model="newAdminInfos.admin_name" type="text" id="name" class="w-full py-3 bg-admin-light-gray outline-none px-3 text-xl">
            </label>
            <label for="password" class="mt-5">
                <span>Admin Password:</span>
                <input v-model="newAdminInfos.admin_password" type="text" id="password" class="w-full py-3 bg-admin-light-gray outline-none px-3 text-xl">
            </label>
            <div class="w-full flex justify-end gap-x-6">
                <button @click="handleCreate" class="w-2/6 bg-green-500 py-3 text-white hover:bg-green-400 duration-300">Oluştur</button>
                <button @click="createMenuStat = false" class="w-2/6 bg-red-500 py-3 text-white hover:bg-red-600 duration-300">İptal</button>
            </div>
            
        </div>
    </div>
    <div class="w-3/6 h-5/6 flex flex-col gap-y-5 overflow-y-scroll scrollbar">
        <h1 class="text-center text-xl">Mevcut Adminler</h1>
        <button @click="createMenuStat = true" class="self-end bg-gray-300 px-3 py-2 rounded-md border border-black shadow-md hover:bg-gray-100 duration-200">Yeni Admin Ekle</button>
        <div v-for="admin in adminList" class="w-full h-16 bg-admin-light-gray flex-shrink-0 flex items-center px-8 justify-between">
            <span class="text-xl">{{admin.admin_name}}</span>
            <button @click="store.handleDelete(admin._id)" class="bg-red-400 px-6 py-2 text-white rounded-md hover:bg-red-600 duration-300">Sil</button>
        </div>
    </div>
  </div>
</template>

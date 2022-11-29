<script setup>
    import NavBar from '../components/AdminPanel/NavBar.vue';
    import SideBar from '../components/AdminPanel/SideBar.vue';
</script>

<template>
    <div class="w-screen h-screen flex">
        <SideBar />
        <div class="w-full h-full overflow-y-scroll">
            <NavBar />
            <router-view></router-view>
        </div>
    </div>
</template>

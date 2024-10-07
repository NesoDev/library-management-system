<template>
  <div id="route-view-container">
    <router-view/>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';


const router = useRouter();
const store = useStore();

onBeforeMount(() => {
  const isAuthenticated = store.state.isAuthenticated;
  console.log(`App.vue: isAuthenticated -> ${isAuthenticated}`)
  if (isAuthenticated) {
    console.log(`App.vue: yendo a home`)
    router.push('/login');
  } else {
    router.push('/home');
  }
});
</script>

<style scoped>
#route-view-container {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  font-family: 'Arial', sans-serif;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
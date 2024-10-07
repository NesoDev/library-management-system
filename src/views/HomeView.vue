<template>
  <div class="container">
    <!-- Menu de navegacion -->
    <div class="menu">
      <div class="logo">
        <img src="https://res.cloudinary.com/dimcnbuqs/image/upload/v1708207111/bitmap_2_rpy0mo.png" alt="">
      </div>
      <nav class="sections">
        <router-link to="/home/books" class="menu-button"
          :class="{ 'active': $route.path === '/home/books' }">
          <img src="https://res.cloudinary.com/dimcnbuqs/image/upload/v1728328218/Book_fwumkl.png" alt="">
          <h3>Libros</h3>
        </router-link>
        <router-link to="/home/books" class="menu-button"
          :class="{ 'active': $route.path === '/home/books' }">
          <img src="https://res.cloudinary.com/dimcnbuqs/image/upload/v1728329690/Ranking_cxkrdz.png" alt="">
          <h3>Ranking</h3>
        </router-link>
        <router-link to="/home/books" class="menu-button"
          :class="{ 'active': $route.path === '/home/books' }">
          <img src="https://res.cloudinary.com/dimcnbuqs/image/upload/v1728328218/Book_fwumkl.png" alt="">
          <h3>Libros</h3>
        </router-link>
        <router-link to="/home/books" class="menu-button"
          :class="{ 'active': $route.path === '/home/books' }">
          <img src="https://res.cloudinary.com/dimcnbuqs/image/upload/v1728328218/Book_fwumkl.png" alt="">
          <h3>Libros</h3>
        </router-link>
      </nav>
      <button class="menu-button" @click="toLogin">
        <img src="https://res.cloudinary.com/dimcnbuqs/image/upload/v1728330153/Logout_cbam8v.png" alt="">
        Cerrar sesión
      </button>
    </div>
    <!-- Seccion de contenido -->
    <div class="content">
      <div class="view-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const toLogin = () => {
  router.push('/login')
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background: rgb(216, 210, 210);
  display: flex;
  flex-direction: row;
}

.menu {
  height: 100vh;
  min-width: 170px;
  width: 20%;
  max-width: 200px;
  background: #2a1f52;
  padding: 20px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.logo {
  width: 50%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo img{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sections {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.menu-button {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  gap: 5px;
  align-items: center;
  text-decoration: none;
  border-radius: 8px;
  box-sizing: border-box;
}

.menu-button:hover {
  background: #453887;
}

.menu-button img {
  height: 50%;
  width: auto;
}

.menu-button h3 {
  color: #fff;
  font-size: 16px;
  font-weight: 300;
}

.menu button {
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 300;
}

.content {
  height: 100%;
  width: 100%;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
}

.view-container {
  width: 100%;
  height: 100%;
  background: rgb(216, 216, 216);
}
</style>
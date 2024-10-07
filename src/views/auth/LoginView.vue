<template>
    <div class="container">
      <div class="column image-column">
        <img src="https://s3-alpha-sig.figma.com/img/ac2e/dc1e/ecc536c254ed50522390e0ba6a07d2cd?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ls10eKrNja6ozgiR6qDOxTNytstrtfEBinfpaFt8DdfL2uoYbFVMZ56lB1JQDut9I9JKUKqfB1sAmZEht3e3CkiVCpIMedfyuoagK09RMo91JhPYWSrGK6gceQoLymTrPXLqfNG2Gg8ZiMYTbNY72osUnCbrKhjP9cwM65tvDRihz9tZLRmhFEWhDoHY1dczfxmsQeboDTitoBJiYcyD0LUTMI6XrLoDYDwhBlzglKoK1Ejy2hgDwnU8ZxokJ5S0XbBCrQgFcesUVs5KlGU5wkwA8eaffLYLAWvwwgyEtqERmzO3NlqMq0w72PrwYH-ZtWN2r7yGma4ddzeuTxYitQ__" alt="Imagen 1" />
      </div>
  
      <div class="column form-column">
        <h2>Iniciar sesión</h2>
        <div class="input-group">
          <input type="email" placeholder="Correo electrónico" />
          <input type="password" placeholder="Contraseña" />
        </div>
        <button @click="toHome">Ingresar</button>
      </div>
  
      <div class="column image-column">
        <img src="https://s3-alpha-sig.figma.com/img/c5aa/9f9e/8334e9549f8eb214aca67b339dde808e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=he~YwtI6fUSnoda3WL3-JEkbluov59tincO8JtzqOe1BOr77uEuZ~upLAMAhwc4KwG6fqOhBNmn~8iBiuLst~tofWv2HUiTm3gqs4TFpGPnwoP4TPjPCCMNAhlqtO0X3C2aZQCetg4tdNiv1VSwColNn06g2ooSWfhLg5oZPydYx-3dpQWGPsd27DfP8llcPFWh5Wo~xWxF3DR90hMFye7YHnI1osh8U5Gzs1acLsvwK10rcb4a9OGpUNHIklrL-cfchrCJ5zRoHs71QBKQA9SBXLRO4DnF7xLHiZLVN5bTPEtIegbuOHw~DJVE7Dd1u1KVtmtTM6hSQlHNl90q85w__" alt="Imagen 2" />
      </div>
    </div>
  </template>

  <script lang="ts" setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const toHome = () => {
    router.push('/home')
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
  }
  
  .column {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image-column {
    width: 120px;
    height: auto;
  }

  .image-column img {
    width: 100%;
  }
  
  .form-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #fff;
  }
  
  .form-column h2 {
    margin-bottom: 20px;
    font-size: 24px;
  }
  
  .input-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin-bottom: 20px;
  }
  
  .input-group input {
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  
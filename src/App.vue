<script setup>
import TheFooter from './components/TheFooter/TheFooter.vue'
import TheHeader from './components/TheHeader/TheHeader.vue'
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <TheHeader />
      <RouterView />
    </div>
    <TheFooter />
  </div>
</template>

<style scoped></style>

<script setup>
import MainLogo from '../icons/MainLogo.vue'
import TheMenu from '../TheMenu/TheMenu.vue'
</script>
<template>
  <header class="header">
    <div class="container header__container">
      <router-link to="/" class="header__logo">
        <MainLogo />
      </router-link>
      <TheMenu />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/vars.scss';
.header {
  padding: 22px 0;
  border-bottom: 1px solid $grey;

  &__container {
    display: flex;
    gap: $spacing-s;
    align-items: center;
  }

  &__logo {
    width: 50%;
    display: inline-flex;
  }
}
</style>

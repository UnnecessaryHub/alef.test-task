<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="nav">
    <RouterLink to="/" class="nav__link">Форма</RouterLink>
    <RouterLink to="/preview" class="nav__link">Превью</RouterLink>
  </nav>
</template>

<style scoped lang="scss">
@import '../../assets/styles/vars.scss';
.nav {
  display: flex;
  gap: $spacing-m;

  &__link {
    color: $black;
    opacity: 0.4;
    text-decoration: none;
    transition: opacity 0.3s ease;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
  .router-link-exact-active {
    opacity: 1;
  }
}
</style>

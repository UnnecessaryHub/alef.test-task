<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      name: (state) => state.name,
      age: (state) => state.age,
      childs: (state) => state.childs
    })
  }
}
</script>

<template>
  <div class="preview">
    <div class="container container--s">
      <div v-if="!name || !age">Пожалуйста, заполните даннные в форме</div>
      <div v-else class="preview__info">
        <div class="preview__person">
          <div class="title">Персональные данные</div>
          <div class="preview__val">{{ name }}, {{ age }} лет</div>
        </div>
        <div class="preview__childs" v-if="childs.length">
          <div class="preview_sub">Дети</div>
          <div v-for="child in childs" :key="child.name + child.age" class="preview__child">
            {{ child.name }}, {{ child.age }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import '../assets/styles/vars.scss';
.preview {
  padding: $spacing-l 0;
  text-align: left;

  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
  }

  &__person {
    margin: 0 0 $spacing-s 0;
    font: normal 700 16px / 150% Montserrat;
    color: $black;
    text-align: left;
  }

  &__childs {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: $spacing-s;
  }

  &__child {
    padding: $spacing-xs $spacing-s;
    background: $grey;
    border-radius: $radius;
    font: normal 700 16px / 150% Montserrat;
    color: $active;
  }
}
</style>

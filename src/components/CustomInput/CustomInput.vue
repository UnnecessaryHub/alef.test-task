<template>
  <div class="input">
    <input class="input__el" type="text" :name="name" :value="val" @change="onChange" />
    <label :for="name" class="input__label" :class="{ 'input__label--top': val.length }">{{
      label
    }}</label>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  data() {
    return {
      val: ''
    }
  },
  props: {
    label: {
      type: String,
      default: () => ''
    },
    name: {
      type: String,
      default: () => ''
    }
  },
  emits: ['updateVal'],
  methods: {
    onChange(e) {
      const target = e.target
      this.val = target.value
      this.$emit('updateVal', { value: this.val, name: target.name })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars.scss';
.input {
  width: 100%;
  position: relative;
  margin: 0 0 $spacing-xs 0;

  &__el {
    width: 100%;
    padding: 26px 16px 6px;
    border: 1px solid $grey;
    border-radius: $radius;
    outline: none;

    &:focus,
    &:active {
      & + .input__label {
        transform: translateY(-12px);
      }
    }
  }

  &__label {
    font: normal 400 13px / 100% Montserrat;
    position: absolute;
    top: 20px;
    left: 16px;
    transition: transform 0.3s ease;

    &--top {
      transform: translateY(-12px);
    }
  }
}
</style>

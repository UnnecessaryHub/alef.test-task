<script>
import CustomInput from '../CustomInput/CustomInput.vue'

export default {
  components: {
    CustomInput
  },
  props: {
    id: {
      type: Number
    },
    name: {
      type: String
    }
  },
  emits: ['onUpdateChildName', 'onUpdateChildAge', 'deleteChild'],
  methods: {
    onUpdateChildName(val) {
      this.$emit('onUpdateChildName', { ...val, id: this.id })
    },
    onUpdateChildAge(age) {
      this.$emit('onUpdateChildAge', { ...age, id: this.id })
    },
    checkType(type) {
      if (type === 'name') {
        return 'name'
      } else {
        return 'age'
      }
    },
    onDelete(id) {
      this.$emit('deleteChild', id)
    }
  }
}
</script>

<template>
  <div class="row">
    <CustomInput label="Имя" :name="name" @update-val="onUpdateChildName" />
    <CustomInput label="Возраст" :name="name" @update-val="onUpdateChildAge" />
    <button class="delete" @click="onDelete(id)">Удалить</button>
  </div>
</template>
<style lang="scss" scoped>
@import '../../assets/styles/vars.scss';

.row {
  display: flex;
  align-items: center;
  gap: 18px;
}

.delete {
  background: $white;
  color: $color-primary;
  color: var(--colors-primary, #01a7fd);
  font: normal 400 14px / 171% Montserrat;
  border: none;
}
</style>

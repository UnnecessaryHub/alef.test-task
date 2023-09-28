<script>
import CustomInput from '../CustomInput/CustomInput.vue'
import PlusIcon from '../icons/PlusIcon.vue'
import { mapMutations } from 'vuex'
import ChildRow from '../ChildRow/ChildRow.vue'
export default {
  components: {
    CustomInput,
    PlusIcon,
    ChildRow
  },
  data: function () {
    return {
      person: {
        name: '',
        age: null,
        childs: []
      },
      id: null
    }
  },
  methods: {
    ...mapMutations({
      setName: 'setName',
      setAge: 'setAge',
      addChild: 'addChild'
    }),
    add() {
      let index = this.person.childs.length
      console.log(index)
      this.id = Date.now()
      if (index < 5) {
        this.person.childs.push({
          id: Date.now(),
          name: '',
          age: ''
        })
      }
    },
    onSubmit(e) {
      e.preventDefault()
      this.$store.commit('setName', this.person.name)
      this.$store.commit('setAge', this.person.age)
      this.$store.commit('addChild', [...this.person.childs])
    },
    onUpdateName(val) {
      this.person.name = val.value
    },
    onUpdateAge(val) {
      this.person.age = val.value
    },
    onUpdateChildName(val) {
      const isInList = this.person.childs.filter((item) => item.id === val.id)
      isInList[0].name = val.value
    },
    onUpdateChildAge(val) {
      const isInList = this.person.childs.filter((item) => item.id === val.id)
      isInList[0].age = val.value
    },
    onDeleteChild(id) {
      this.person.childs = this.person.childs.filter((el) => el.id !== id)
    }
  }
}
</script>

<template>
  <form class="form" @submit="onSubmit">
    <fieldset class="fieldset">
      <legend class="title">Персональные данные</legend>
      <CustomInput label="Имя" name="name" @update-val="onUpdateName" value="" />
      <CustomInput label="Возраст" name="age" @update-val="onUpdateAge" />
    </fieldset>
    <fieldset class="fieldset">
      <div class="head">
        <legend class="title">Дети (макс. 5)</legend>
        <button class="add" @click="add" v-if="person.childs.length < 5">
          <PlusIcon /><span>Добавить ребенка</span>
        </button>
      </div>
      <ChildRow
        v-for="item in person.childs"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        @on-update-child-name="onUpdateChildName"
        @on-update-child-age="onUpdateChildAge"
        @delete-child="onDeleteChild"
      />
    </fieldset>
    <button class="save" @submit="onSubmit">Сохранить</button>
  </form>
</template>

<style scoped lang="scss">
@import '../../assets/styles/vars.scss';
@import '../../assets/styles/mixins.scss';
.fieldset {
  border: none;
}

legend {
  margin: 0 0 $spacing-s 0;
}

.add {
  padding: $spacing-xs $spacing-s;
  border: 2px solid $color-primary;
  border-radius: $radius-xl;
  display: flex;
  align-items: center;
  color: $color-primary;
  gap: 4px;
  background: $white;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 $spacing-xs 0;

  @include mobile {
    flex-direction: column;
    align-items: flex-start;
  }
}

.save {
  padding: $spacing-xs $spacing-s;
  background: $color-primary;
  color: $white;
  border-radius: $radius-xl;
  border: none;
  transition: opacity 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}
</style>

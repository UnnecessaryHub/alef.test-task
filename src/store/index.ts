import { reactive } from 'vue'
import {createStore} from "vuex";

export const store = reactive({
  name: '',
  age: '',
  childs: []
})

const mainStore = createStore({
    state: () => {
      return {
        name: '',
        age: '',
        childs: []
      }
    },
    mutations: {
      setName(state, name) {
        state.name = name;
      },
      setAge(state, age) {
        state.age = age
      },
      addChild(state, childs) {
        state.childs =  [...childs]
      }
    }
});
export default mainStore;
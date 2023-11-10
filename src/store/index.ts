// store/index.ts
import { createStore } from 'vuex'

interface State {
  userName: string,
  [k:string]: boolean | number | string | object | any[]
}
export default createStore({
  state(): State {
    return {
      userName: "Vuex",
      hello: ''
    };
  },
})
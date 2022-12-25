import { defaultPasswordLength, defaultPasswordValue } from '@/consts'
import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    password: {
      value: defaultPasswordValue,
      length: defaultPasswordLength,
    }
  }),
  getters: {
  },
  mutations: {
    setPassword: (state, payload: string): void => {
      state.password.value = payload
    },
    setPasswordLength: (state, payload: number): void => {
      state.password.length = payload
    },
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      let oldProduct = state.cartList.find(item => item.id === payload.id)
      let oldProductSpe = state.cartList.find(item => JSON.stringify(item.tags) === JSON.stringify(payload.tags))
      if (oldProduct && oldProductSpe) {
        oldProduct.count += 1;
      }
      else {
        payload.count = 1;
        state.cartList.push(payload)
      }
    }
  }
})

export default store
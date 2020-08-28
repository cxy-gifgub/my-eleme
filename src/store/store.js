import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: [],
    totalPrice: 0,
    productCount:0
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
      state.productCount += 1;
      let total = 0;
      for (let i = 0; i < state.cartList.length; i++) {
        total += state.cartList[i].price * state.cartList[i].count;
        state.totalPrice = total
      }
    },
    delCart(state, del) {
      if (state.cartList[del].count == 1) {
        state.cartList.splice(del, 1);
        state.productCount -= 1;
      }
      else {
        state.productCount -= 1;
        state.cartList[del].count -= 1;
      }
      let total = 0;
      for (let i = 0; i < state.cartList.length; i++) {
        total += state.cartList[i].price * state.cartList[i].count;
        state.totalPrice = total
      }
    },
    moreCart(state,more) {
      state.cartList[more].count += 1;
      state.productCount += 1;
      let total = 0;
      for (let i = 0; i < state.cartList.length; i++) {
        total += state.cartList[i].price * state.cartList[i].count;
        state.totalPrice = total
      }
    }
  }
})

export default store
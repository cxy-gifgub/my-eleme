<template>
<transition name="fade" 
  v-bind:css="false"
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"

  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
  >
  <div v-if="show" id="toast_cart">
    <div id="cart_block">
      <div class="cart_item" v-for="list in cartList">
        <div class="item_img"><img src=""></div>
        <div class="item_info">
          <div class="item_title">{{list.title}}</div>
          <div class="item_spe">
            <span  v-for="item in list.tags">/ {{item}} </span>
          </div>
        </div>
        <div class="item_count"></div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import  Velocity from 'velocity-animate'
export default {
  data() {
    return {
      cartList:[],
      toastHeight:0,
      show:false
    }
  },
  created(){
    this.cartList = this.$store.state.cartList;
    console.log(this.cartList);
    this.toastHeight = this.cartList.length * 4 * 16
  },
  methods:{
    drawerOn(){
      this.show =! this.show
    },
    beforeEnter: function (el) {
      // ...
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function (el, done) {
      // ...
      console.log('enter');
      Velocity(el,
        { height: this.toastHeight },
        {
          duration: 300,
        }
      )
      done()
    },
    afterEnter: function (el) {
      // ...
    },
    enterCancelled: function (el) {
      // ...
    },

    // --------
    // 离开时
    // --------

    beforeLeave: function (el) {
      // ...
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    leave: function (el, done) {
      // ...
      console.log('leave');
      Velocity(el,
        { height: this.toastHeight },
        {
          duration: 1500,
        }
      )
      done()
    },
    afterLeave: function (el) {
      // ...
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function (el) {
      // ...
    }
  }
}
</script>

<style scoped>
  .cart_item{
    display: flex;
    height: 4rem;
    align-items: center;
  }
  .item_img{
    height: 3.2rem;
    width: 3.2rem;
    margin-left: 1rem;
  }
  .item_img img{
    height: 100%;
    width: 100%;
  }
  .item_info{
    margin-left: 1rem;
  }
  .item_title{
    font-weight: 550;
    color: #111;
    margin-bottom: 0.5rem;
  }
  .item_spe{
    color: #888;
    font-size: 0.6rem;
  }
  .item_count{
    margin-left: auto;
  }
  #toast_cart{
    position: fixed;
    background-color: #fff;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    left: 0;
    right: 0;
    bottom: 3rem;
    max-height: 75%;
    overflow: scroll;
  }
</style>
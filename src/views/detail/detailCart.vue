<template>
<div>
  <!-- 阴影遮罩 -->
  <div class="shade_block" v-if="show" @click="drawerOn">
  </div>
  <!-- 过渡购物车 -->
  <transition name="fade" 
    v-bind:css="false"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:before-leave="beforeLeave"
    v-on:leave="leave"
    >
    <div v-if="show" id="toast_cart" ref="toast">
        <div id="cart_block">
          <div class="cart_item" v-for="(list,index) in cartList">
            <div class="item_img">
              <img :src="list.img">
            </div>
            <div class="item_info">
              <div class="item_title">{{list.title}}</div>
              <div class="item_spe">
                <span  v-for="item in list.tags">/ {{item}} </span>
              </div>
            </div>
            <div class="item_count">
              <i class="el-icon-remove" @click="decre(index)"></i>
              <span >{{list.count}}</span>
              <i class="el-icon-circle-plus"  @click="incre(index)"></i>
            </div>
          </div>
        </div>
    </div>
  </transition>

</div>
</template>

<script>
import  Velocity from 'velocity-animate'
export default {
  data() {
    return {
      cartList:[],
      show:false,
      count: 1
    }
  },
  created(){
    this.cartList = this.$store.state.cartList;
  },
  computed:{
    toastHeight(){
      return this.$store.state.cartList.length * 4 * 16
    }
  },
  methods:{
    drawerOn(){
      this.show = !this.show
    },
    beforeEnter: function (el) {
      el.style.height = 0;
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function (el, done) {
      Velocity(el,
        { height: this.toastHeight},
        {duration: 250,}
      )
      done()
    },
    beforeLeave: function (el) {
      el.style.height = this.toastHeight
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    leave: function (el, done) {
      Velocity(el,
        { height: 0 },
        {
          duration: 250,
          complete: function () {
            done()
          }
        }
      )
    },
    decre(index){
      if(this.$store.state.cartList[index].count == 1){
        this.$store.commit('delCart',index);
        this.$refs.toast.style.height = this.$store.state.cartList.length * 4 * 16 + 'px';
        if(this.$store.state.cartList.length == 0)this.show = !this.show;
        return
      }
      else{
        this.$store.commit('delCart',index);
      }
    },
    incre(index){
      this.$store.commit('moreCart',index);
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
  .cart_all{
    position: relative;
  }
  .shade_block{
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: #4c6e8438;
    z-index: 0;
    top: 0;
  }
  .item_img{
    height: 3.2rem;
    width: 3.2rem;
    margin-left: 1rem;
  }
  .item_img img{
    height: 100%;
    width: 100%;
    border-radius: 0.4rem;
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
    margin-right: 1rem;
    display: flex;
    align-items: center;
  }
  .item_count i{
    color: var(--ele-color);
    margin: 0 0.4rem;
    font-size: 1.3rem;
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
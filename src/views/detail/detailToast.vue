<template>
  <div id="toast">
    <div class="toast_content" @click="show">
      <!-- <div class="t_img"><img src="@/assets/img/detail/shopping-bag.png"></div> -->
      <div class="t_img">
        <div
          v-show="this.$store.state.cartList.length>0"
          class="cart_count"
        >{{this.$store.state.productCount}}</div>
        <i v-if="this.$store.state.cartList.length>0" class="el-icon-platform-eleme"></i>
        <i v-else class="el-icon-platform-eleme have"></i>
      </div>
      <div class="toast_info">
        <div class="have_price" v-if="this.$store.state.cartList.length>0">
          <span class="price_span">¥</span>
          {{this.$store.state.totalPrice}}
        </div>
        <div v-else>未选购商品</div>
        <div>另需配送费￥3</div>
      </div>
      <div v-if="this.$store.state.cartList.length>0" class="toast_action_a" @click="toOrder">去结算</div>
      <div v-else class="toast_action">¥5起送</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$emit("showcart");
    },
    toOrder() {
      this.$router
        .push({
          path: "/order"
        })
        .catch((err) => err);
    },
  },
};
</script>

<style>
#toast {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3rem;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0 2px 10px #ccc;
}
.toast_content {
  display: flex;
  align-items: center;
  height: 100%;
}
.have_price {
  color: #111;
  font-size: 1rem;
  font-weight: 550;
}
.price_span {
  color: #111;
  font-size: 0.6rem;
}
.t_img {
  margin-left: 1rem;
  height: 3rem;
  width: 2rem;
  color: var(--ele-color);
  font-size: 2.3rem;
  display: flex;
  align-items: center;
  position: relative;
}
.cart_count {
  position: absolute;
  top: 0;
  right: -0.5rem;
  background-color: rgb(247, 51, 12);
  border-radius: 50%;
  color: #fff;
  font-size: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1rem;
  width: 1rem;
}
.have {
  color: #888;
}
.t_img img {
  height: 100%;
  width: 100%;
}
.toast_info {
  height: 100%;
  color: #888;
  font-size: 0.6rem;
  margin-left: 1rem;
}
.toast_info div {
  margin: 0.2rem;
}
.toast_action {
  background-color: #888;
  color: #fff;
  padding: 0.3rem 1.2rem;
  margin-left: auto;
  margin-right: 1rem;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.toast_action_a {
  background-color: var(--ele-color);
  color: #fff;
  padding: 0.3rem 1.2rem;
  margin-left: auto;
  margin-right: 1rem;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
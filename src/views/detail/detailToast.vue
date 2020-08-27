<template>
  <div id="toast">
    <div class="toast_content" @click="show">
      <div class="t_img"><img src="@/assets/img/detail/shopping-bag.png"></div>
      <div class="toast_info">
        <div>未选购商品</div>
        <div>另需配送费￥1</div>
      </div>
      <div class="toast_action">
        ￥20起送
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    show(){
      this.$emit('showcart')
    }
  }
}
</script>

<style>
  #toast{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3rem;
    z-index: 1;
    background-color: #fff;
    box-shadow: 0 2px 10px #ccc;
  }
  .toast_content{
    display: flex;
    align-items: center;
    height: 100%;
  }
  .t_img{
    margin-left: 1rem;
    height: 2rem;
    width: 2rem;
  }
  .t_img img{
    height: 100%;
    width: 100%;
  }
  .toast_info{
    height: 100%;
    color: #888;
    font-size: 0.6rem;
    margin-left: 1rem;
  }
  .toast_info div{
    margin: 0.2rem;
  }
  .toast_action{
    background-color: #888;
    color: #fff;
    padding: 0.5rem 1.2rem;
    margin-left: auto;
    margin-right: 1rem;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
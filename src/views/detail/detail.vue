<template>
  <div id="detail_block">
    <div class="store_message">
      <div class="mess_top">
        <div class="store_main">
          <div class="store_name">标题</div>
          <div class="store_send">饿了么专送</div>
        </div>
        <div class="store_img">
          <img :src="require('@/assets/img/home/kda.jpg')">
        </div>
      </div>
      <div class="store_noticc">公告：各位亲爱的客户您好，目前.................</div>
      <div class="mess_bottom">
        <div class="store_discount">配送费优惠</div>
        <div class="store_discountNum">1个优惠</div>
      </div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="点餐" name="first">点餐</el-tab-pane>
      <el-tab-pane label="评价" name="second">评价</el-tab-pane>
      <el-tab-pane label="商家" name="third">商家</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data(){
    return{
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style>
  .store_message{
    height: 6rem;
    width: 90%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 2px 2px 5px #eee;
    margin: 1rem auto;
    padding: 0.4rem;
  }
  .mess_top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }
  .store_name{
    color: #111;
    font-weight: 550;
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
  }
  .store_send{
    color: var(--ele-color);
    font-size: 0.6rem;
  }
  .store_img img{
    height: 3rem;
    border: 1px solid #aaa;
    border-radius: 10px;
  }
  .store_noticc{
    word-break: keep-all;
    overflow: hidden;
    color: #aaa;
    font-size: 0.6rem;
    text-overflow: ellipsis;
  }
  .mess_bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.4rem;
  }
  .store_discount{
    padding: 0rem 0.3rem;
    border: 1px solid rgb(228, 90, 26);
    color: rgb(228, 90, 26);
    border-radius: 5px;
    font-size: 0.6rem;
  }
  .store_discountNum{
    color: #aaa;
    font-size: 0.6rem;

  }
  body{background-color: #fdfdfd;}
</style>
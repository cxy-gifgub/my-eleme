<template>
  <div class="list_block">
    <div class="list_items" v-for="item in acceptList.list" @click="toDetail(item)">
      <div class="item_mainInfo">
        <div class="item_img">
          <img :src="item.img">
        </div>
        <div class="item_info">
          <div class="item_title">{{item.title}}</div>
          <div class="item_info2">
            <div class="item_left">
              <div class="item_scount">{{item.score}}分</div>
              <div class="item_saleNumber">月售{{item.sale_number}}</div>
            </div>
            <div class="item_right">
              <div class="item_sendTime">{{item.send_time/60}}分钟  {{item.distance>1000?item.distance/1000+'km':item.distance+'m'}}</div>
            </div>
          </div>
          <div class="item_send">
            <div class="item_left">
              <div class="item_beginSend">起送{{item.start_send}}</div>
              <div>免配送费<del>￥3</del></div>
            </div>
            <div class="item_sendMode">饿了么专送</div>
          </div>
          <div class="item_reply">
            <span>"{{item.reply}}"</span>
          </div>
          <div class="item_bottom">
            <span class="item_discount_tags">{{item.discount}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getHomeListdata} from '@/network/home';
export default {
  props:{
    acceptList:Object
  },
  data(){
    return{
      tagsList:[]
    }
  },
  created(){
    
  },
  methods:{
    toDetail(store_info){
      this.$router.push({
        path:'/detail',
        query:{store_info:store_info}
      }).catch(err => err)
    }
  }
}
</script>

<style scoped>
  .list_block{
    background-color: #f5f5f5;
    padding-top: 0.2rem;
  }
  .list_items{
    height: 8rem;
    margin: 0.5rem;
    background-color: #fff;
    padding: 0.4rem;
    border-radius: 0.6rem;
    letter-spacing: 1px;
  }
  .item_mainInfo{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
  .item_img{
    height: 6rem;
    width: 6rem;
    border-radius: 0.6rem;
  }
  .item_img img{
    height: 100%;
    width: 100%;
    border-radius: 0.6rem;
  }
  .item_info{
    height: 6rem;
    flex: 1;
    margin-left: 0.5rem;
  }
  .item_info div{
    margin: 2px 0;
  }
  .item_scount{
    color: orange;
    padding-right: 0.8rem;
    font-weight: 550;
  }
  .item_title{
    font-size: 1rem;
    font-weight: 550;
  }
  .item_info2{
    display: flex;
    justify-content: space-between;
    color: #888;
    font-size: 0.6rem;
  }
  .item_send{
    display: flex;
    justify-content: space-between;
    font-size: 0.6rem;
    color: #888;
  }
  .item_reply span{
    color: orange;
    background-color: rgba(228, 203, 157, 0.384);
    padding: 0.1rem 0.4rem;
    font-size: 0.6rem;
    border-radius: 0.2rem;
  }
  .item_left{
    display: flex;
  }
  .item_sendMode{
    padding: 0.1rem 0.2rem;
    border-radius: 0.2rem;
    color: var(--ele-color);
    background-color: rgba(155, 200, 236, 0.212);
  }
  .item_reply{
    display: flex;
  }
  .item_beginSend{
    padding-right: 0.8rem;
  }
  .item_discount_tags{
    color: rgb(243, 82, 18);
    font-size: 0.6rem;
    border-radius: 0.2rem;
    border: 1px solid rgba(255, 125, 73, 0.479);
    padding: 0.1rem 0.2rem;
  }
  .item_bottom{
    padding-top:0.4rem;
  }
</style>
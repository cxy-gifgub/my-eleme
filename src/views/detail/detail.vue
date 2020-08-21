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
    <div class="store_tags">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="点餐" name="first"></el-tab-pane>
        <el-tab-pane label="评价" name="second">评价</el-tab-pane>
        <el-tab-pane label="商家" name="third">商家</el-tab-pane>
      </el-tabs>
    </div>
    <div class="detail_content">
      <div class="left_bar"></div>
        <div class="right_content">
          <scroll class="item_scroll">
              <detailItem :detailList="detailList"></detailItem>
          </scroll>
        </div>
    </div>
  </div>
</template>

<script>
import detailItem from '@/views/detail/detailItem'
import scroll from '@/components/common/scroll/scroll'
import {getStoreDetail} from '@/network/detail'; 
export default {
  components:{
    detailItem,
    scroll
  },
  data(){
    return{
      activeName: 'first',
      detailList:[]
    }
  },
  created(){
    this.getDetail()
  },
  methods: {
    getDetail(){
      getStoreDetail().then(res=>{
        let nowList = res.data
        for(let i = 0;i<res.data.length;i++){
          this.detailList[i] = nowList[i].list
        }
        console.log(this.detailList);
      })
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style>
  .item_scroll{
    height: 60vh;
    overflow: hidden;
  }
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
  .store_tags{
    padding: 0 1rem;
  }
  .detail_content{
    display: flex;
    justify-content: space-between;
  }
  .left_bar{
    width: 5rem;
    height: 70vh;
    background-color: #bbb;
  }
  .right_content{
    width: calc(100% - 5rem);
  }
</style>
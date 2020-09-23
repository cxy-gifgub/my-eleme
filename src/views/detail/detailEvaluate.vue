<template>
  <div class="evaluate_block">
    <div class="score_block">
      <div class="score_total">
        <div class="total_block">
          {{score}}
        </div>
        <div class="score_describe">
          <div  class="scroe_title">高于附近80%商家</div>
          <div>
            <el-rate
              v-model="score"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}">
            </el-rate>
          </div>
        </div>
      </div>
      <div class="other_score">
        <div class="taste_score">
          <div class="taste_d">
            <div class="scroe_title">味道</div>
            <div>4.7</div>
          </div>
          <div class="taste_d">
            <div  class="scroe_title">包装</div>
            <div>4.7</div>
          </div>
        </div>
        <div class="send_score">
          <div  class="scroe_title">配送满意度</div>
          <div>95%</div>
        </div>
      </div>
    </div>
    <div class="evaluate_item">
      <div class="evaluate_col" v-for="item in evaList">
        <div class="user_info">
          <div class="user_img"><img :src="item.img"></div>
          <div class="user_other">
            <div class="user_name">{{item.name}}</div>
            <div class="evaluate_tags">超赞</div>
          </div>
          <div class="evalaute_time">{{item.date}}</div>
        </div>
        <div class="eavluate_content">
          <p>{{item.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getStoreEvaluate} from '@/network/detail'
export default {
  data(){
    return{
      evaList:[],
      score:0
    }
  },
  created(){
    this.getStoreEvaluate()
  },
  methods:{
    getStoreEvaluate(){
      getStoreEvaluate().then(res=>{
        this.score = res.data.score;
        this.evaList = res.data.list
      })
    }
  }
}
</script>

<style>
  .score_block{
    display: flex;
    padding: 0.5rem 1rem;
    justify-content: space-between;
    align-items: center;
  }
  .score_total{
    width: 50%;
    display: flex;
    align-items: center;
  }
  .total_block{
    font-size: 3rem;
    color: rgb(236,96,69);
  }
  .score_describe{
    font-size: 0.6rem;
    margin-left: 0.5rem;
  }
  .score_describe div{
    margin: 0.3rem 0;
  }
  .other_score{
    margin-left: auto;
    display: flex;
  }
  .taste_score{
    display: flex;
    font-size: 0.6rem;
  }
  .taste_d{
    margin: 0 0.6rem;
    align-items: center;
  }
  .taste_d div{
    margin: 0.3rem 0;
  }
  .send_score{
    margin-left: 0.5rem;
    padding-left: 1rem;
    font-size: 0.6rem;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #ddd ;
  }
  .scroe_title{
    color: #bbb;
    margin: 0.3rem 0;
  }
  .evaluate_item{
    padding: 1rem;
  }
  .user_info{
    display: flex;
    align-items: top;
    margin-bottom: 1rem;
  }
  .user_img{
    height: 2.5rem;
    width: 2.5rem;
  }
  .user_img img{
    height: 100%;
    width: 100%;
  }
  .user_other{
    display: flex;
    margin-left: 1rem;
    flex-direction: column;
    justify-content: space-between;
  }
  .user_name{
    font-weight: 550;
    color: #111;
    font-size: 0.8rem;
  }
  .evaluate_tags{
    color: #888;
    font-size: 0.6rem;
  }
  .evalaute_time{
    margin-left: auto;
    color: #888;
    font-size: 0.6rem;
  }
  .eavluate_content{
    color: #111;
    font-weight: lighter;
  }
  .evaluate_col{
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
  }
</style>
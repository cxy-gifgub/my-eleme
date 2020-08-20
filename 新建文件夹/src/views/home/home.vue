<template>
  <div>
      <div class="search_input">
        <el-input
            placeholder="请输入内容"
            v-model="searchInput">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <div class="btn_search">
            搜索
        </div>
      </div>
      <swiper :imgList="swiperImgList" class="swiper_block"></swiper>
      <homeItems class="homeItems" :itemList="homeItemsList"></homeItems>
      <homeItems class="homeItems" :itemList="tagsList"></homeItems>
      <tabs></tabs>
  </div>
</template>

<script>
import swiper from '@/components/common/swiper/swiper';
import homeItems from '@/views/home/components/homeItems'
import tabs from '@/views/home/components/tabs'
export default {
    data(){
        return{
            searchInput:'',
            swiperImgList:[
                require('@/assets/img/home/swip1.jpg'),
                require('@/assets/img/home/swip2.jpg')
            ],
            homeItemsList:[
                {
                    img:'',
                    title:'美食外卖'
                },
                {
                    img:'',
                    title:'超市便利'
                },
                {
                    img:'',
                    title:'团购优惠'
                },
                {
                    img:'',
                    title:'送药上门'
                },
                {
                    img:'',
                    title:'休闲娱乐'
                },
            ],
            tagsList:[
                {
                    img:'',
                    title:'下午茶'
                },
                {
                    img:'',
                    title:'水果'
                },
                {
                    img:'',
                    title:'甜品饮品'
                },
                {
                    img:'',
                    title:'买菜'
                },
                {
                    img:'',
                    title:'跑腿代购'
                },
                {
                    img:'',
                    title:'丽人/医美'
                },
                {
                    img:'',
                    title:'1折囤券'
                },
                {
                    img:'',
                    title:'配送减免'
                },
                {
                    img:'',
                    title:'汉堡披萨'
                },
                {
                    img:'',
                    title:'全部分类'
                },
            ]
        }
    },
    components:{
        swiper,
        homeItems,
        tabs
    }
}
</script>

<style>
    .search_input{
        margin: 1rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .search_input input{
        border-radius: 1.5rem;
        background-color: #eee;
        border: none;
        display: flex;
        align-items: center;
    }
    .btn_search{
        position: absolute;
        color: #fff;
        right: 0.3rem;
        display: flex;
        align-items: center;
        font-weight: normal;
        padding: 0.3rem 1.3rem;
        border-radius: 1.5rem;
        background: linear-gradient(45deg,#6dc0e9,var(--ele-color));
    }
    .swiper_block{
        padding: 0 1rem;
        border-radius: 0.6rem;
        margin: 0.5rem 0;
    }
    .homeItems{
        margin: 0 1rem;
    }
</style>
<template>
  <div class="home_list">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane  :name="item.name" v-for="item in tags" :key="item.name">
          <span slot="label">{{item.title}}</span>
          <homeList v-if="tagsList[item.name].load" :acceptList="tagsList[item.name].list"></homeList>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import homeList from '@/views/home/components/homeList'
import {getHomeListdata} from '@/network/home';
  export default {
    components:{
      homeList
    },
    data() {
      return {
        activeName: 'fujin',
        tags:[
            {
            name:'fujin',
            title:'附近推荐'
            },
            {
            name:'lingshi',
            title:'零食'
            },
            {
            name:'chaoshi',
            title:'超市'
            },
            {
            name:'maicai',
            title:'买菜'
            },
            {
            name:'baihuo',
            title:'百货'
            },
            {
            name:'shuiguo',
            title:'水果'
            },
        ],
        tagsList:{
          'fujin':{page:1,list:[],load:false},
          'lingshi':{page:1,list:[],load:false},
          'chaoshi':{page:1,list:[],load:false},
          'maicai':{page:1,list:[],load:false},
          'baihuo':{page:1,list:[],load:false},
          'shuiguo':{page:1,list:[],load:false}
        }
      };
    },
    created(){
      this.getHomeList('fujin')
    },
    methods: {
      getHomeList(type){
        getHomeListdata(type).then(res=>{
          console.log(res);
          this.tagsList[type].list = res.data[0].list;
          this.tagsList[type].load = true;
          for(let i = 0;i<this.tagsList[type].list.length;i++){
            this.tagsList[type].list[i].img = require('@/assets/img/home/' + this.tagsList[type].list[i].img + '.jpg')
          }
        })
      },

      handleClick(tab, event) {
        console.log(tab, event);
        this.getHomeList(tab.name)
      }
    }
  };
</script>
<style>
    .el-tabs__nav-wrap::after{
        background-color: #fff;
    }
    .home_list{
      padding-bottom: 2.2rem;
    }
</style>
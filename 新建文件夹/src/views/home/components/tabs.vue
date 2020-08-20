<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane  :name="item.name" v-for="item in tags" :key="item.name">
        <span slot="label">{{item.title}}</span>
        <homeList></homeList>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import homeList from '@/views/home/components/homeList'
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
        ]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style>
    .el-tabs__nav-wrap::after{
        background-color: #fff;
    }
</style>
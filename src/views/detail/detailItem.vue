<template>
<div>
    <div>
      <div class="goods_tags">{{detailList.type}}</div>
      <div class="detail_item" v-for="(item,index) in goodList">
        <div class="detail_item_img"><img :src="item.img"></div>
        <div class="detail_item_info">
          <div class="detail_item_title">{{item.title}}</div>
          <div class="detail_item_dec">四季奶茶搭配特选植脂末，经由黄金比例调和</div>
          <div class="detail_item_sale">月售{{item.sale}}</div>
          <div class="detail_item_price">
            <span class="detail_item_money">${{item.price}}</span>
            <span v-if="item.specification === 2" class="detail_choose" @click="chooseType(item)">选规格</span>
            <span v-else class="detail_choose">＋</span>
          </div>
        </div>
      </div>
    </div>
    <detailDrawer ref="drawer"></detailDrawer>
</div>
</template>

<script>
// import detailSmallItem from '@/views/detail/detailSmallItem'
import detailDrawer from '@/views/detail/detailDrawer'
export default {
  props:{
    detailList:Object
  },
  components:{
    detailDrawer
  },
  data(){
    return{
      goodList:[]
    }
  },
  created(){
    this.goodList = this.detailList.list
    for(let i = 0;i<this.goodList.length;i++){
      this.goodList[i].img = require('@/assets/img/detail/' + this.goodList[i].img + '.png')
    }
  },
  methods:{
    chooseType(index){
      this.$emit('chooseType',index);
    },
    // dropDrawer(index){
    //   this.$refs.drawer.handleOn(index)
    // }
  }
}
</script>

<style scoped>
  .detail_item{
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    padding: 1rem;
  }
  .detail_item_img{
    height: 5rem;
    width: 5rem;
    border-radius: 0.2rem;
    border: 1px solid #eee;
    margin-right: 0.5rem;
  }
  .detail_item_img img{
    height: 100%;
    border-radius: 0.2rem;
  }
  .detail_item_info{
    width: calc(100% - 5.5rem);
    /* display: flex;
    flex-direction:column;
    justify-content: space-around; */
  }
  .detail_item_info div{
    margin: 0.1rem 0;
  }
  .detail_item_title{
    color: #111;
    font-weight: 550;
  }
  .detail_item_dec,.detail_item_sale{
    color: #888;
    font-size: 0.6rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .detail_item_price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: red;
    font-weight: 550;
  }
  .detail_choose{
    color: #fff;
    background-color: var(--ele-color);
    padding: 0.2rem 0.5rem;
    border-radius: 0.8rem;
    font-size: 0.6rem;
  }
  .goods_tags{
    padding: 0.3rem 0.5rem;
    text-align: left;
    background-color: rgb(236, 236, 236);
    color: #111;
    font-size: 0.6rem;
    font-weight: 550;
  }
</style>
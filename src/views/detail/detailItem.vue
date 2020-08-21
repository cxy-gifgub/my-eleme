<template>
<div>
  <div v-for="item in detailList">
    <detailSmallItem :list="item"></detailSmallItem>
  </div>
</div>
</template>

<script>
import detailSmallItem from '@/views/detail/detailSmallItem'
export default {
  props:{
    detailList:Array
  },
  components:{
    detailSmallItem
  },
  created(){
    console.log(this.detailList);
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
</style>
<template>
  <div>
    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      :size="size"
      :with-header="false">
      <div class="goods_block">
        <div class="goods_img"><img :src="goodInfo.img"></div>
        <div class="goods_info">
          <div class="goods_name">{{goodInfo.title}}</div>
          <div class="goods_hadChoose">已选</div>
          <div class="goods_price">￥{{goodInfo.price}}</div>
        </div>
      </div>
      <div v-for="list in goodInfo.specification_info">
        <goodsSpeTags :tagsList="list" ref="goods" :key="id" />
      </div>
      <div class="finish_btn" @click="finish">
        选好了
      </div>
    </el-drawer>
  </div>
</template>

<script>
import goodsSpeTags from '@/views/detail/goodsSpeTags'
export default {
  components:{
    goodsSpeTags
  },
  data() {
    return {
      drawer: false,
      direction: 'btt',
      size:'85%',
      goodInfo:{},
      id:+new Date()
    }
  },
  created(){
  
  },
  methods: {
    handleOn(index){
      this.goodInfo = index;
      this.drawer = true
    },
    finish(){
      this.drawer = false;
      let smalltags = [];
      const product = {}
      for(let i = 0;i < this.goodInfo.specification_info.length;i++){
        if (this.$refs.goods[i].finish()) {
          smalltags.push(this.$refs.goods[i].finish())
        }
      }
      product.title = this.goodInfo.title
      product.price = this.goodInfo.price
      product.tags = smalltags
      product.id = this.goodInfo.id
      product.img = this.goodInfo.img
      this.$store.commit('addCart',product)
      //重置小标签的值
      this.reset()
    },
    reset() {
      this.id = +new Date()
    },
    
  }
};
</script>

<style scoped>
  .el-drawer.btt{
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    outline: none;
  }
  .goods_block{
    height: 6rem;
    display: flex;
    align-items: center;
    padding: 1rem;
  }
  .goods_img{
    height: 5rem;
    width: 5rem;
  }
  .goods_img img{
    height: 100%;
    width: 100%;
  }
  .goods_info{
    width: 60%;
    height: 5rem;
    margin-left: 1rem;
    display: flex;
    flex-direction:column;
  }
  .goods_name{
    font-weight: 550;
    color: #111;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.2rem;
  }
  .goods_hadChoose{
    color: #888;
    font-size: 0.6rem;
  }
  .goods_price{
    color: red;
    font-weight: 550;
    margin-top: auto;
  }

  .choose_tags{
    color: #111;
    font-size: 1rem;
    font-weight: 550;
    margin: 0.2rem;
  }

  .finish_btn{
    background-color: var(--ele-color);
    color: #fff;
    font-weight: 550;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 1rem;
    width: 90%;
    height: 2rem;
    border-radius: 1rem;
    left: 50%;
    margin-left: -45%;
  }
  .el-drawer__open .el-drawer.btt{
    outline: none;
  }
</style>
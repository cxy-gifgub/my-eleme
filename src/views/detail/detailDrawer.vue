<template>
  <div>
    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      :size="size"
      :with-header="false">
      <div class="goods_block">
        <div class="goods_img"><img src=""></div>
        <div class="goods_info">
          <div class="goods_name">名字</div>
          <div class="goods_hadChoose">已选</div>
          <div class="goods_price">￥13.8</div>
        </div>
      </div>
      <div class="choose_block">
        <div class="choose_tags">选标签</div>
        <div class="goods_choose_item">
          <div class="choose_small">
            芜湖
          </div>
        </div>
      </div>
      <div class="finish_btn">
        选好了
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
    data() {
      return {
        drawer: false,
        direction: 'btt',
        size:'85%'
      }
    },
    methods: {
      handleOn(index){
        console.log(index);
        this.drawer = true
      }
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
  .goods_choose_item{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .choose_small{
    min-width: 30%;
    max-width: 30%;
    margin: 0.2rem 0.3rem;
    flex: 1;
    height: 2rem;
    background-color: #eee;
    color: #888;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
  }
  .choose_tags{
    color: #111;
    font-size: 1rem;
    font-weight: 550;
    margin: 0.2rem;
  }
  .choose_block{
    padding: 1rem;
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
</style>
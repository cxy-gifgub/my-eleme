<template>
  <div id="category_nav">
    <div class="nav_content">
      <div class="nav_title">
        <i class="el-icon-arrow-left"></i>
        <span class="nav_title">下午茶</span>
      </div>
      <div class="nav_search">
        <i class="el-icon-search search_icon"></i>
        <span>搜索商家、商品名称</span>
      </div>
      <div class="nav_cart">
        <i class="el-icon-shopping-cart-2"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #category_nav{
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    color: #fff;
  }
  .nav_content{
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }
  .nav_cart{
    margin-left: auto;
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  .nav_search{
    display: flex;
    flex: 1;
    align-items: center;
    background-color: #fff;
    border-radius: 1.5rem;
    margin-right: 0.5rem;
    height: 1.5rem;
    
    box-shadow: 5px 5px 10px rgba(141, 205, 248, 0.637) inset;
  }
  .nav_search span{
    font-size: 0.8rem;
    color: rgb(86, 146, 224);
    margin-left: 0.3rem;
    font-family: Arial, Helvetica, sans-serif;
  }
  .nav_title{
    margin: 0 0.3rem;
    font-weight: 550;
    font-size: 1.2rem;
  }
  .search_icon{
    color: rgb(81,148,247);
    margin-left: 0.3rem;
  }
</style>
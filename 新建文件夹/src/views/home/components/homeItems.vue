<template>
  <div id="home_items">
      <div class="small_items" v-for="item in itemList">{{item.title}}</div>
  </div>
</template>

<script>
export default {
    props:{
        itemList:Array
    },
    created(){
        console.log(this.itemList);
    }
}
</script>

<style>
    #home_items{
        display: flex;
        flex-wrap: wrap;
    }
    .small_items{
        height: 4rem;
        max-width: 20%;
        min-width: 15%;
        padding: 0 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
        flex: 1;
    }
</style>
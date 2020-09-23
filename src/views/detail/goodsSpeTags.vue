<template>
  <div>
    <div class="choose_block">
      <div class="choose_tags">{{tagsList.type}}</div>
      <div class="goods_choose_item">
        <div class="choose_small" v-for="(item,index) in tagsList.list" :key="index" :class="{active_tags:index === currentIndex}" @click="changeTag(index,item)">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tagsList: Object,
  },
  data(){
      return{
          currentIndex:-1,
          tags:"",
      }
  },
  methods:{
      changeTag(index,item){
          this.currentIndex = index
          this.tags = item
      },
      finish(){
        this.currentIndex = -1;
        return this.tags
      }
  }
};
</script>

<style scoped>
.active_tags{
    color: rgb(88,186,248)!important;
    background-color: rgb(211,239,253)!important;
}
.choose_block {
  padding: 1rem;
}
.choose_tags {
  color: #111;
  font-size: 1rem;
  font-weight: 550;
  margin: 0.2rem;
}
.goods_choose_item {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.choose_small {
  min-width: 30%;
  max-width: 30%;
  margin: 0.2rem 0.3rem;
  flex: 1;
  height: 2rem;
  font-weight: 550;
  background-color: #eee;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
}
</style>
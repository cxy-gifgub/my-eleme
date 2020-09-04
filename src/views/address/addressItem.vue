<template>
  <div>
    <div class="add_item" v-for="item in addList" @click="choose(item)">
      <div class="add_left">
        <div class="add_title">{{item.add}}</div>
        <div class="add_content">{{item.add_number}}</div>
        <div class="add_call">{{item.name}} {{item.phone}}</div>
      </div>
      <div class="add_right">
        <i class="el-icon-edit-outline"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    addList:Array
  },
  methods:{
    choose(item){
      this.$emit('chooseAdd',item)
    }
  }
}
</script>

<style scoped>
  .add_item{
    display: flex;
    align-items: center;
    padding: 0.5rem 1.5rem;
    background-color: #fff;
    border-bottom: 1px solid rgb(236, 236, 236)
  }
  .add_left div{
    margin: 0.3rem 0;
  }
  .add_title{
    color:#111;
    font-weight: 550;
  }
  .add_content{
    font-size: 0.8rem;
    color:#111;
    font-weight: 550;
  }
  .add_call{
    color: rgb(198,198,198);
    font-size: 0.8rem;
  }
  .add_right{
    align-items: center;
    margin-left: auto;
    color: rgb(198,198,198);
    font-size: 1.5rem;
  }
</style>
<template>
  <div>
    <div class="detail_item">
      <div class="detail_item_img"><img :src="require('@/assets/img/home/kda.jpg')"></div>
      <div class="detail_item_info">
        <div class="detail_item_title">标题</div>
        <div class="detail_item_dec">四季奶茶搭配特选植脂末，经由黄金比例调和</div>
        <div class="detail_item_sale">月售85</div>
        <div class="detail_item_price">
          <span class="detail_item_money">$3.88</span>
          <span class="detail_choose" @click="chooseType">选规格</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    list:Array
  },
  created(){
    
  },
  methods:{
    chooseType(){
      this.$emit('chooseType');
    }
  }
}
</script>

<style>

</style>
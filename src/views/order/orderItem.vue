<template>
  <div>
    <div class="strip">
      <div class="strip_title">
        <slot name="title"></slot>
      </div>
      <div class="more_block">
        <div class="strip_content">
          <slot name="content"></slot>
        </div>
        <div class="choose_icon">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.strip{
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
}
.strip_content{
  color: rgb(81,179,247);
  margin-left: auto;
  margin-right: 0.5rem;
}
.strip_title{
  color: #111;
}
.more_block{
  margin-left: auto;
  display: flex;
  align-items: center;
}
.choose_icon{
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  font-weight: 550;
}
.item_content{
  padding: 1rem;
  background-color: #ccc;
  font-size: 0.8rem;
  color: #888;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
<template>
  <div class="fiexd_bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
  .fiexd_bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3rem;
    line-height: 3rem;
    z-index: 1;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 -1px 3px rgb(223, 223, 223);
  }
  .left,.right{
      width: 30%;
  }
  .center{
      flex: 1;
  }
</style>
<template>
  <div class="tab-bar-item" @click="jump">
      <slot v-if="!isActive" name="item-icon"></slot>
      <slot v-else name="item-icon-active"></slot>
      <div :class="{'active':isActive}">
        <slot name="item-text"></slot>
      </div>
  </div>
</template>

<script>
export default {
    name:"tabBarItem",
    props:{
      path:String
    },
    methods:{
      jump(){
        this.$router.push(this.path).catch(err => err),
        console.log("我是path",this.path);
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      }
    }
}
</script>

<style>
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 3rem;
    font-size: 0.6rem;
    color: #bcc3ca;
    font-weight: 550;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .tab-bar-item img{
      height: 50%;
      vertical-align: middle;
      margin-bottom: 0.1rem;
  }
  .active{
    color: var(--ele-color);
  }
</style>
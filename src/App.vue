<template>
  <div id="app">
      <transition name="fade" mode="out-in">
    <keep-alive exclude="detail">
        <router-view></router-view>
    </keep-alive>
      </transition>
    <maintabbar v-if="!this.$route.meta.navDontShow"></maintabbar>
  </div>
</template>

<script>

import maintabbar from '@/components/common/tabbar/maintabbar'
export default {
  name: 'App',
  components: {
    maintabbar
  }
}
</script>

<style>
@import "./assets/css/base.css";
.fade-enter {
   opacity: 0;
}
.fade-leave{
　　opacity: 1;
}
.fade-leave-active,.fade-enter-active {
　　transition:opacity 0.3s;
}
</style>

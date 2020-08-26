<template>
  <div id="app">
    <router-view></router-view>
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

</style>

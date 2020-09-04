<template>
  <div>
    <div class="nav_address">
      <NavBar>
        <div slot="left" @click="back"><i class="el-icon-arrow-left"></i></div>
        <div slot="center">选择收获地址</div>
        <div slot="right" class="new_address" @click="addNew">新增地址</div>
      </NavBar>
    </div>
    <addressItem v-if="addressList" :addList="addressList" @chooseAdd="chooseAdd"></addressItem>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
import addressItem from '@/views/address/addressItem'
export default {
  components:{
    NavBar,
    addressItem,
  },
  data(){
    return{
      addressList:[]
    }
  },
  created(){
    if(this.$store.state.addressList){
      this.addressList = this.$store.state.addressList
    }
  },
  methods:{
    addNew(){
      this.$router.push('/address_new')
    },
    back(){
      this.$router.go(-1)
    },
    chooseAdd(item){
      let item1 = JSON.stringify(item)
      this.$router.replace({
        path:'/order',
        query:{address:item1}
      })
    }
  }
}
</script>

<style>
  .nav_address{
    background-color: var(--ele-color);
    color: #fff;
  }
  .new_address{
    font-size: 0.9rem;
  }
</style>
<template>
  <div>
    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      :withHeader="false"
    >
    <div>
      <div class="drawer_title">支付方式</div>
      <div class="payment_way">
        <div class="payment_items" v-for="(item,index) in paymentList" @click="choosePay(index)">
          <div class="payment_title">{{item}}</div>
          <div class="check_box" :class="{check_this:index === curr}"><i class="el-icon-check"></i></div>
        </div>
      </div>
    </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
      return {
        drawer: false,
        direction: 'btt',
        radio: '1',
        paymentList:['支付宝','花呗','微信支付'],
        curr:0
      };
    },
    methods: {
      showDrawer(){
        this.drawer = !this.drawer
      },
      choosePay(index){
        this.curr = index;
        this.drawer = !this.drawer;
        this.$emit('check_pay',this.paymentList[index])
      }
    }
};
</script>

<style>
.drawer_title{
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
}
.payment_items{
  display: flex;
  margin: 1rem 0;
  justify-content: space-between;
  align-items: center;
}
.payment_way{
  padding: 1rem;
}
.check_box{
  color: #fff;
  font-weight: 550;
  background-color: #bbb;
  border-radius: 50%;
}
.check_this{
  background-color: rgb(9,241,117);
}
</style>
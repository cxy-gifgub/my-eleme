<template>
  <div>
    <div class="nav_bar">
      <NavBar>
        <div slot="left" @click="back"><i class="el-icon-arrow-left"></i></div>
        <div  slot="center">确认订单</div>
      </NavBar>
    </div>
    <div id="order_content">
      <div class="send_block">
        <div class="send_address" @click="chooseAddress">
          <div v-if="!addressState" class="choose_address">
            选择地址
          </div>
          <div class="address_content">
            <div class="address_info">{{address.add}}{{address.add_number}}</div>
            <div class="send_user">{{address.name}} {{address.phone}}</div>
          </div>
          <div class="more_block">
            <div class="choose_icon">
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </div>
        <orderItem>
          <div slot="title">立即送出</div>
          <div slot="content">大约16:55送达</div>
        </orderItem>
        <div @click="showDrawer">
          <orderItem>
            <div slot="title">支付方式</div>
            <div slot="content">{{payment}}</div>
          </orderItem>
        </div>
      </div>
      <div class="cart_list">
        <div class="cart_list_item" v-for="list in this.$store.state.cartList">
          <div class="item_img">
            <img :src="list.img">
          </div>
          <div class="item_info">
            <div class="info_title">{{list.title}}</div>
            <div class="info_tags">
              <span v-for="item in list.tags">{{item}}/</span>
              </div>
            <div class="info_count">x{{list.count}}</div>
          </div>
          <div class="item_price">¥{{list.price}}</div>
        </div>
        <div class="other_info">
          <div class="send_price">
            <div class="send_title">配送费(饿了么专送)</div>
            <div class="send_money">¥<span class="send_money_span">3</span></div>
          </div>
          <div class="ticket">
            <div class="ticket_icon">
              <i class="el-icon-s-ticket"></i>
            </div>
            <div class="ticket-title">红包/抵用券</div>
            <div class="more_block">
              <!-- <div class="ticket_state">
                无红包可用
              </div> -->
              <div class="choose_icon">
                <i class="el-icon-arrow-right"></i>
              </div>
          </div>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="price_block">
          <div class="total_price">
            小计¥<span class="price_span">{{this.$store.state.totalPrice + 3}}</span>
          </div>
        </div>
      </div>
      <div class="order_remarks">
        <orderItem @click.native="toRemark">
          <div slot="title">备注</div>
        </orderItem>
        <div class="content_mark" v-if="remark">{{remark}}</div>
        <orderItem>
          <div slot="title">餐具份数</div>
        </orderItem>
        <orderItem>
          <div slot="title">发票</div>
        </orderItem>
      </div>
    </div>
    <fiexdBar class="bottom_bar">
      <div class="pay_money" slot="center">
        合计:<span class="money_num">¥{{this.$store.state.totalPrice + 3}}</span>
      </div>
      <div  slot="right">
        <span class="pay_btn">去支付</span>
      </div>
    </fiexdBar>
    <orderDrawer ref="drawer" @check_pay="check_pay"></orderDrawer>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
import fiexdBar from '@/components/common/fixedBar/fiexdBar'
import orderItem from '@/views/order/orderItem'
import orderDrawer from '@/views/order/orderDrawer'
export default {
  components:{
    NavBar,
    fiexdBar,
    orderItem,
    orderDrawer
  },
  data(){
    return{
      address:{},
      payment:'支付宝',
      remark:'',
      addressState:false
    }
  },
  activated(){
    this.getAddress()
    this.getRemark()
  },
  created(){
    
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    showDrawer(){
      console.log('点击了');
      this.$refs.drawer.showDrawer()
    },
    chooseAddress(){
      this.$router.push('/address')
    },
    check_pay(pay){
      this.payment = pay
    },
    toRemark(){
      this.$router.push('/orderRemark')
    },
    getAddress(){
      if(this.$route.query.address){
      this.address = JSON.parse(this.$route.query.address)
      this.addressState = true
      }
    },
    getRemark(){
      if(this.$route.query.remark){
        this.remark = this.$route.query.remark
      }
    }
  }
}
</script>

<style>
.nav_bar{
  background-color: rgb(81,179,247);
  color: #fff;
}
#order_content{
  padding: 0.8rem;
  padding-bottom: 4rem;
}
.send_block{
  height: 10rem;
  border-radius: 0.4rem;
  background-color: #fff;
  padding: 0.5rem;
  box-shadow: 1px 1px 5px rgb(226, 224, 224);
}
.send_address{
  height: 4rem;
  display: flex;
  align-items: center;
}
.address_info{
  color: #111;
  font-size: 1rem;
  font-weight: 550;
}
.choose_icon{
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  font-weight: 550;
}
.send_user{
  font-size: 0.6rem;
  color: #888;
}
.send_time{
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
}
.send_time_service{
  color: rgb(81,179,247);
  margin-left: auto;
  margin-right: 0.5rem;
}
.send_time_title{
  color: #111;
}
.payment{
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
}
.payment_title{
  color: #111;
}
.payment_content{
  color: rgb(81,179,247);
  margin-left: auto;
  margin-right: 0.5rem;
}
.more_block{
  margin-left: auto;
  display: flex;
  align-items: center;
}
.cart_list{
  padding: 0.5rem;
  border-radius: 0.4rem;
  box-shadow: 1px 1px 5px rgb(226, 224, 224);
  background-color: #fff;
  margin: 1rem 0;
}
.cart_list_item{
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
}
.item_img{
  height: 3rem;
  width: 3rem;
  margin-right: 0.5rem;
}
.item_img img{
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
}
.info_title{
  color: #111;
  font-size: 0.8rem;
}
.info_tags{
  color: #888;
  font-size: 0.6rem;
}
.info_count{
  color: #888;
  font-size: 0.6rem;
}
.item_price{
  margin-left: auto;
  margin-right: 0.5rem;
  font-weight: 550;
}
.send_price{
  color: #111;
  margin: 0.5rem 0;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.send_money_span{
  font-weight: 550;
  font-size: 1rem;
}
.ticket{
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  padding: 0.5rem 0;
}
.ticket_icon{
  display: flex;
  align-items: center;
  color: rgb(245, 58, 25);
  margin-right: 0.5rem;
}
.ticket_state{
  color: #888;
  font-size: 0.6rem;
}
.price_block{
  padding: 0.5rem;
  color: #111;
  display: flex;
  font-size: 0.8rem;
}
.total_price{
  margin-left: auto;
}
.price_span{
  font-size: 1.4rem;
  font-weight: 550;
}
.pay_money{
  text-align: right;
}
.pay_btn{
  background-color: var(--ele-color);
  color: #fff;
  border-radius: 1.5rem;
  padding: 0.6rem 1.4rem;
}
.money_num{
  color: rgb(245, 58, 25);
  font-size: 1.4rem;
  font-weight: 550;
}
.order_remarks{
  border-radius: 0.4rem;
  background-color: #fff;
  padding: 0.5rem;
  box-shadow: 1px 1px 5px rgb(226, 224, 224);
}
.bottom_bar{
  background-color: #fff;
}
.content_mark{
  padding: 1rem;
  background-color: #f5f5f5;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  color: #888;
  font-family: Arial, Helvetica, sans-serif;
}
.choose_address{
  color: var(--ele-color);
}
</style>
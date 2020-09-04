<template>
  <div id="new_add">
    <div class="nav_color">
      <NavBar>
        <div slot="left" @click="back"><i class="el-icon-arrow-left"></i></div>
        <div slot="center">
          新增地址
        </div>
      </NavBar>
    </div>
    <div class="address_block">
      <div class="add_items">
        <div class="add_title">联系人</div>
        <div class="right_input">
          <input class="input_new" v-model="name" />
        </div>
      </div>
      <div class="add_items">
        <div class="add_title">电话</div>
        <div class="right_input">
          <input class="input_new" type="number" maxlength="11" v-model="phone" />
        </div>
      </div>
      <div class="add_items">
        <div class="add_title">地址</div>
        <div class="right_input">
          <input class="input_new" v-model="add" />
        </div>
      </div>
      <div class="add_items">
        <div class="add_title">门牌号</div>
        <div class="right_input">
          <input class="input_new" v-model="add_number" />
        </div>
      </div>
    </div>
    <div class="submit_btn" @click="submit">
      确定
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
export default {
  components:{
    NavBar
  },
  data(){
    return{
      name:'',
      phone:'',
      add:'',
      add_number:'',
    }
  },
  methods:{
    submit(){
      let address = {}
      address.name = this.name;
      address.phone = this.phone;
      address.add = this.add;
      address.add_number = this.add_number;
      this.$store.commit('addressAdd',address)
      this.$router.replace({
        path:'/address'
      }).catch(err => err)
    },
    back(){
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
  #new_add{
    background-color: #eee;
    height: 100vh;
  }
  .add_items{
    display: flex;
    align-items: center;
    padding: 0.8rem 1rem;
    background-color: #fff;
    border-bottom: 1px solid rgb(247, 247, 247);
  }
  .add_title{
    width: 3rem;
    font-weight: 550;
    color:#111;
    font-size: 0.8rem;
  }
  .nav_color{
    background-color: var(--ele-color);
    color: #fff;
  }
  .input_new{
    border: none;
    outline: 0;
    padding: 0 1rem;
    color: rgb(102,102,102);
    font-size: 0.8rem;
  }
  .right_input{
    display: flex;
    align-items: center;
  }
  .address_block{
    margin-top: 1rem;
  }
  .submit_btn{
    background-color: rgb(97,212,111);
    color: #fff;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    padding: 0.5rem 0;
  }
</style>
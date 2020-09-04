<template>
  <div id="remake_block">
    <div class="mark_title">
      <NavBar>
        <div slot="center">填写备注</div>
      </NavBar>
    </div>
    <div class="mark_content">
      <div class="mark_content_title"><i class="el-icon-info"></i>请输入您对订单的备注：</div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 20}"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
      <div class="submit_btn" @click="sendMark">确定</div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
export default {
  components:{
    NavBar
  },
  data() {
    return {
      textarea: ''
    }
  },
  methods:{
    sendMark(){
      this.$router.replace({
        path:'/order',
        query:{remark:this.textarea}
      })
    }
  }
}
</script>

<style>
  .mark_title{
    color: #fff;
    background-color: var(--ele-color);
  }
  .mark_content{
    padding: 1rem;
  }
  .mark_content_title{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0.5rem;
    color: #888;
    font-size: 0.8rem;
  }
  .submit_btn{
    background-color: rgb(97,212,111);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.2rem;
    padding: 0.5rem 0;
    margin: 1rem 0;
  }
</style>
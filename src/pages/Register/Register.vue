<template>
  <div id="register">
    <h4>用户名</h4>
    <input v-model="username" placeholder="用户名">
    <!-- <p class="error">当前用户名已注册</p> -->
    <h4>密码</h4>
    <input v-model="password" type="password" placeholder="密码" @keyup.enter="onRegister" >
    <!-- <p class="error">当前用户名已注册</p> -->
    <el-button id="register-btn" size="medium" @click="onRegister">立即注册</el-button>
    <p class="notice">已有账号？<router-link to="/login">立即登录</router-link></p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
      username:'',
      password:''
    }
  },
  methods:{
    ...mapActions([
      'register'
    ]),
    onRegister(){
      console.log(this.username,this.password)
      this.register({username:this.username,password:this.password})
      .then(()=>{
        this.$router.push({path:'/'})
      })
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/base.less";
#login, #register {
  display: grid;
  justify-content: center;
  padding-top: 30px;
  
  h4 {
    margin: 10px 0 5px;
  }

  p {
    margin: 5px 0;
  }

  input {
    width: 400px;
  }

  .error {
    font-size: 12px;
    color: #f00;
  }

  button {
    margin-top: 20px;
    justify-self: start;
  }

  .notice {
    font-size: 12px;
    color: @textLighterColor;
    text-align: center;
    margin-top: 30px;

    a {
      color: @themeColor;
    }
  }
}
#register-btn{
  color: #ffa600;

}
#register-btn:hover{
  // color: #ffa600;
  background-color: #ffa600;
  color:#fff ;
  // box-shadow:0px 5px 1px 5px rgba(0, 0, 0, 0.05);
  
             
}
</style>

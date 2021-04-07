<template>
  <header :class="{'login':isLogin, 'no-login':!isLogin}" >
      <template v-if="!isLogin">
          <h1>Study Together</h1>
          <p>博客</p>
          <div class="btns">
             <el-button class="btn">用户登陆</el-button>
            <el-button class="btn">注册账户</el-button>
        </div>
      </template>
      <template v-if="isLogin">
          <h1>Study Together</h1>
          <i class="edit el-icon-edit"></i>
          <img class="avatar" :src="user.avatar" :title="user.name" :alt="user.name">
          <!-- <img class="avatar" src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt=""> -->
      </template>
    
  </header>
</template>

<script>
import{mapState,mapGetters,mapActions} from 'vuex'
import auth from '@/api/auth'
 window.auth = auth

export default {
  name: 'Header',
  data () {
    return {
    //   msg: 'Welcome to Your Vue.js App'
    // isLogin: true

    }
  },
  computed:{
    ...mapGetters([
      'isLogin',
      'user'
    ])
  },
  created(){
    this.checkLogin()
  },
  methods:{
    ...mapActions([
      'checkLogin'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>

@import "../assets/base.less";
header.no-login{
    padding: 0 12% 30px 12%;
    background-color: @bgColor;
    display: grid;
    justify-items: center;

    h1{
    color: #fff;
    font-size: 40px;
    margin: 60px 0 0 0 ;
    text-transform: uppercase;

}
    p{
    margin: 12px 0 0 0;
    color:#fff;
}
//     .btns{
//     margin-top: 20px;
    
// }
button{
    margin:20px 5px 0;
}
}

// el-button{
//   background-color: none;
// }



header.login{
    display: flex;
    align-items: center;
    background-color: @bgColor;

    h1{
    color: #fff;
    font-size: 40px;
    margin: 0 0 0 0 ;
    text-transform: uppercase;
    flex: 1;
}
    .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;
  }
}




.edit {
    color: #fff;
    font-size: 30px;
  }



.btns{
    margin-top: 20px;
}
button{
    margin:20px 5px 0;
}
</style>



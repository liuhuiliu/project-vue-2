<template>
  <header :class="{'login':isLogin, 'no-login':!isLogin}" >
      <template v-if="!isLogin">
          <h1>Study Together</h1>
          <p>博客</p>
          <div class="btns">
             <router-link to="/login"><el-button class="btn">用户登陆</el-button></router-link>
            <router-link to="/register"><el-button class="btn">注册账户</el-button></router-link>
        </div>
      </template>
      <template v-if="isLogin">
          <h1><router-link to="/">Study Together</router-link></h1>
          <div class="create">
            <router-link to="/create" alt="创建新博客" >
            <i class="edit el-icon-plus"></i>
            
            </router-link>
            <ul><li>创建新博客</li></ul>
          </div>
          
          <!-- <i class="edit el-icon-plus"></i> -->
          <div class="user">
            <img class="avatar" :src="user.avatar" :title="user.name" :alt="user.username">
            <ul>
              <li><router-link :to="`/my`">我的</router-link></li>
              <li><a href="#" @click="onLogout">注销</a></li>
            </ul>
          </div>
          
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
    ]),
    // ...mapState([
    //   'isLogin',
    //   'user'
    // ])
  },
  created(){
    this.checkLogin()
  },
  methods:{
    ...mapActions([
      'checkLogin',
      'logout'
    ]),

    onLogout(){
    this.logout()
    // console.log('done')
    this.$router.push({path:'/'})
  }
  },
  
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

    .btn{
      color:#fff;
      background-color:#ffa600;
    }
    .btn:hover{
      color:#ffa600;
      background-color:#fff;;
      
    }

    h1{
    color: #fff;
    font-size: 40px;
    margin: 60px 0 0 0 ;
    text-transform: uppercase;

}
    p{
    font-size: 18px;
    margin: 12px 0 0 0;
    color:#fff;
    
}
//     .btns{
//     margin-top: 20px;
    
// }
button{
    margin:20px 5px 0;
   span{
     a{
       text-decoration: none;
       color: #fff;
     }
   }
  }
button:hover {
  span{
    a{
      color:#ffa500;
    }
  }
} 
}


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
    a{
      color: #fff;
    }
}
    .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;
  }
  .edit {
    color: #fff;
    font-size: 30px;
  }
  .user{
  position: relative;
  ul{
    display: none;
    position: absolute;
    right: 0;
    list-style: none;
    border: 1px solid #eaeaea;
    margin: 0;
    padding: 0;
    background-color: #fff;

    a{
      text-decoration:none;
      color: #333;
      font-size: 12px;
      display: block;
      padding: 5px 10px;
      &:hover{
        background-color: #eaeaea;
      }
    }
  }
  &:hover ul{
    display: block;
  }
}
.create{
  position: relative;
  ul{
    width: 70px;
    display:none;
    
    position: absolute;
    right: -35px;
    list-style: none;
    border: 1px solid #eaeaea;
    margin: 2 2px;
    padding: 0 10px;
    background-color: #fff;
  }
  &:hover ul{
    display:block;
  }
  
  li{
    // overflow: hidden;
    white-space:nowrap;
    color: #333;
    font-size: 14px;
    text-align: center;
    // float: left;
    
  }
}
}









.btns{
    margin-top: 20px;
}
button{
    margin:20px 5px 0;
}


</style>



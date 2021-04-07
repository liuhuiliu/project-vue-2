<template>
  <div id="index">
   <!-- index页面
   <p>
     test
   </p>
   <el-button @click="onClick1">默认按钮1</el-button>
   <el-button @click="onClick2">默认按钮2</el-button> -->
   <section class="blog-posts">
     <div class="item">
       <figure class="avatar">
         <img src="../../assets/userpic2.jpg" alt="">
         <figcaption>
           username
         </figcaption>
       </figure> 
       <h3>前端异步简述 <span>3天前</span> </h3>
       <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>    
     </div>
     <div class="item">
       <figure class="avatar">
         <img src="../../assets/userpic2.jpg" alt="">
         <figcaption>
           username
         </figcaption>
       </figure>
       <h3>前端异步简述 <span>3天前</span> </h3>
       <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>      
     </div>
     <div class="item">
       <figure class="avatar">
         <img src="../../assets/userpic2.jpg" alt="">
         <figcaption>
           username
         </figcaption>
       </figure>
       <h3>前端异步简述 <span>3天前</span> </h3>
       <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>      
     </div>
     <div class="item">
       <figure class="avatar">
         <img src="../../assets/userpic2.jpg" alt="">
         <figcaption>
           username
         </figcaption>
       </figure>
       <h3>前端异步简述 <span>3天前</span> </h3>
       <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>      
     </div>
     <div class="item">
       <figure class="avatar">
         <img src="../../assets/userpic2.jpg" alt="">
         <figcaption>
           username
         </figcaption>
       </figure>
       <h3>前端异步简述 <span>3天前</span> </h3>
       <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>      
     </div>
     <div class="item">
       <figure class="avatar">
         <img src="../../assets/userpic2.jpg" alt="">
         <figcaption>
           username
         </figcaption>
       </figure>
       <h3>前端异步简述 <span>3天前</span> </h3>
       <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>      
     </div>
   </section>
  </div>
  
</template>

<script>
import request from '@/helpers/request.js'
import auth from'@/api/auth.js'

window.request = request
window.auth = auth

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    onClick1(){
      this.$message('hello')
    },
    onClick2(){
       this.$alert('test content', 'title', {
          confirmButtonText: 'button text',
          callback: action => {
            console.log('done')
            this.$message('hello')
          }
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped >
@import "../../assets/base.less";
//  #index{
//     color:red;
//   }
  p{
    // color: @themeColor;
  }
 .item{
   display: grid;
   grid: auto auto / 80px 1fr;
   margin: 20px 0;

   .avatar{
     grid-column: 1;//列
     grid-row: 1/ span 2;
     justify-self: center;
    //  margin-left: 0;
    margin: 20px auto auto auto;
     text-align: center;
   }
   img{
     width: 60px;
     height: 60px;
     border-radius: 50%;
   }
   figcaption{
     font-size: 12px;
     color: @textLighterColor;
   }
 }
  h3{
    grid-column: 2;
    padding-left: 10px;
    &>span{
      color: @textLighterColor;
      font-size :12px;
    }
  }
  p{
    padding-left: 10px;
    grid-column: 2;
    grid-row: 2;
    margin-top: 0;
  }


</style>

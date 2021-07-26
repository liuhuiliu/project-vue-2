<template>
  <div id="index">
   <!-- index页面
   <p>
     test
   </p>
   <el-button @click="onClick1">默认按钮1</el-button>
   <el-button @click="onClick2">默认按钮2</el-button> -->
   <section class="blog-posts">
     <router-link class="item" :to="`/detail/${blog.id}`" v-for="(blog,index) in blogs" :key="index">
       <figure class="avatar">
         <img :src="blog.user.avatar" :alt="blog.user.username">
         <figcaption>
           {{blog.user.username}}
         </figcaption>
       </figure> 
       <h3>{{blog.title}} <span>{{friendlyDate(blog.createdAt)}}</span> </h3>
       <p>{{blog.description}}</p>    
     </router-link>
     
   </section >
   <section class="pagination">
     <el-pagination 
     layout="prev, pager, next" 
     :total="total"
     @current-change="onPageChange"
     :page-size="pageLength"
     :current-page="this.page"
     >
  </el-pagination>
   </section>
  </div>
  
</template>

<script>
import request from '@/helpers/request.js'
import auth from'@/api/auth.js'
import blog from '@/api/blog'
window.request = request
window.auth = auth

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      blogs:[],
      total:undefined,
      page:undefined,
      totalPage:undefined,
      pageLength:undefined,
    }
  },
  created(){
    this.page = parseInt(this.$route.query.page)||1
    blog.getIndexBlogs({page:this.page}).then(res=>{
      // console.log(res)
      this.blogs = res.data
      this.total = res.total//首页所有贴子数量
      this.page = res.page//当前分页
      this.totalPage = res.totalPage//所有分页
      
      //页码尾页重新计算bug
      if(this.page<this.totalPage){
        this.pageLength = res.data.length
        // console.log('done')
      }else if(this.page==this.totalPage){
        console.log(res.data.length)
        this.pageLength=(this.total-res.data.length)/(this.totalPage-1)
        // console.log(this.pageLength)
      }
      
      // console.log(this.total)
      // console.log(this.page)
      // console.log(this.totalPage)
      
    })
  }
  ,
  methods:{
    // onClick1(){
    //   this.$message('hello')
    // },
    // onClick2(){
    //    this.$alert('test content', 'title', {
    //       confirmButtonText: 'button text',
    //       callback: action => {
    //         console.log('done')
    //         this.$message('hello')
    //       }
    //     });
    // }
    onPageChange(newPage){
      // console.log(newPage)
      blog.getIndexBlogs({page:newPage}).then(res=>{
        // console.log(res)
        this.blogs=res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({path:'/',query:{page:newPage}})
        
      })
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
  // p{
  //   // color: @themeColor;
  // }
 .item{
   display: grid;
   grid: auto auto / 80px 1fr;
   margin: 20px 0;
   word-wrap: break-word;
	 word-break: break-all;
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
a{
  color:black
}
.pagination{
  display: grid;
  justify-items: center;
}
</style>

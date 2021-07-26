<template>
  <div id="user">
   <section class="user-info">
      <img :src="user.avatar" :alt="user.username" class="avatar">
      <h3>{{user.username}}</h3>
    </section>
    <section>
    <router-link class="item" v-for="blog in blogs" :key= blog.id :to="`/detail/${blog.id}`">
      <div class="date">
        <span class="day">{{splitDate(blog.createdAt).date}}</span>
        <span class="month">{{splitDate(blog.createdAt).month}}</span>
        <span class="year">{{splitDate(blog.createdAt).year}}</span>
      </div>
      <h3>{{blog.title}}</h3>
      <p>{{blog.description}}</p>
      <div class="actions">
        <router-link :to="`/edit/${blog.id}`" >编辑</router-link>
        <a href="#" class="deleteBtn" @click.prevent="onDelete(blog.id)">删除</a>
      </div>
    </router-link>
    </section>
    <section class="pagination">
     <el-pagination 
     layout="prev, pager, next" 
     :total="total"
     @current-change="onPageChange"
     :page-size="pageLength"
     :current-page="currentPage"
     >
  </el-pagination>
    </section>
  </div>
</template>

<script>
import request from '@/helpers/request.js'
import auth from'@/api/auth.js'
import blog from '@/api/blog'
import {mapGetters} from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      blogs:[],
      // user:{},
      currentPage:undefined,
      total:undefined,
      pageLength:undefined, 
      totalPage:undefined,
    }
  },
  computed:{
    ...mapGetters(['user'])
  },

  created(){
    // this.userId=this.$route.params.userId//替换为computed的useridjieue
    this.currentPage = parseInt(this.$route.query.page)||1//注意
    console.log(this.currentPage)
    // console.log(this.user.id+'test')
    blog.getBlogsByUserId(this.user.id,{page:this.currentPage}).then(
      res=>{
        console.log(res)
        // console.log(typeof(res.page))
        this.currentPage=Number(res.page)
        this.total=res.total
        this.blogs=res.data
        this.totalPage = res.totalPage
      
      // if(res.data.length>0 ){
      //   // this.user= res.data[0].user//mapGetters替代
      //   console.log(res.data.length)
      // }
        if(this.totalPage==1){
          this.pageLength = Number(this.total)
        }else if(this.currentPage<this.totalPage){
          
          this.pageLength = Number(res.data.length)
        }else if(this.currentPage===this.totalPage){
          
          this.pageLength = (this.total-res.data.length)/(this.totalPage-1)
        }else{
          console.log('nothing')
        }
      }


    )
  },
  methods:{
    onPageChange(newPage){
      blog.getBlogsByUserId(this.user.id,{page: newPage}).then(res=>{
        console.log(res)
        console.log(newPage)
        this.blogs = res.data
        this.total = res.total
        this.currentPage = res.page
        this.$router.push({path:`/my`,query:{page: newPage}})
      })
    },
    splitDate(dataStr){
      let dateObj = typeof dataStr === 'object' ? dataStr:new Date(dataStr)
      let dateStr= dateObj.getDate();
      let MonthStr= (dateObj.getMonth()) +1;
      let YearStr= dateObj.getFullYear();
      // console.log(dateStr)
      // console.log(MonthStr)
      return{
        date: dateObj.getDate(),
        month: (dateObj.getMonth()) +1,
        year: dateObj.getFullYear(),
      }
    },
    async onDelete(blogId){
     this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          blog.deleteBlog({blogId}).then(()=>{
            this.$message({
              type: 'success',
              message: '删除成功!'
          });
          this.blogs = this.blogs.filter(blog =>blog.id !=blogId)
          // this.$router.go(0)//刷新
          // this.$router.push({path:'/my'})
          }).catch(console.log('cancel'))
          
        })
        //用async await的方法
        // await this.this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning',
        //   center: true
        // })
        // await blog.deleteBlog({blogId})
        // this.$message.success('done')
      
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/base.less";
#my,#user {
 
  .user-info {
    display: grid;
    grid: auto auto / 80px 1fr;
    
    margin-top: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ebebeb;

    .avatar {
      grid-column: 1;
      grid-row: 1 / span 2;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    h3 {
      grid-column: 2;
      grid-row: 1;
      margin-top: 10px;
    }
  }

  .item {
    display: grid;
    grid: auto  auto auto / 80px 1fr;
    margin: 20px 0;
    word-wrap: break-word;
	  word-break: break-all;
    
    .date {
      grid-column: 1;
      grid-row: 1 / span 3;
      justify-self: center;
      text-align: center;

      span {
        display: block;
        color: @textLighterColor;
      }

      .day {
        font-size: 40px;
      }
    }

    h3 {
      grid-column: 2;
      grid-row: 1;
    }

    p {
      grid-column: 2;
      grid-row: 2;
      margin-top: 0;
      color: rgba(0, 0, 0, 0.753);
    }

    .actions {
      grid-column: 2;
      grid-row: 3;
      font-size: 14px;

      a {
        // color: @themeLighterColor;
        color:#ffa600ab;
        
        
      }
      .deleteBtn{
        margin-left: 10px;
      }
    }

  }
a {
        // color: @themeLighterColor;
        color:black
      }
}
.pagination{
  display: grid;
  justify-items: center;
}
// .el-button--default{
//   color:#ffa600;
// }
.el-button--primary:focus{
  background-color: #fff;
  border-color: none;
  color:#ffa600;
}

</style>

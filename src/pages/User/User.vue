<template>
  <div id="user">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.avatar" class="avatar">
      <h3>{{user.username}}</h3>
    </section>
    <section>
      <router-link class="item" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">
        <div class="date">
          <span class="day">{{splitDate(blog.createdAt).date}}</span>
          <span class="month">{{splitDate(blog.createdAt).month}}</span>
          <span class="year">{{splitDate(blog.createdAt).year}}</span>
        </div>
        <h3>{{blog.title}}</h3>
        <p>{{blog.description}}</p>
      </router-link>
    </section>
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
import blog from '@/api/blog'
export default {
  name: 'HelloWorld',
  data () {
    return {
      blogs:[],
      user:{},
      page:1,
      total:undefined,
      pageLength:undefined, 
      totalPage:undefined,
    }
  },
  created(){
    this.userId=this.$route.params.userId
    this.page = this.$route.query.page||1
    console.log(this.userId+'test')
    blog.getBlogsByUserId(this.userId,{page:this.page}).then(
      res=>{console.log(res)
      this.page=res.page
      this.total=res.total
      this.blogs=res.data
      this.totalPage = res.totalPage
      if(res.data.length>0 ){
        this.user= res.data[0].user
        // console.log(res.data.length)
      }
      if(this.page<this.totalPage&& this.totalPage!=1){
        this.pageLength = res.data.length
        console.log(res.data.length)
      }else if(this.page==this.totalPage&& this.totalPage!=1){
        this.pageLength = (this.total-res.data.length)/(this.totalPage-1)
        // console.log(this.pageLength)
      }else if(this.totalPage==1){
        this.pageLength = this.total
      }
      // console.log(this.pageLength)
      }


    )
  },
  methods:{
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
    onPageChange(newPage){
      blog.getBlogsByUserId(this.userId,{page: newPage}).then(res=>{
        console.log(res)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({path:`/user/${this.userId}`,query:{page: newPage}})
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
// #login {
//   color: red;
// }
@import "../../assets/base.less";
#user{
  .user-info{
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
    }
    
    

  }
  a{color: black;}
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
        // color: @textLighterColor;
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
    }
    
    

  }
  .pagination{
  display: grid;
  justify-items: center;
}
</style>

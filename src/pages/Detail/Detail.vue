<template>
  <div id="detail">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" :title="user.username" class="avatar">
      <h3>{{title}}</h3>
      <p><router-link :to="`/user/${user.id}`">{{user.username}}</router-link> 发布于{{friendlyDate(createdAt)}}</p>
    </section>
    <section class="article" v-html="markdown">
      
                                
                                

    </section>
    
  </div>
</template>

<script>
import marked from 'marked'

import blog from '@/api/blog'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'',
      rawContent:'',
      user:{},
      publishedAt:'',
      createdAt:'',
    }
  },
  created(){
    this.blogId = this.$route.params.blogId
    console.log(this.blogId)
    blog.getDetail({blogId:this.blogId}).then(res=>{
      // console.log('ddd')
      console.log(res)
      this.title = res.data.title
      this.rawContent = res.data.content
      this.createdAt = res.data.createdAt
      this.user = res.data.user
    })
  },
  computed:{
    markdown(){
      console.log(marked(this.rawContent))
      return marked(this.rawContent)
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/article.less";
@import "../../assets/base.less";

#detail{
  .user-info{
   display: grid;
   grid: auto auto/ 80px 1fr;
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
      
      margin: 5px 0;

  }
  p {
      grid-column: 2;
      grid-row: 2;

      margin-top: 0;
      font-size: 12px;
      color: @textLighterColor;
      // color: aquamarine;
      // word-wrap: break-word;
	    // word-break: break-all;

      a {
        color: @themeColor;
        text-decoration: none;
      }
    }


  }
  
}
.article {
    padding: 30px 0;
    // max-width: 1000px;
    word-wrap: break-word;
	  word-break: break-all;
  }

</style>

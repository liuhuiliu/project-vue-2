<template>
  <div id="edit">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title"></el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" :autosize="{minRows:2,maxRows:4}" v-model="description"  ></el-input>
    <p class="msg">限30个字</p>
    <h3>文章内容</h3>
    <el-input type="textarea" :autosize="{minRows:4,maxRows:30}" rows=20 v-model="content"></el-input>
    <p class="msg">限30个字</p>
    <p>
      <label >是否展示到页面</label>
      
      <el-switch class="switch" v-model="showIndex" active-color="#ffa500" inactive-color="#d7d7d7"></el-switch>
    </p>
    <el-button @click="onCreate" class="okBtn">确定</el-button>
  </div>
</template>

<script>
import blog from '@/api/blog'
// import { config } from 'vue/types/umd'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'',
      description:'',
      content:'',
      showIndex:true,
    }
  },
  methods:{
    onCreate(){
      blog.createBlog({title:this.title,content:this.content,description:this.description,atIndex:this.showIndex})
      .then(res=>{
        this.$message.success(res.msg)
        this.$router.push({path:`/detail/${res.data.id}`})
      }).catch(()=>{console.log('aaaa')})
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#login{
  color: rgb(0, 217, 255);
} 

.switch{
  margin-left: 10px;
  padding-bottom: 6px;
}
button{
  color: #ffa500;
  margin-bottom: 5px;
}
button:hover{
  background-color: #ffa500;
  color: white;
  border-color: #ffa500;
  // margin-bottom: 5px;
}
</style>

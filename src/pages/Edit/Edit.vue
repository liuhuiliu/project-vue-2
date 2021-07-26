<template>
   <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title"></el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input v-model="description" type="textarea" rows=3></el-input>
    <p class="msg">限30个字</p>
    <h3>文章内容</h3>
    <el-input v-model="content" type="textarea" rows=20></el-input>
    <p>
      <label >是否展示到页面</label>
      
      <el-switch class="switch" v-model="showIndex" active-color="#ffa500" inactive-color="#d7d7d7"></el-switch>
    </p>
    <p class="msg">限30个字</p>
    <el-button class="editOk" @click="onEdit">确定</el-button>
  </div>
</template>

<script>
import blog from '@/api/blog'
export default {
  name: 'HelloWorld',
  data () {
    return {
      showIndex:false,
      title:'',
      content:'',
      blogId:undefined,
      description:'',

    }
  },
  created(){
    this.blogId = parseInt(this.$route.params.blogId)//
    console.log(this.blogId)
    blog.getDetail({blogId:this.blogId}).then(res=>{
      this.title = res.data.title,
      this.description = res.data.description,
      this.content = res.data.content,
      this.showIndex = res.data.atIndex
    })
  },

  methods:{
    onEdit(){
      blog.updateBlog({blogId: this.blogId},{title:this.title, content:this.content, description:this.description, atIndex:this.showIndex})
        .then(res =>{
            this.$message.success(res.msg)
            this.$router.push({path:`/detail/${this.blogId}`})
          })
          
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/base.less";
#edit, #create {
  padding-bottom: 30px;

  h1 {
    text-align: center;
  }

  .msg {
    text-align: right;
    font-size: 12px;
    color: @textLighterColor;
  }
}
.editOk{
  color:#ffa600;
}
</style>

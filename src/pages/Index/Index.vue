<template>
  <div id="index">
   index页面
   <p>
     test
   </p>
   <el-button @click="onClick1">默认按钮1</el-button>
   <el-button @click="onClick2">默认按钮2</el-button>
  </div>
  
</template>

<script>
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
    color: @themeColor;
  }
 
</style>

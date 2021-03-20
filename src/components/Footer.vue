<template>
  <footer>
    <p>This Is Footer</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../assets/base.less";
 footer{
   align-self: flex-end;
   background-color: #d7d7d7;
   color: #666;
   font-size: 13px;
   padding: 10px;
   text-align: center;
 }
</style>
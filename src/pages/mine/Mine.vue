<template>
  <div class="mine">
    个人中心
    <div class="content"></div>
    <Footer></Footer>
  </div>

</template>

<script>
import Footer from "../../components/Footer.vue";
export default {
  name: '',
  components :{
    Footer
  }
}
</script>

<style scoped lang="less">
.mine{
    display: flex;
    flex-flow: column;
    height: 100%;
    .content{
        flex:1;
        overflow-y: auto;
    }
}
</style>
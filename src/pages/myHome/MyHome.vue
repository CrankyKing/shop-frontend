<template>
  <div class="home">
    首页
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
  },
  data() {
    return {
      
    };
  }
}
</script>

<style scoped lang="less">
.home{
    display: flex;
    flex-flow: column;
    height: 100%;
    .content{
        flex:1;
        overflow-y: auto;
    }
}

</style>
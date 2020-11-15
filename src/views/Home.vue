<template>
  <div class="home">
    <div class="nav-left">
      <Nav/>
    </div>
    <div class="content-right">
      <div class="breadcrumbs-wrap">
        <BreadCrumbs/>
        <div>退出</div>
      </div>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue';
import Nav from '@/views/layout/nav.vue';
import BreadCrumbs from '@/views/layout/breadCrumbs.vue';

export default {
  name: 'Home',
  components: {
    Nav,
    BreadCrumbs
  }
}
</script>
<style lang='less' scoped>
@import '@/assets/css/common.less';
  .home{
    width: 100%;
    height:100vh;
    box-sizing: border-box;
    .flexBox(flex-start, center);
    .nav-left{
      width: 20%;
      min-width: 150px;
      height:100%;
      box-sizing: border-box;
    }
    .content-right{
      flex-grow: 1;
      height:100%;
      box-sizing: border-box;
      .flexBox(flex-start,flex-start,column);
      .breadcrumbs-wrap{
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #EAEAEA;
        .flexBox(space-between,center);
        padding: 0 10px;
      }
    }
  }
</style>

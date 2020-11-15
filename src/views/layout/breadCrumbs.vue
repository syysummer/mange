<template>
  <ul class="breadcrumbs">
    <li v-for="(item,index) in list" :key="index">
      <router-link :to="item.path">{{item.meta.title}}</router-link>
      <span v-if="index != 0 && index < list.length - 1">/</span>
    </li>
  </ul>
</template>

<script>
import { reactive, computed, toRefs, onMounted, watch } from "@vue/composition-api";
export default {
  setup(props,{root, refs, emit}){
    const state = reactive({
      list:[]
    })
    onMounted(() => {
      let matched = root.$route.matched;
      state.list = matched;
    })
    watch(() => root.$route, (to,from) => {
      let matched = to.matched;
      state.list = matched;
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/common.less'; 
  .breadcrumbs{
    .flexBox(flex-start, center);
    cursor: pointer;
  }
</style>
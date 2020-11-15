<template>
  <div class="nav-tree">
    <ul>
      <li class="level-one" v-for="(item, index) in navList" :key="index">
        <router-link :to="item.url" class="item">
          <i class="iconfont" :class="item.icon"></i>
          <span>{{item.name}}</span>
        </router-link>
        <ul class="c-item">
          <li class="level-two" v-for="(subItem,i) in item.children" :key="i">
            <router-link :to="subItem.url" class="sub-item">
              <i class="iconfont" :class="subItem.icon"></i>
              <span>{{subItem.name}}</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from "@vue/composition-api";
export default {
  setup(props,{root, refs, emit}){
    const state = reactive({
      navList: [
        {
          name: '首页',
          url:'/index',
          icon: 'icon-companyinfo',
          children:[]
        },
        {
          name: '数据统计',
          url:'/stats',
          icon: 'icon-baobiaofenxi',
          children:[]
        },
        {
          name: '信息管理',
          url:'/wms',
          icon: 'icon-xitongguanli',
          children:[
            {
              name: '列表展示',
              url:'/list',
            },
            {
              name: '用户统计',
              url:'/users',
            }
          ]
        }
      ]
    });
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/common.less'; 
 .nav-tree{
   width: 100%;
   height: 100%;
   background:cadetblue;
   ul{
     width: 100%;
     >.level-one{
       width: 100%;
       .item{
         cursor: pointer;
         color: #FFF;
         padding-left: 10px;
         height: 50px;
         border-bottom: 1px solid #fff;
         .flexBox(flex-start,center);
         i{
           margin-right: 10px;
         }
       }
       .c-item{
         .level-two{
           .sub-item{
             color: #FFF;
             padding-left: 40px;
             display:block;
             line-height: 40px;
             text-align: left;
             height: 40px;
             cursor: pointer;
           }
         }
       }
     }
   }
 }
</style>

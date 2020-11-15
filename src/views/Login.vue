<template>
  <div class="login_wrap">
    <div class="mange_title"><span>YY管理后台</span></div>
    <div class="form_wrap">
      <input type="text" class="user" placeholder="用户名" v-model="user"/>
      <input type="passwprd" class="password" placeholder="密码" v-model="password"/>
      <div class="btn" @click="login">登录</div> 
    </div>
    <div class="mange_bottom"></div>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from "@vue/composition-api";
export default {
  setup(props,{root, refs, emit}){
    const state = reactive({
      user: '',
      password: ''
    })
    const login = () => {
      const { user, password } = state;
      if( !user || !password ){
        return;
      }
      if(user === 'admin' && password === '123456'){
        root.$router.push('/home');
      }else{
        alert('用户名与密码不匹配！')
      }
    }
    return {
      ...toRefs(state),
      login,
    }
  }
}
</script>
<style lang="less" scoped>
  .login_wrap{
    width: 100%;
    height: 100vh;
    .flexBox(space-between, flex-start, column);
    >div{
      width: 100%;
      height: 33%;
    }
    .mange_title{
      color: #FFF;
      font-size: 28px;
      background: #4e6ef2;
      .flexBox(center,flex-start, column);
      span{
        margin-left: 20%;
      }
    }
    .form_wrap{
      width: 100%;
      min-height: 200px;
      .flexBox(center,center,column);
      input{
        width: 300px;
        height: 36px;
        border-radius:2px;
        outline: none;
        border: 1px solid #EAEAEA;
        margin-bottom: 20px;
        padding-left: 12px;
        box-sizing: border-box;
      }
      .btn{
        width: 300px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border-radius:2px;
        outline: none;
        border: 1px solid #EAEAEA;
        margin-bottom: 20px;
        background: #4e6ef2;
        cursor: pointer;
        color: #FFF;
      }
    }
    .mange_bottom{
      width: 100%;
      background: #4e6ef2;
    }
  }
</style>

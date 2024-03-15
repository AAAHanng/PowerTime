<template>
  <div class="login-wrapper">
    <div class="login-cart">
      <p class="login-text">Power Time</p>

      <!-- 输入 -->
      <div class="input-wrapper">
        <i class="iconfont icon-user-filling icon"></i>
        <input placeholder="请输入账号" v-model="loginData.email" />
      </div>
      <div class="input-wrapper">
        <i class="iconfont icon-lock icon"></i>
        <input type="password" placeholder="请输入密码" v-model="loginData.code" />
        <el-button type="success" @click="getCodeHandle" :disabled="disabled">{{ valiBtn }}</el-button>
      </div>
      <div>
        <input type="checkbox" id="rememberMe" name="rememberMe"  v-model="loginData.rememberMe">
        <label for="rememberMe">记住账号</label><br><br>
      </div>
      <button class="loginbt" @click="loginHandle">登 录</button>
    </div>
  </div>
</template>

<script setup>
import '@/assets/login/iconfont.css'
import { reactive, onMounted, ref } from 'vue'
import { getCode } from '@/api/order.js'
import store from '@/store/index.js'
import router from '@/router/index.js'
import Cookies from 'js-cookie'
import { ElMessage } from 'element-plus'

const loginData = reactive({
  email: '1664674148@qq.com',
  code: '',
  rememberMe:''
})

const disabled = ref(false)
const valiBtn=ref('获取验证码')

onMounted(()=>{
  getCookie()
})

const tackBtn = ()=>{
  let time = 60
  let timer = setInterval(() => {
    if(time === 0){
      clearInterval(timer)
      valiBtn.value = '获取验证码'
      disabled.value = false
    }else{
      disabled.value = true
      valiBtn.value = time + '秒后重试'
      time--
    }
  }, 1000)
}

const getCookie = ()=>{
  const email = Cookies.get('email', { expires: 30 })
  const rememberMe = Cookies.get('rememberMe', { expires: 30 })
  loginData.email = email === undefined ? loginData.email : email
  loginData.rememberMe = rememberMe === undefined ? false : Boolean(rememberMe)
}

//处理登录请求
const loginHandle=()=> {
  if(loginData.rememberMe){
    Cookies.set('email',loginData.email)
    Cookies.set('rememberMe',loginData.rememberMe)
  }else{
    Cookies.remove('email')
    Cookies.remove('rememberMe')
  }
  store.dispatch('user/login',loginData).then(()=>{
    ElMessage.success('登录成功')
    router.push({ path:'/' })
  })

}

const getCodeHandle = () => {
  getCode(loginData.email)
  tackBtn()
  ElMessage.success('验证码发送成功')
}


</script>

<style lang="scss" scoped>
.login-wrapper {
  background-image: url("@/assets/imgs/login_back.jpg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;

  .login-cart {
    background-color: rgba(100, 100, 100, 0.25);
    backdrop-filter: blur(2px);
    width: 500px;
    height: 400px;
    box-shadow: 2px 2px 16px 2px rgba(39, 39, 39, 0.5);
    border-radius: 18px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    .login-text {
      margin-top: 18px;
      line-height: 60px;
      text-align: center;
      color: rgb(255, 255, 255);
      font-size: 32px;
      font-family: "Helvetica",serif;
    }

    .input-wrapper {
      box-sizing: border-box;
      margin: 22px auto;
      background-color: rgba(255, 255, 255, 0.1);
      width: 400px;
      height: 50px;
      outline: 0.5px solid rgba(235, 235, 235, 0.3);
      border-radius: 5px;
      padding: 4px 12px;
      transition: 0.5s;
      text-align: left;
      display: flex;
      align-items: center;

      .icon {
        font-size: 24px;
        color: rgba(224, 224, 224, 0.5);
      }

      .icon-hide,
      .icon-browse {
        cursor: pointer;
      }

      input {
        display: inline-block;
        background-color: transparent;
        width: 100%;
        height: 100%;
        border: 0;
        color: white;
        font-size: 16px;
        padding: 4px 14px;

        &:focus-visible {
          outline: 0;
        }
      }

      &:focus-within {
        outline: 0.5px solid rgb(142, 190, 138);
      }
    }

    .role-wrap {
      width: 400px;
      height: 30px;
      line-height: 30px;
      margin: -10px auto;
      text-align: left;

      input[type="radio"] {
        display: none;
      }
      input[type="radio"]:checked + label::after {
        position: absolute;
        content: "✔";
        font-size: 8px;
        left: -6px;
        color: rgb(142, 190, 138);
      }
      label {
        position: relative;
        color: white;
        font-size: 14px;
        margin-left: 8px;
        margin-right: 16px;
        &:before {
          display: inline-block;
          position: relative;
          left: -8px;
          top: 2px;
          width: 14px;
          height: 14px;
          border: 1px solid rgba(207, 236, 204, 0.5);
          border-radius: 4px;
          content: "";
          cursor: pointer;
          box-sizing: border-box;
        }
      }
    }

    .loginbt {
      background-color: rgba(116, 185, 110, 0.9);
      border: 0;
      color: white;
      margin: 25px 10px;
      width: 400px;
      height: 50px;
      border-radius: 5px;
      font-size: 18px;
      padding: 4px 16px;
      cursor: pointer;

      &:hover {
        background-color: rgb(142, 190, 138);
      }
    }

    .tip {
      color: rgb(240, 240, 240);
      font-size: 12px;
      margin-left: 55px;
      text-align: left;
    }
  }
}


</style>

<template>
  <div class="big_box">
    <div class="box">
      <h2>Login</h2>
      <form>
        <div class="inputBox">
          <input type="text" name="phone" v-model="phone" required="" />
          <label>手机号</label>
        </div>
        <div class="inputBox">
          <input type="password" name="captcha" v-model="captcha" required="" />
          <label>验证码</label>
        </div>
         <el-button :type="typeValue" @click="djsTime" :disabled="able">{{djs}}</el-button>
        <el-button type="primary" @click="getone">登录</el-button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {ref} from 'vue'
import {useStore} from 'vuex'
import { ElMessage } from 'element-plus'
export default {
    name:'login',
    data(){
      return{
        phone:'',
        captcha:'',
      able: false,
      djs: "获取验证码",
      djsMove: 15,
      typeValue: "primary",
      isClick: true,
      }
    },
    methods: {
      async djsTime() {
      if (this.isClick&&this.phone!=='') {
        const data = await axios.get(`http://www.codeman.ink:3000/captcha/sent?phone=${this.phone}`)
        if(data.status===200){
          ElMessage.success('短信获取成功！')
        }
        this.isClick = false;
        let djsAll = setInterval(() => {
          this.djsMove--
          if (this.djsMove == 0) {
            this.djs = "获取验证码";
            clearTimeout(djsAll);
            this.djsMove = 15;
            this.typeValue = "primary";
            this.able = false;
          } else {
            this.djsMove = this.djsMove >= 10 ? this.djsMove : "0" + this.djsMove;  
            this.djs = "还剩下" + this.djsMove + "秒";
            this.typeValue = "success";
            this.able = true;
          }
        }, 1000);
          setTimeout(() => {
            this.isClick = true
          },1000)
      }
    },
    async getone(){
      const data = await axios.get('http://www.codeman.ink:3000/user/detail?uid=327512661')
      this.$store.commit('mylike/getuser', data)
      this.$router.push({
        path:'/home',
      })
    }
    },
};
</script>
<style scoped>
.cat{
  width: 70px;
  height: 50px;
  background-color: #03a9f4;
  border-radius: 60%;
  margin-bottom: 10px;
  line-height: 50px;
  text-align: center;
}
input{
  border: 1px solid #000000;
}
.big_box {
  height: 100%;
  border: 1px solid transparent;
  background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.doubanio.com%2Fview%2Fnote%2Fl%2Fpublic%2Fp85987252.jpg&refer=http%3A%2F%2Fimg2.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645172993&t=183559be4d2658b6d980795bcdc430eb");
  background-size: cover;
  background-repeat: no-repeat;
}
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 40px;
  background: transparent;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
.box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}
.box .inputBox {
  position: relative;
}
.box .inputBox input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.box .inputBox label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  letter-spacing: 1px;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}
.box .inputBox input:focus ~ label,
.box .inputBox input:valid ~ label {
  top: -18px;
  left: 0;
  color: #03a9f4;
  font-size: 12px;
}
.box input[type="submit"] {
  background: transparent;
 
  border: none;
  outline: none;
  color: #fff;
  background: #03a9f4;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
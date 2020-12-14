<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.jpg" alt />
      </div>
      <!-- 表单区域  label-width="40px" -->
      <a-form-model
        ref="loginFormRef"
        :model="loginForm" 
        :rules="loginrules"
        class="info_box"
      >
        <a-form-model-item>
          <a-input
          allowClear
            class="info_input"
            v-model="loginForm.username"
            prefix-icon="a-icon-user-solid"
            placeholder="用户名称"
          ></a-input>
        </a-form-model-item>
        <a-form-model-item >
          <a-input 
          type="password"
          allowClear
            class="info_input"
          v-model="loginForm.password" 
          prefix-icon="a-icon-lock"
          placeholder="用户密码"
          ></a-input>
        </a-form-model-item>

        <!-- 按钮区域 -->
        <a-form-model-item class="btns">
          <a-button type="success" plain size="small" style="margin-right:20px " round @click="submitForm()" >登录</a-button>
          <a-button type="danger" plain size="small" round @click="resetForm()">重置</a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
// import {setCookie,getCookie}from 'src/js/cookieUtil'
export default {
  data() {
    return {
      //   表单绑定数据
      loginForm: {
        username: 'admin',
        password: 'admin'
      }
      // flag:Boolean(this.loginForm.username && this.loginForm.password)
      // 表单
      // loginrules: {
      //   username: [
      //     { required: true, message: '请输入名称', trigger: 'blur' },
      //     { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      //   ],
      //   password: [
      //     { required: true, message: '请输入密码', trigger: 'blur' },
      //     { min: 1, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
      //   ]
      // }
    }
  },
  methods: {
//     async cheack_n_p () {
//       if( this.checkCode === this.pwd) {
//         this.loginData = await getUserInfo(this.uname, this.pwd, this.adminPhone);
//         if (this.loginData.res !== 0) {
//           setCookie('userName',this.uname);
//           setCookie('userPwd',this.pwd,);
//           setCookie('phone',this.uname);
//           setCookie('userId',this.loginData.obj.id);
//           setCookie('userType',this.loginData.obj.userType);
//           setCookie('adminPhone',this.adminPhone);
// //        this.$router.go(-1);
//           this.$router.replace('/');
//         } else {
//           alert("验证码错误！")
//         }
//       }
//     },
    submitForm() {
      console.log(this.loginForm.username)
      console.log(this.loginForm.password)
      console.log(this.loginForm.username && this.loginForm.password)
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return false
        const { data:res } = await this.$http.post('login', this.loginForm)
        console.log(res)
        debugger
        if (res.code !== 200) {
          return this.$message.error('登陆失败')
        } else {
          this.$message.success('登陆成功')
        }
        console.log(res.data.token)
        debugger
        window.sessionStorage.setItem('token', res.data.token)
        this.$router.push('/Home')
      })
    },
    resetForm() {
      this.$refs.loginFormRef.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background-color: #2b4b6b;
}
.login_box {
  width: 450px;
  height: 300px;
  border: red 1px solid;
  box-shadow: 0 0 15px rgb(226, 194, 194);
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 50%;
    box-shadow: 0 0 10px #dddddd;
    padding: 10px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
  .info_box {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-right: 40px;
    box-sizing: border-box;
    // display: flex;
    // justify-content: center;
    .info_input{
      // display: block;
      margin: 0 20px;
      border: 0;
      border-bottom: 1px red solid;
      border-radius: 0;
      outline : none ! important;
    }
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>

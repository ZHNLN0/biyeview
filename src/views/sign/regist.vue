<template>
  <div>
    <nav-bar :title="'注册'" />
    <van-row>
      <van-col :span="24">
        <van-form @submit="onSubmit">
          <van-field
            v-model="account"
            name="account"
            label="用户名"
            placeholder="用户名，长度大于5"
            :rules="[{ required: true, message: '请填写用户名' }, {validator: checkLenght, message: '用户名长度不足'}]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码，长度大于5"
            :rules="[{ required: true, message: '请填写密码' }, {validator: checkLenght, message: '密码长度不足'}]"
          />
          <van-field
            v-model="secondPassword"
            type="password"
            name="secondPassword"
            label="确认密码"
            placeholder="确认密码"
            :rules="[{ required: true, message: '请再次填写密码' }, { validator: confirmPassword, message: '两次密码不一致' }]"
          />
          <div style="margin: 16px;">
            <van-button round block :disabled="!isSame" type="info" native-type="submit">
              提交
            </van-button>
          </div>
        </van-form>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import NavBar from '@/components/navbar'
import { regist } from '@/api/user'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      account: '',
      password: '',
      secondPassword: '',
      isSame: false
    }
  },
  watch: {
    secondPassword: {
      handler: function(val) {
        if(this.password && val) {
          this.isSame = this.password === val ? true : false
        } else {
          this.isSame = false
        }
      },
      deep: true
    }
  },
  methods: {
    confirmPassword(val) {
      return this.password === val
    },
    checkLenght(val) {
      return val.length >= 5
    },
    async onSubmit(values) {
      console.log(values)
      await regist(values)
    }
  }
}
</script>
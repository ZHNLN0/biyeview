<template>
  <div class="login">
    <nav-bar :title="'登录'" />
    <van-row style="margin-top: 20vh;">
      <van-col span="24" style="text-align: center;">
        <van-image
          round
          width="20vw"
          height="20vw"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </van-col>
      <van-col span="24" style="margin-top: 5vh;">
        <van-form @submit="onSubmit">
          <van-field
            v-model="account"
            name="account"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
              登录
            </van-button>
          </div>
        </van-form>
      </van-col>
      <van-col :offset="20" :span="4">
        <span style="color: #41ABF1;" @click="toRegist">注册</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import NavBar from '@/components/navbar'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      account: '',
      password: '',
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(router) {
        const query = router.query
        if(query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  mounted() {
    console.log(process.env)
  },
  methods: {
    async onSubmit(values) {
      console.log(values)
      await this.$store.dispatch('user/userLogin', values)
      this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
    },
    toRegist() {
      this.$router.push('/regist')
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style lang="stylus" scoped>
.login
  width 100vw
  height auto
  overflow hidden
</style>
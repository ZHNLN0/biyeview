<template>
  <div>
    <nav-bar :left-arrow="true" />
    <van-form @submit="onSubmit">
      <van-field name="avatar" label="头像上传">
        <template #input>
          <van-uploader v-model="avatar" :max-count="1" />
        </template>
      </van-field>
      <van-field 
        v-model="userInfo.nickName" 
        name="nickName"
        label="昵称"
      />
      <van-field 
        v-model="userInfo.signature" 
        name="signature"
        label="个性签名"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { upload } from '@/api/user'
import NavBar from '@/components/navbar'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      userInfo: {},
      avatar: []
    }
  },
  methods: {
    async onSubmit(values) {
      await this.uploadAvatar()
      const { nickName } = values
      console.log(nickName)
      // updateInfo(values).then(res => {
      //   console.log(res.data)
      // })
    },
    async uploadAvatar() {
      const { avatar } = this.userInfo
      console.log(this.userInfo, typeof avatar)
      const params = new FormData()
      params.append('fileList', this.avatar[0].file)
      params.append('otner', 1)
      console.log(typeof params.get('fileList'))
      await upload(params)
    }
  }
}
</script>

<style>

</style>
<template>
  <div class="container">
    <nav-bar />
    <div class="content">
      
      <van-form @submit="onSubmit">
        <van-field name="uploader" label="选张图片">
          <template #input>
            <van-uploader v-model="uploader" />
          </template>
        </van-field>
        <van-field
          v-model="username"
          name="定个标题"
          label="定个标题"
          placeholder="定个标题"
          :rules="[{ required: true, message: '请填写标题' }]"
        />
        <van-field
          v-model="message"
          rows="2"
          autosize
          label="留言"
          type="textarea"
          maxlength="50"
          placeholder="请输入留言"
          show-word-limit
          :rules="[{ required: true, message: '请填写内容' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
    <Tab-bar />
  </div>
</template>

<script>
import NavBar from '@/components/navbar'
import TabBar from '@/components/tabbar'
export default {
  components: {
    NavBar,
    TabBar
  },
  data() {
    return {
      uploader: [],
      username: '',
      message: ''
    }
  },
  methods: {
    onSubmit() {}
  }
}
</script>
<template>
  <div>
    <van-field
      v-model="title"
      required
      label="标题"
      placeholder="请输入标题"
    />
    <van-field
      v-model="content"
      required
      rows="2"
      autosize
      label="内容"
      type="textarea"
      maxlength="300"
      placeholder="请输入内容"
      show-word-limit
    />
    <van-row>
      <van-col :span="24" style="margin: 20px 0;">
        <van-radio-group v-model="status" style="float: right;">
          <van-radio name="1">仅自己可见</van-radio>
        </van-radio-group>
      </van-col>
      <van-col :span="24">
        <van-button
          round block
          type="info" native-type="submit"
          style="width: 80vw;margin: 0 auto;"
          @click="handleSubmit"
        >
          提交
        </van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      status: 2
    }
  },
  methods: {
    handleSubmit() {
      const params = { title: this.title, content: this.content, status: +this.status }
      this.$emit('createDiary', params)
    }
  }
}
</script>

<style>

</style>
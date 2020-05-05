<template>
  <div class="card">
    <van-row>
      <van-col :span="24">
        <van-row>
          <van-col :span="4">
            <van-image
              style="margin-top: 10px;"
              round
              width="10vw"
              height="10vw"
              fit="cover"
              :src="detail.avatar"
            />
          </van-col>
          <van-col :span="20">
            <div class="nick-name">{{ detail.nickName }}</div>
            <span class="time">{{ detail.time | momentFilter }}</span>
          </van-col>
        </van-row>
      </van-col>
      <van-col :span="24">
        <van-divider>{{ detail.title }}</van-divider>
        <div class="content">
          {{ detail.content }}
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      default: () => {
        return {
          nickName: 'zhangsan',
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          title: '标题',
          content: '内容',
          time: 1000000000000
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.card {
  width calc(100% - 40px)
  padding 10px
  border-radius 6px
  background-color #ffffff
  box-shadow 0 4px 6px #ebedf0
  margin 0 20px
  .nick-name {
    font-size 16px
    font-weight 600
    margin 5px 0
  }
  .time {
    font-size 14px
    color #969799
  }
  /deep/ .van-divider {
    margin 5px 0
  }
  .content {
    font-size 12px
    font-weight 300
  }
}
</style>
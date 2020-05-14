<template>
  <div class="container">
    <nav-bar />
    <div class="content">
      <van-card thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
        <template #title>
          <p style="font-size: 16px;">抖腿震地球</p>
        </template>
        <template #desc>
          <!-- 多行打点 -->
          <div class="desc">抖腿震地球抖腿震地球抖腿震地球抖腿震地球抖腿震地球抖腿震地球抖腿震地球抖腿震地球抖腿震地球抖腿震地球抖腿震地球抖腿震地球抖腿震地球抖腿震地球抖腿震地球</div>
        </template>
      </van-card>
      <van-grid :column-num="3">
        <van-grid-item icon="chart-trending-o" text="账单分析" />
        <van-grid-item icon="description" text="快递小结" />
        <van-grid-item icon="edit" text="发表日记" to="createDiary" />
        <van-grid-item icon="records" text="我的日记" to="myDiary" />
        <van-grid-item icon="info-o" text="修改信息" to="updateUser" />
        <van-grid-item icon="warning-o" text="修改密码" />
      </van-grid>
      <van-col class="bottom-button" :span="24">
        <van-button style="width: 90vw;" round type="info">
          注销
        </van-button>
      </van-col>
      
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

    }
  },
  methods: {
    
  }
}
</script>

<style lang="stylus" scoped>
/deep/ .content {
  
  .bottom-button {
    text-align center
    position absolute
    bottom 70px
  }
  .desc {
    -webkit-line-clamp 2
    overflow hidden
    text-overflow ellipsis
    display -webkit-box
    -webkit-box-orient vertical
    font-size 14px
    line-height 1.5
  }
}
</style>
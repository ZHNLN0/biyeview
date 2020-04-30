<template>
  <div class="container">
    <nav-bar />
    <div class="content">
      <van-tabs v-model="active" swipeable color="#07c160">
        <van-tab title="创建账单">
          <calendar />
          <bill-detail />
        </van-tab>
        <van-tab title="查询账单">
          <calendar />
        </van-tab>
        <van-tab title="修改账单">内容 3</van-tab>
        <van-tab title="删除账单">内容 4</van-tab>
      </van-tabs>
    </div>
    <Tab-bar />
  </div>
</template>

<script>
import NavBar from '@/components/navbar'
import TabBar from '@/components/tabbar'
import BillDetail from './components/BillDetail'
import Calendar from '@/components/Calendar'
export default {
  components: {
    NavBar,
    TabBar,
    Calendar,
    BillDetail
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    
  }
}
</script>
<style lang="stylus" scoped>
/deep/ .van-tabs__line {
  bottom 0
}
</style>
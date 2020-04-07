<template>
  <van-tabbar route>
    <van-tabbar-item replace name="home" to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace name="express" to="/express" icon="logistics">快递</van-tabbar-item>
    <van-tabbar-item replace name="friends" to="/bill" icon="description">账单</van-tabbar-item>
    <van-tabbar-item replace name="setting" to="/user" icon="user-circle-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>
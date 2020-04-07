<template>
  <div class="container">
    <nav-bar />
    <div class="content">
      首页
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
  }
}
</script>
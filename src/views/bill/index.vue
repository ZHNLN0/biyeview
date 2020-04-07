<template>
  <div class="container">
    <nav-bar />
    <search />
    <div class="content">
      账单
    </div>
    <Tab-bar />
  </div>
</template>

<script>
import Search from '@/components/search'
import NavBar from '@/components/navbar'
import TabBar from '@/components/tabbar'
export default {
  components: {
    Search,
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
<template>
  <div class="container">
    <nav-bar />
    <search />
    <div class="content">
      <express-detail />
    </div>
    <Tab-bar />
  </div>
</template>

<script>
import Search from '@/components/search'
import NavBar from '@/components/navbar'
import TabBar from '@/components/tabbar'
import ExpressDetail from './components/ExpressDetail'
export default {
  components: {
    Search,
    NavBar,
    TabBar,
    ExpressDetail
  },
  data() {
    return {

    }
  },
  methods: {
    
  }
}
</script>
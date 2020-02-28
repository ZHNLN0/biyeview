<template>
  <div class="container">
    <nav-bar />
    <tab-bar />
    <div class="app-container">
      <slot />
    </div>
  </div>
</template>

<script>
import navBar from '@/components/navbar'
import tabBar from '@/components/tabbar'
export default {
  components: {
    navBar,
    tabBar
  }
  
}
</script>

<style lang="stylus" scoped>

</style>
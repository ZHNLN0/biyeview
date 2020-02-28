<template>
  <layout>
    <template v-solt:default>
      <div>
        <search />
        快递内容
        <router-view />
      </div>
    </template>
  </layout> 
</template>

<script>
import Layout from '@/layout'
import Search from '@/components/search'
export default {
  components: {
    Layout,
    Search
  },
  data() {
    return {
      title: '首页'

    }
  },
  methods: {
    
  }
}
</script>
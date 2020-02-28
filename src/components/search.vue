<template>
  <van-search
    v-model="value"
    shape="round"
    placeholder="请输入搜索关键词"
    @focus="onFocus"
    @search="onSearch"
  />
</template>

<script>
export default {
  props: {
    isSearch: {
      type: Boolean,
      default: false
    },
    searchWhere: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onFocus() {
      if(!this.isSearch) {
        this.$router.push('/expressSearch')
      } else {
        return
      }
    },
    onSearch() {
      if(this.searchWhere === '') {
        return 
      } else if(this.searchWhere === 'express') {
        alert('search express')
      } else if(this.searchWhere === 'index') {
        alert('search index')
      }
    }
  }
}
</script>
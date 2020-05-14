<template>
  <div>
    <nav-bar :left-arrow="true" />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <diary-detail v-for="(item, index) in diaryList" :key="index" :detail="item" />
    </van-list>
  </div>
</template>

<script>
import DiaryApi from '@/api/diary'
import NavBar from '@/components/navbar'
import DiaryDetail from '@/components/DiaryDetail'
export default {
  components: {
    NavBar,
    DiaryDetail
  },
  data() {
    return {
      pageIndex: 1,
      pageSize: 10,
      diaryList: [],
      loading: false,
      finished: false
    }
  },
  mounted() {
    this.onLoad()
  },
  methods: {
    async onLoad() {
      this.loading = true
      await this.getDiaryList()
      this.loading = false
    },
    async getDiaryList() {
      const params = {
        type: 'self',
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }
      const res = await DiaryApi.getDiaryList(params)
      const { diaryList } = res.data
      this.diaryList = [...this.diaryList, ...diaryList]
      if(diaryList.length < this.pageSize) {
        this.finished = true
      }
    }
  }
}
</script>

<style>

</style>
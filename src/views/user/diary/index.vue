<template>
  <div>
    <nav-bar :left-arrow="true" />
    <calendar v-model="time" title="请选择日志时间" @createDiary="createDiary" />
    <diary-info @createDiary="createDiary" />
  </div>
</template>

<script>
import DiaryApi from '@/api/diary'
import NavBar from '@/components/navbar'
import Calendar from '@/components/Calendar'
import DiaryInfo from './DiaryInfo'
export default {
  components: {
    NavBar,
    Calendar,
    DiaryInfo
  },
  data() {
    return {
      time: ''
    }
  },
  methods: {
    createDiary(value) {
      const params = { time: this.time, ...value }
      DiaryApi.createDiary(params)
        .then(res => {
          console.log(res.code)
        })
    }
  }
}
</script>

<style>

</style>
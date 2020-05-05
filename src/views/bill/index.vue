<template>
  <div class="container">
    <nav-bar />
    <div class="content">
      <van-tabs v-model="active" swipeable color="#07c160" @change="handleChange">
        <van-tab title="创建账单">
          <calendar v-model="time" />
          <bill-detail :bill-detail="billInfo" @createBill="createBill" />
        </van-tab>
        <van-tab title="查询账单">
          <calendar emit-name="searchBill" @searchBill="searchBill" />
          <bill-detail v-if="time" :is-activity="false" :bill-detail="billInfo" />
        </van-tab>
        <van-tab title="修改账单">
          <calendar emit-name="searchBill" @searchBill="searchBill" />
          <bill-detail v-if="time" :bill-detail="billInfo" emit-name="updateBill" @updateBill="updateBill" />
        </van-tab>
        <!-- <van-tab title="删除账单">
          <calendar emit-name="searchBill" @searchBill="searchBill" />
          <bill-detail :bill-detail="billInfo" emit-name="deleteBill" @deleteBill="deleteBill" />
        </van-tab> -->
      </van-tabs>
    </div>
    <Tab-bar />
  </div>
</template>

<script>
import BillApi from "@/api/bill"
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
      active: 0,
      time: '',
      billInfo: {}
    }
  },
  methods: {
    handleChange() {
      this.time = ''
      this.billInfo = {}
    },
    createBill(value) {
      const params = Object.assign({ time: this.time }, value)
      BillApi.createBill(params).then(res => {
        console.log(res)
        if(res.code === 20000) {
          this.$notify({ type: 'success', message: '账单创建成功' })
        }
      })
    },
    searchBill(value) {
      console.log(value)
      this.time = value
      const params = { time: this.time }
      console.log(params)
      BillApi.searchBill(params).then(res => {
        if(res.code === 20000) {
          this.$notify({ type: 'success', message: '账单创建成功' })
          this.billInfo = res.data
        }
      })
    },
    updateBill(value) {
      const params = Object.assign({ time: this.time }, value)
      BillApi.updateBill(params).then(res => {
        if(res.code === 20000) {
          this.$notify({ type: 'success', message: '账单修改成功' })
        }
      })
    } 
  }
}
</script>
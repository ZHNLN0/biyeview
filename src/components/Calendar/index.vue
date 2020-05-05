<template>
  <div>
    <van-cell :class="isSearch ? 'isSearch' : ''" :title="title" :value="date" @click="show = true">
      <template v-if="isSearch" #right-icon>
        <van-icon
          :name="isSearch ? 'search' : ''"
          style="line-height: inherit;font-size: 18px;padding: 0 16px 0 10px;"
          @click.stop="handleSearch"
        />
      </template>
    </van-cell>
    <van-calendar
      v-model="show" 
      color="#07c160" 
      :type="type" 
      :default-date="defaultDate[type]"
      :max-date="maxDate" 
      :min-date="minDate" 
      @confirm="onConfirm" 
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      require: true,
      validator: function(value) {
        return ['single', 'multiple', 'range'].indexOf(value) !== -1
      },
      default: 'single'
    },
    emitName: {
      type: String,
      default: 'input'
    },
    isSearch: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '请选择时间'
    }
  },
  data() {
    const dateSetting = (i = 1) => {
      const oneDay = 24 * 60 * 60 * 1000
      const current = new Date().getTime()
      return new Date(current - oneDay * i)
    }
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const date = now.getDate()
    return {
      date: '',
      show: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(),
      defaultDate: {
        single: new Date(year, month, date),
        multiple: [dateSetting()],
        range: [dateSetting(2), dateSetting()]
      }
    }
  },
  methods: {
    formatDate(date) {
      if(this.type === 'single' || this.type === 'range') {
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
      } else if(this.type === 'multiple') {
        return `共选择了${date.length}个日期`
      }
    },
    onConfirm(date) {
      if(this.type === 'range') {
        const [start, end] = date
        this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`
        this.show = false
      } else if(this.type === 'multiple' || this.type === 'single') {
        this.date = this.formatDate(date)
        this.show = false
      }
      // 供使用该组件时同时需要使用 v-model 的情况
      this.$emit(this.emitName, date.getTime())
    },
    handleSearch() {
      // 执行请求 并向父组件传递值，当只需要获取时间进行请求时执行
      console.log(123)
    }
  }
}
</script>

<style lang="stylus" scoped>
.isSearch {
  padding-right 0
}

</style>
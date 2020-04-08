<template>
  <div>
    <van-cell :class="isSearch ? 'isSearch' : ''" :title="title[type]" :value="date" @click="show = true">
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
    isSearch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const dateSetting = (i = 1) => {
      const oneDay = 24 * 60 * 60 * 1000
      const current = new Date().getTime()
      return new Date(current - oneDay * i)
    }
    return {
      date: '',
      show: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(),
      title: {
        single: '请选择单个时间',
        multiple: '请选择多个时间',
        range: '请选择时间区间'
      },
      defaultDate: {
        single: new Date(),
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
      console.log(date)
      if(this.type === 'range') {
        const [start, end] = date
        this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`
        this.show = false
      } else if(this.type === 'multiple' || this.type === 'single') {
        this.date = this.formatDate(date)
        this.show = false
      }
      this.$emit('input', date)
    },
    handleSearch() {
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
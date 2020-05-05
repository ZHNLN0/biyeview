<template>
  <div>
    <van-form>
      <van-form>
        <van-field name="stepper" label="餐饮美食">
          <template #input>
            <van-field v-model.number="billDetail.eat" type="number" :disabled="!isActivity" />
          </template>
        </van-field>
        <van-field name="stepper" label="网购消费">
          <template #input>
            <van-field v-model.number="billDetail.shopping" type="number" :disabled="!isActivity" />
          </template>
        </van-field>
        <van-field name="stepper" label="生活缴费">
          <template #input>
            <van-field v-model.number="billDetail.live" type="number" :disabled="!isActivity" />
          </template>
        </van-field>
        <van-field name="stepper" label="交通出行">
          <template #input>
            <van-field v-model.number="billDetail.trip" type="number" :disabled="!isActivity" />
          </template>
        </van-field>
        <van-field name="stepper" label="其他消费">
          <template #input>
            <van-field v-model.number="billDetail.other" type="number" :disabled="!isActivity" />
          </template>
        </van-field>
        <div v-if="isActivity" style="margin: 16px;">
          <van-button round block type="info" native-type="submit" @click="handleSumbit">
            提交
          </van-button>
        </div>
      </van-form>
    </van-form>
  </div>
</template>

<script>
export default {
  props: {
    billDetail: {
      type: Object,
      default: () => {
        return {
          eat: 0,
          shopping: 0,
          live: 0,
          trip: 0,
          other: 0
        }
      }
    },
    emitName: {
      type: String,
      default: 'createBill'
    },
    activityTime: {
      type: Date,
      default: null
    },
    isActivity: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleSumbit() {
      this.$emit(this.emitName, this.billDetail)
    }
  }
}
</script>

<style lang="stylus" scoped>
/deep/ .van-stepper {
  margin 0 auto
}
</style>
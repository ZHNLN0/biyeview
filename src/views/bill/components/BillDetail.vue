<template>
  <div>
    <van-form>
      <van-form>
        <van-field name="stepper" label="餐饮美食">
          <template #input>
            <van-stepper v-model="billDetail.food" :disabled="!isActivity" />
          </template>
        </van-field>
        <van-field name="stepper" label="网购消费">
          <template #input>
            <van-stepper v-model="billDetail.shopping" :disabled="!isActivity" />
          </template>
        </van-field>
        <van-field name="stepper" label="生活缴费">
          <template #input>
            <van-stepper v-model="billDetail.live" :disabled="!isActivity" />
          </template>
        </van-field>
        <van-field name="stepper" label="交通出行">
          <template #input>
            <van-stepper v-model="billDetail.trip" :disabled="!isActivity" />
          </template>
        </van-field>
        <van-field name="stepper" label="其他消费">
          <template #input>
            <van-stepper v-model="billDetail.other" :disabled="!isActivity" />
          </template>
        </van-field>
        <div v-if="isActivity" style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
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
          food: '',
          shopping: '',
          live: '',
          trip: '',
          other: ''
        }
      }
    },
    activityTime: {
      type: Date,
      default: null
    },
    isActivity: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="stylus" scoped>
/deep/ .van-stepper {
  margin 0 auto
}
</style>
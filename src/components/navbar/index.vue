<template>
  <div class="navBar-container">
    <van-nav-bar
      :title="title"
      :left-arrow="leftArrow"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon :slot="rightSearch" name="search" />
    </van-nav-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    leftArrow: {
      type: Boolean,
      default: false
    },
    rightSearch: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters([
      'title'
    ])
  },
  mounted() {
    console.log(this.title)
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      this.$toast('按钮')
    }
  }
}
</script>

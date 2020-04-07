<template>
  <div>
    <van-panel
      title="快递详情"
      :desc="`已耗时间：${tempData.result.takeTime}`" 
      :status="status[tempData.result.deliverystatus]" 
      :class="tempData.result.deliverystatus >= 4 ? '' : 'status-normal'"
    >
      <div class="detail-context">
        <van-row>
          <van-col span="24">
            <van-image
              round
              fit="cover"
              width="10vw"
              height="10vw"
              :src="tempData.result.logo"
            />
            <div class="header-info">
              <span>{{ tempData.result.expName }}</span>&nbsp;
              <a style="color:#b3b3b3;" :href="`tel:${tempData.result.expPhone}`">
                <van-icon style="font-size: 16px;" name="phone" />
              </a>
              <br>
              <span>官网：<a style="color:#b3b3b3;" :href="`http://${tempData.result.expSite}`" target="_blank">{{ tempData.result.expSite }}</a></span>
            </div>
          </van-col>
          <van-col span="24" style="margin-top: 5vw;">
            <van-steps direction="vertical" :active="0">
              <van-step v-for="item in tempData.result.list" :key="item.time" class="result-list">
                <p class="contxt">{{ item.status }}</p>
                <p class="time">{{ item.time }}</p>
              </van-step>
            </van-steps>
          </van-col>
        </van-row> 
      </div>
      <template #footer>
        <div style="width: 100%;text-align: right;">
          <van-button style="margin-right: 3vw;" size="small">关注快递</van-button>
          <van-button type="primary" size="small" @click="show = true">显示轨迹</van-button>
        </div>
      </template>
    </van-panel>
    <van-overlay style="z-index: 10000;" :show="show" @click="show = false">
      <div class="wrapper">
        <div ref="map" class="block" />
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      status: ['等待揽件', '正在运输', '正在派件', '已签收', '派送失败', '疑难件', '推荐签收'],
      tempData: {
        "status": "0", 
        "msg": "ok",
        "result": {
          "number": "75323067533760",
          "type": "ZTO",
          "list": [{
            "time": "2019-12-26 11:50:06",
            "status": "【周口市】  快件已由【快递超市的中通快递辛集营业部】代签收, 如有问题请电联刘发发（15539423377 / 15539423377）, 感谢您使用中通快递, 期待再次为您服务!",
            "cityLoeLae": ["周口市", "114.696951", "33.626149"] /* 途径城市经纬度*/
          }, {
            "time": "2019-12-26 07:42:59",
            "status": "【周口市】  【鹿邑县】 的快递小刘（15539423377） 正在第1次派件, 请保持电话畅通,并耐心等待（95720为中通快递员外呼专属号码，请放心接听）",
            "cityLoeLae": ["周口市", "114.696951", "33.626149"]
          }, {
            "time": "2019-12-26 07:41:14",
            "status": "【周口市】  快件已经到达 【鹿邑县】",
            "cityLoeLae": ["周口市", "114.696951", "33.626149"]
          }, {
            "time": "2019-12-25 14:59:24",
            "status": "【漯河市】  快件离开 【漯河中转】 已发往 【鹿邑县】",
            "cityLoeLae": ["漯河市", "114.016539", "33.581412"]
          }, {
            "time": "2019-12-25 14:53:06",
            "status": "【漯河市】  快件已经到达 【漯河中转】",
            "cityLoeLae": ["漯河市", "114.016539", "33.581412"]
          }, {
            "time": "2019-12-25 10:30:16",
            "status": "【郑州市】  快件离开 【郑州中转】 已发往 【漯河中转】",
            "cityLoeLae": ["郑州市", "113.625368", "34.746599"]
          }, {
            "time": "2019-12-25 10:22:39",
            "status": "【郑州市】  快件已经到达 【郑州中转】",
            "cityLoeLae": ["郑州市", "113.625368", "34.746599"]
          }, {
            "time": "2019-12-24 22:14:46",
            "status": "【合肥市】  快件离开 【合肥中转部】 已发往 【漯河中转】",
            "cityLoeLae": ["合肥市", "117.227239", "31.820586"]
          }, {
            "time": "2019-12-24 21:56:51",
            "status": "【合肥市】  快件已经到达 【合肥中转部】",
            "cityLoeLae": ["合肥市", "117.227239", "31.820586"] 
          }, {
            "time": "2019-12-24 19:23:43",
            "status": "【合肥市】  快件离开 【合肥高新一部】 已发往 【合肥中转部】",
            "cityLoeLae": ["合肥市", "117.227239", "31.820586"]  /* 途径城市经纬度*/
          }, {
            "time": "2019-12-24 18:56:39",
            "status": "【合肥市】  【合肥高新一部】（0551-66164719） 的 徐枫（15755415548） 已揽收",
            "cityLoeLae": ["合肥市", "117.227239", "31.820586"] /* 途径城市经纬度*/
          }],
          "deliverystatus": "1", /* 0：快递收件(揽件)1.在途中 2.正在派件 3.已签收 4.派送失败 5.疑难件 6.退件签收  */
          "issign": "0",                       /*  1.是否签收                  */
          "expName": "中通快递",               /*  快递公司名称                */
          "expSite": "www.zto.com ",           /*  快递公司官网                */
          "expPhone": "95311",                 /*  快递公司电话                */
          "courier": "刘发发",                 /*  快递员 或 快递站(没有则为空)*/
          "courierPhone": "15539423377",       /*  快递员电话 (没有则为空)     */
          "updateTime": "2019-12-26 11:50:06", /*  快递轨迹信息最新时间        */
          "takeTime": "1天16小时53分",         /*  发货到收货消耗时长 (截止最新轨迹)  */
          "citys": ["合肥市", "郑州市", "漯河市", "周口市"],     /*  途径城市经纬度  */
          "logo": "http://img3.fegine.com/express/zto.jpg"
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.status-normal {
  /deep/  .van-panel__header-value {
    color #07c160
  }
}
.detail-context {
  padding 20px
  .header-info {
    height 10vw
    font-size 14px
    display inline-block
    vertical-align top
    line-height 5vw
    margin-left 5vw
    a {
      color: #333333
    }
    
  }
  .result-list {
    .contxt {
      font-size 14px
    }
  }
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block {
  width: 90vw;
  height: 80vw;
  background-color: #fff;
}
</style>
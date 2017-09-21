<template>
  <div class="house-detail">

    <div class="house-detail-header">
      <div class="house-detail-header-i" @click="routerTo"></div>
    </div>

    <Swipe :auto="4000" style="width: 100%; height: 18rem;">
      <Swipe-item style=""><img width="100%" src="../../assets/newhouse-slider.png" alt=""></Swipe-item>
      <Swipe-item style=""><img width="100%" src="../../assets/newhouse-slider.png" alt=""></Swipe-item>
      <Swipe-item style=""><img width="100%" src="../../assets/newhouse-slider.png" alt=""></Swipe-item>
    </Swipe>

    <div style="background-color: white">
      <p class="house-title">{{houseData.village}} 售价{{houseData.total_price}}万</p>

      <div style="width:100%">
        <div class="house-header">
          <ul class="house-header-ul">
            <li class="house-header-first">{{houseData.total_price}}万</li>
            <li class="house-header-second">售价</li>
          </ul>
          <ul class="house-header-ul">
            <li class="house-header-first">{{houseData.bedroom}}室{{houseData.livingroom}}厅{{houseData.wc}}卫</li>
            <li class="house-header-second">户型</li>
          </ul>
          <ul class="house-header-ul">
            <li class="house-header-first">{{houseData.built_area}}m²</li>
            <li class="house-header-second">面积</li>
          </ul>
        </div>
      </div>
    </div>
    <div style="background-color: white; margin-top: 0.8rem" class="house-content">
      <p><span class="house-content-left">均价: <strong>8088元/平</strong> </span> <span class="house-content-right">首付: <strong>{{houseData.first_pay}}</strong> </span></p>
      <p><span class="house-content-left">挂牌: <strong>{{houseData.guapai}}</strong> </span> <span class="house-content-right">用途: <strong>{{houseData.purpose}}</strong> </span></p>
      <p><span class="house-content-left">楼层: <strong>{{houseData.floor}}</strong> </span> <span class="house-content-right">朝向: <strong>{{houseData.direction}}</strong> </span></p>
      <p><span class="house-content-left">装修: <strong>{{houseData.decoration}}</strong> </span> <span class="house-content-right">楼型: <strong>{{houseData.type}}</strong> </span></p>
      <p><span class="house-content-left">年代: <strong>{{houseData.age}}</strong> </span> <span class="house-content-right">区域: <strong>{{houseData.region_name}}</strong> </span></p>
      <p><span class="house-content-left">房源编号: <strong>{{houseData.number}}</strong> </span> <span class="house-content-right">权属: <strong>{{houseData.quanshu}}</strong> </span></p>
      <p><span class="house-content-left">小区: <strong>{{houseData.village}}</strong> </span></p>
      <p><span class="house-content-left">看房时间: <strong>{{houseData.ht_description}}</strong> </span></p>
    </div>

    <div class="house-type">
      <div class="house-type-title">
        <p>房源特点 <span>更多</span></p>
      </div>
      <div class="house-type-content">
        <p>核心卖点</p>
        <p>{{houseData.highlights}}</p>
      </div>
      <div class="house-type-content">
        <p>户型介绍</p>
        <p>{{houseData.bedroom}}室{{houseData.livingroom}}厅{{houseData.wc}}卫</p>
      </div>
    </div>

    <div class="house-type">
      <div class="house-type-title">
        <p>经纪人房评<span>更多</span></p>
      </div>
      <div class="house-type-content house-content-ren">
        <span><img :src="'http://114.215.83.139' + peopleData.agent_face" width="100%" height="100%" alt=""></span>
        <span>{{peopleData.agent_name}}</span>
      </div>
    </div>

    <div class="house-type">
      <div class="house-type-title">
        <p>带看记录<span>更多</span></p>
      </div>
      <div class="house-type-content house-watch">
        <div>
          <ul>
            <li>{{watchData.seven}}</li>
            <li>近七日带看(次)</li>
          </ul>
          <ul>
            <li>{{watchData.all}}</li>
            <li>累计带看(次)</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="house-type">
      <div class="house-type-title">
        <p>地理位置</p>
      </div>
      <div class="house-type-content">

      </div>
    </div>

    <div class="house-detail-footer">
      <ul>
        <li> <i></i> 关注</li>
        <li>预约看房</li>
        <li>咨询经纪人</li>
      </ul>
    </div>

  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui'
  import { usedDetail } from '../../api/api'
  export default{
    components: {
      Swipe,
      SwipeItem
    },
    data () {
      return {
        id: 0,
        houseData: {},
        peopleData: {},
        watchData: {}
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.id = this.$route.params.id
        var self = this
        usedDetail({id: this.id}).then(function (res) {
          self.houseData = res.data.data.fangyuanxinxi[0]
          self.peopleData = res.data.data.jingjirenpingfang[0]
          self.watchData = res.data.data.daikanjilu[0]
        })
      },
      routerTo () {
//        this.$router.push({ name: 'UsedHouse' })
//        this.$router.back(-1)
        history.back()
      }
    }
  }
</script>

<style leng="less" scoped>
  @import "SecondHand.less";
</style>
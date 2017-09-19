<template>
  <div class="newhouse-box">
    <Swipe :auto="4000" style="width: 100%; height: 18rem;">
      <Swipe-item style=""><img width="100%" src="../../assets/newhouse-slider.png" alt=""></Swipe-item>
      <Swipe-item style=""><img width="100%" src="../../assets/newhouse-slider.png" alt=""></Swipe-item>
      <Swipe-item style=""><img width="100%" src="../../assets/newhouse-slider.png" alt=""></Swipe-item>
    </Swipe>

    <div class="newhouse-tab">
      <ul>
        <li>区域 <i class="newhouse-tab-i"></i></li>
        <li>价格 <i class="newhouse-tab-i"></i></li>
        <li>房型 <i class="newhouse-tab-i"></i></li>
        <li>更多 <i class="newhouse-tab-i"></i></li>
      </ul>
    </div>

    <div class="newhouse-list">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="item in usedHouseData">
          <a href="">
            <div class="newhouse-list-img"><img src="../../assets/moren_house_01.png" alt=""></div>
            <div class="newhouse-list-content">
              <p class="list-content-title">{{item.village}}</p>
              <p class="list-content-dec">{{item.bedroom}}室{{item.livingroom}}厅{{item.wc}}卫/{{item.built_area}}m²/{{item.direction}}</p>
              <p><span class="list-content-price-left">{{item.total_price}}万</span><span class="list-content-price-right">{{item.unit_price}}/m²</span></p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div>
      <mt-button @click="popupList" class="newhouse-list-order">排序</mt-button>
    </div>

    <div class="newhouse-tab top-tab-list">
      <ul>
        <li @click="selected=1">区域 <i class="newhouse-tab-i"></i></li>
        <li @click="selected=2">价格 <i class="newhouse-tab-i"></i></li>
        <li @click="selected=3">房型 <i class="newhouse-tab-i"></i></li>
        <li @click="selected=4">更多 <i class="newhouse-tab-i"></i></li>
      </ul>
    </div>

    <tab-container v-model="selected">
      <tab-container-item id="1">1</tab-container-item>
      <tab-container-item id="2">2</tab-container-item>
      <tab-container-item id="3">3</tab-container-item>
      <tab-container-item id="4">4</tab-container-item>
    </tab-container>

    <Popup
      v-model="popupVisible"
      position="bottom">
        <ul class="popupList">
          <li>默认排序</li>
          <li>最新发布</li>
          <li>总价从高到低</li>
          <li>总价从低到高</li>
          <li>面积从高到低</li>
          <li>面积从低到高</li>
        </ul>
    </Popup>
  </div>
</template>

<script>
  import { Swipe, SwipeItem, InfiniteScroll, Popup, Button, Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'
  import {usedHouse} from '../../api/api'
  export default{
    components: {
      Swipe,
      SwipeItem,
      InfiniteScroll,
      Popup,
      mtButton: Button,
      Navbar,
      TabItem,
      TabContainer,
      TabContainerItem
    },
    data () {
      return {
        popupVisible: false,
        usedHouseLoading: false,
        usedHouseData: [],
        selected: 1
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        var self = this
        usedHouse().then(function (res) {
          console.log(res.data)
          self.usedHouseData = res.data.data
          console.log(self.usedHouseData)
        })
      },
      loadMore () {},
      popupList () {
        this.popupVisible = true
      }
    }
  }
</script>

<style leng="less">
  @import "UsedHouse.less";
</style>
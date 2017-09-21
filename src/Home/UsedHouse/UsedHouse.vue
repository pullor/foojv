<template>
  <div class="newhouse-box">
    <Swipe :auto="4000" style="width: 100%; height: 18rem;">
      <Swipe-item style=""><img width="100%" src="../../assets/newhouse-slider.png" alt=""></Swipe-item>
      <Swipe-item style=""><img width="100%" src="../../assets/newhouse-slider.png" alt=""></Swipe-item>
      <Swipe-item style=""><img width="100%" src="../../assets/newhouse-slider.png" alt=""></Swipe-item>
    </Swipe>

    <div class="newhouse-tab" @click="popupTopShow">
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
          <a href="" :data-index=item.id  @click="getHouseDetails">
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

    <Popup
      v-model="popupTopVisible"
      position="top">
      <div class="newhouse-tab top-tab-list">
        <ul style="background-color: white; height: 2.5rem; padding: 0; line-height: 2.5rem">
          <li style="z-index: 40; background-color: white" @click="selected=1">区域 <i class="newhouse-tab-i"></i></li>
          <li style="z-index: 40; background-color: white" @click="selected=2">价格 <i class="newhouse-tab-i"></i></li>
          <li style="z-index: 40; background-color: white" @click="selected=3">房型 <i class="newhouse-tab-i"></i></li>
          <li style="z-index: 40; background-color: white" @click="selected=4">更多 <i class="newhouse-tab-i"></i></li>
        </ul>

        <div class="newhouse-tab-item">

          <transition name="fade" mode="out-in">
            <div v-if="selected==1" class="newhouse-tab-add" @click="getHouseMap">
            <Radio
              align="right"
              v-model="houseMap"
              :options="['不限', '金桥开发区', '如意开发区', '玉泉区', '回民区', '赛罕区', '新城区']">
            </Radio>
          </div>
          </transition>

          <transition name="fade" mode="out-in">
            <div v-if="selected==2" class="newhouse-tab-add" @click="getHousePrice">
            <Radio
              align="right"
              v-model="housePrice"
              :options="['不限', '50万以下', '50万-100万', '100万-200万', '200万-300万', '300万-400万', '400万-500万'
              , '500万-600万', '600万-700万', '700万-800万', '800万-900万', '900万-1000万', '1000万以上']">
            </Radio>
          </div>
          </transition>

          <transition name="fade" mode="out-in">
            <div v-if="selected==3" class="newhouse-tab-add">
            <checklist
              align="right"
              v-model="houseType"
              :options="['不限', '一室', '二室', '三室', '四室', '五室', '五室以上']">
            </checklist>
            <Button class="newhouse-tab-yes" @click="getHouseBedroom">确认</Button>
          </div>
          </transition>

          <transition name="fade" mode="out-in">
            <div v-if="selected==4" class="newhouse-tab-add more-house">
            <div class="more-house-list-content">
              <div class="more-house-item">
                <checklist
                  title="朝向"
                  align="right"
                  v-model="moreData"
                  :options="['东', '西', '南', '北', '南北']">
                </checklist>
              </div>
              <div class="more-house-item">
                <checklist
                  title="建筑面积"
                  align="right"
                  v-model="moreData"
                  :options="['50以下', '50-70', '70-90', '90-110', '110-130', '130-150', '150-200', '200以上']">
                </checklist>
              </div>
              <div class="more-house-item">
                <checklist
                  title="标签"
                  align="right"
                  v-model="moreData"
                  :options="['精品房源', '满五唯一']">
                </checklist>
              </div>
              <div class="more-house-item">
                <checklist
                  title="房龄"
                  align="right"
                  v-model="moreData"
                  :options="['5年以内','10年以内', '15年以内', '20年以内', '20年以上']">
                </checklist>
              </div>
              <div class="more-house-item">
                <checklist
                  title="楼层"
                  align="right"
                  v-model="moreData"
                  :options="['底层','低楼层', '中楼层', '高楼层', '顶层']">
                </checklist>
              </div>
              <div class="more-house-item">
                <checklist
                  title="装修情况"
                  align="right"
                  v-model="moreData"
                  :options="['毛坯','简易装修', '精装修', '豪华装修']">
                </checklist>
              </div>
              <div class="more-house-item">
                <checklist
                  title="是否配备电梯"
                  align="right"
                  v-model="moreData"
                  :options="['有电梯', '无电梯']">
                </checklist>
              </div>
              <div class="more-house-item">
                <checklist
                  title="类型"
                  align="right"
                  v-model="moreData"
                  :options="['平层', '复式', '跃层']">
                </checklist>
              </div>
            </div>
            <Button class="newhouse-tab-yes" style="background-color: white; color: #999; border: 0">清除条件</Button>
            <Button class="newhouse-tab-yes" style="border: 0; outline-style: none">确认</Button>
          </div>
          </transition>

        </div>

      </div>
    </Popup>

    <Popup
      v-model="popupLowVisible"
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
  import { Swipe, SwipeItem, InfiniteScroll, Popup, Button, Navbar, TabItem, TabContainer, TabContainerItem, Checklist, Radio } from 'mint-ui'
  import {usedList} from '../../api/api'
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
      TabContainerItem,
      checklist: Checklist,
      Radio
    },
    data () {
      return {
        popupTopVisible: false,
        popupLowVisible: false,
        usedHouseLoading: false,
        usedHouseData: [],
        selected: 0,
        houseType: [],
        houseMap: '',
        housePrice: '',
        moreData: []
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        var self = this
        usedList().then(function (res) {
          console.log(res.data)
          self.usedHouseData = res.data.data
        })
      },
      loadMore () {},
      popupList () {
        this.popupLowVisible = true
      },
      popupTopShow () {
        this.popupTopVisible = true
      },
      gethouseMap () {
        var self = this
        setTimeout(function () {
          self.popupTopVisible = false
          console.log(self.houseMap)
          if (self.houseMap === '不限') {
            self.getData()
          } else {
            usedList({ r_id: "'+self.houseMap+'" }).then(function (res) {
              self.usedHouseData = []
              self.usedHouseData = res.data.data
              console.log(self.usedHouseData)
            })
          }
        }, 10)
      },
      getHousePrice () {
        var self = this
        setTimeout(function () {
          self.popupTopVisible = false
          console.log(self.housePrice)
          if (self.housePrice === '不限') {
            self.getData()
          } else {
            var reg = /[0-9]{1,5}/g
            var temp
            var priceData = []
            while ((temp = reg.exec(self.housePrice)) != null) {
              priceData.push(temp[0])
            }
            console.log(priceData)
            var totalData = priceData[0] + '-' + priceData[1]
            console.log(totalData)
            usedList({ total_price: totalData }).then(function (res) {
              self.usedHouseData = []
              self.usedHouseData = res.data.data
              console.log(self.usedHouseData)
            })
          }
        }, 10)
      },
      getHouseBedroom () {
        var self = this
        setTimeout(function () {
          self.popupTopVisible = false
          console.log(self.houseType)
          if (self.houseMap === '不限') {
            self.getData()
          } else {
            usedList({}).then(function (res) {
              self.usedHouseData = []
              self.usedHouseData = res.data.data
              console.log(self.usedHouseData)
            })
          }
        }, 10)
      },
      getHouseDetails (event) {
        event.preventDefault()
        var id = event.currentTarget.getAttribute('data-index')
        console.log(id)
        this.$router.push({name: 'SecondHand', params: {id: id}})
          usedList({r_id: self.houseMap}).then(function (res) {
            console.log(res.data)
            self.usedHouseData = res.data.data
          })
        }, 100)
      }
    }
  }
</script>

<style leng="less" scoped>
  @import "UsedHouse.less";
</style>

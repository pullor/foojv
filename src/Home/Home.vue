<template>
  <section class="box">
    <div class="header">
      <router-link to="/location" class="searchlocation">呼和浩特市</router-link>
      <router-link to="/search" class="headersearch"><i class="c_icon"></i><input type="text" placeholder="输入小区进行搜索" class="searchinput"></router-link>
    </div>
    <div class="swipe-wrapper">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="swipe-item-1"></mt-swipe-item>
        <mt-swipe-item class="swipe-item-2"></mt-swipe-item>
        <mt-swipe-item class="swipe-item-3"></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="selection">
      <ul>
        <li><router-link to="/usedhouse"><img src="../assets/10@2x.png" alt=""><br><span>二手房</span></router-link></li>
        <li><router-link to="/newhouse"><img src="../assets/11@2x.png" alt=""><br><span>新房</span></router-link></li>
        <li><router-link to="/renthouse"><img src="../assets/12@2x.png" alt=""><br><span>租房</span></router-link></li>
        <li><router-link to="/maphouse"><img src="../assets/13@2x.png" alt=""><br><span>地图找房</span></router-link></li>
      </ul>
    </div>
    <div class="selection">
      <ul>
        <li><router-link to="/shophouse"><img src="../assets/4@2x.png" alt=""> <br><span>查门店</span></a></router-link></li>
        <li><router-link to="/findhouse"><img src="../assets/15@2x.png" alt=""><br><span>找小区</span></a></router-link></li>
        <li><router-link to="/schoolhouse"><img src="../assets/16@2x.png" alt=""><br><span>学区房</span></a></router-link></li>
        <li><router-link to="/onlinehouse"><img src="../assets/17@2x.png" alt=""><br><span>在线委托</span></a></router-link></li>
      </ul><span></span>
    </div>
    <div class="toutiao">
      <ul>
        <li class="image"></li>
        <li class="toutiaocontent">
          <div id="toutiaocontent">
          <p class="firstnews"> 第一条新闻</p>
          <p class="secondnews"> 第二条新闻</p>
          <p class="thirdnews"> 第三条新闻</p>
          </div>
        </li>
      </ul>
    </div>
    <mt-header title="活动专题">
      <router-link to="/activity" slot="right">
        <mt-button icon="right">更多</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="swipe-wrapper">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="swipe-item-4"></mt-swipe-item>
        <mt-swipe-item class="swipe-item-5"></mt-swipe-item>
        <mt-swipe-item class="swipe-item-6"></mt-swipe-item>
      </mt-swipe>
    </div>
    <mt-header title="福居百科">
      <router-link to="/knowledge" slot="right">
        <mt-button icon="">更多</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="baike">
      <ul>
        <li class="baike1">二手房</li>
        <li class="baike2">新房</li>
        <li class="baike3">购房宝典</li>
        <li class="baike4">租房</li>
        <li class="baike5">换房</li>
      </ul>
    </div>
    <mt-header title="热门推荐">
      <mt-button icon="" slot="right" @click.native="changeurl" >{{this.selected}}</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <mt-navbar v-model="selected">
      <mt-tab-item id="更多二手房">二手房</mt-tab-item>
      <mt-tab-item id="更多新房">新房</mt-tab-item>
      <mt-tab-item id="更多租房">租房</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="更多二手房">
        <mt-cell v-for="item in usedlist" key="1">
          <img src="../assets/usedhouse1.png" alt="" >
          <div class="usedhousecontent">
          <p class="usedHdec">{{item.address}} {{item.decoration}}</p>
          <p>{{item.livingroom}}室{{item.wc}}卫/{{item.direction}}</p>
            <p class="Hprice"><span class="total">{{item.total_price}}万</span>
          {{item.unit_price}}/m²</p>
          </div>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="更多新房">
        <mt-cell v-for="item in newlist"  key="2">
          <img src="../assets/usedhouse1.png" alt="" >
          <div class="usedhousecontent">
            <p class="usedHdec">{{item.address}} {{item.decoration}}</p>
            <p>{{item.livingroom}}室{{item.wc}}卫/{{item.direction}}</p>
            <p class="Hprice"><span class="total">{{item.property_price}}万</span>
              {{item.average_price}}/m²</p>
            </div>
          </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="更多租房">
        <mt-cell v-for="item in RetalLists" key="3">
          <img src="../assets/usedhouse1.png" alt="" >
          <div class="usedhousecontent">
            <p class="usedHdec">{{item.address}} {{item.decoration}}</p>
            <p>{{item.livingroom}}室{{item.wc}}卫/{{item.direction}}/{{item.built_area}}/m²</p>
            <p class="Hprice"><span class="total">{{item.rent}}/{{item.rent_type}}</span></p>
          </div>
          </mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>


    <div class="toutiao">
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
    <footerbar></footerbar>
  </section>
</template>

<script>
  import footerbar from '../components/Footbar.vue'
  import router from '../router/index'
  import {usedList, adLists, adDetail, RetalLists, NewList, usedDetail} from '../api/api'
  export default {
    components: {
      footerbar: footerbar
    },
    data () {
      return {
        selected: '更多二手房',
        active: '',
        usedlist: [],
        adlist: [],
        adDetail: [],
        RetalLists: [],
        newlist: []
      }
    },
    mounted () {
      this.getusedlist('1-100000')
      this.getusedDetail(16)
      this.getRetalLists()
      this.getNewList()
      var newsbox = document.getElementById('toutiaocontent')
      var boxheight = 0
      setInterval(function () {
        boxheight -= 1.4
        if (boxheight < -2) {
          boxheight = 0
        }
        newsbox.style.top = boxheight + 'rem'
        console.log(boxheight)
      }, 2000)
    },
    methods: {
      changeurl () {
        if (this.selected === '更多二手房') {
          router.push('/usedhouse')
        }
        if (this.selected === '更多新房') {
          router.push('/newhouse')
        }
        if (this.selected === '更多租房') {
          router.push('/renthouse')
        }
      },
      getusedlist (params) {
        var self = this
        usedList(params).then(function (res) {
          if (res.data.code === 200) {
            self.usedlist = res.data.data
            self.usedlist.length = 5
          }
        }).catch(function () {})
      },
//      获取二手房列表
      getusedDetail (totalp) {
        var self = this
        usedDetail(totalp).then(function (res) {
          if (res.data.code === 200) {
            self.usedlist = res.data.data
          }
        }).catch(function () {})
      },
      getadlist () {
        var self = this
        adLists().then(function (res) {
          if (res.data.code === 200) {
            self.adlist = res.data.data
            self.adlist.length = 5
          }
        }).catch(function () {})
      },
//      获取新闻列表
      getadDetail () {
        var self = this
        adDetail().then(function (res) {
          if (res.data.code === 200) {
            self.bottomlists = res.data.data
          }
        }).catch(function () {})
      },
//      获取新闻详情
      getRetalLists () {
        var self = this
        RetalLists().then(function (res) {
          if (res.data.code === 200) {
            self.RetalLists = res.data.data
            self.RetalLists.length = 5
          }
        }).catch(function () {})
      },
//       获取租房详情
      getNewList () {
        var self = this
        NewList().then(function (res) {
          if (res.data.code === 200) {
            self.newlist = res.data.data
            self.newlist.length = 5
          }
        }).catch(function () {})
      }
//      获取新房列表
    }
  }
</script>

<style>
.box{
  width: 100%;
  height: 100px;
}
a{
  color: #000;
  text-decoration: none;
}
ul{
  list-style: none;
}
section{
  font-size: 0.8rem;
}
.swipe-wrapper{
  width: 100%;
  height: 15rem;
}
.swipe-item-1{
  background: url("../assets/ad01.png");
  background-size: cover;
}
.swipe-item-2{
  background: url("../assets/ad01.png");
  background-size: cover;
}
.swipe-item-3{
  background: url("../assets/ad01.png");
  background-size: cover;
}
.swipe-item-4{
  background: url("http://www.fooju.cn//fjw/uploads/special/20170918/59bf24091ef1f.jpg") center center / 100% 100% no-repeat;
  background-size: cover;
}
.swipe-item-5{
  background: url("http://www.fooju.cn//fjw/uploads/special/20170918/59bf24091ef1f.jpg") center center / 100% 100% no-repeat;
  background-size: cover;
}
.swipe-item-6{
  background: url("http://www.fooju.cn//fjw/uploads/special/20170918/59bf24091ef1f.jpg") center center / 100% 100% no-repeat;
  background-size: cover;
}
.selection ul{
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 2rem;
}
.selection ul img{
  width: 2.5rem;
  height: 2.5rem;
}
.toutiao{
  width: 100%;
  height: 5rem;
}
.toutiao .image{
  display: inline-block;
  background: url("../assets/fujutoutiao.png");
  background-size: cover;
  height: 3rem;
  width: 3rem;
  margin: 1rem;
}
.toutiao .toutiaocontent{
  display: inline-block;
  height: 3rem;
  width: 17.3rem;
  background-color: white;
  border-left:0.05rem solid #ccc;
  margin-bottom: 1rem;
  overflow: hidden;

}
#toutiaocontent{
  position: relative;
  top:0;
  left: 0;
}
.toutiao .toutiaocontent p{
  width: 17rem;
  height: 1.3rem;
  margin-top: 0.1rem;
  margin-bottom: 0.15rem;
  margin-left: 0.2rem;
  background-color: navajowhite;
}
.mint-header{
  font-size: 0.9rem;
  height: 2.5rem;
  text-align: left;
  color: black;
  background-color: white;
}
.is-left{
  margin-left: -7rem;
}
.is-right{
  margin-right: 1rem;
}
.header{
  background-color:rgba(0,0,0,0.3);
  color: #fff;
  width: 100%;
  height: 2.2rem;
  z-index: 100;
  position: fixed;
  top: 0;
  padding-top: 0.3rem;
}
.searchlocation{
  width: 60%;
  font-size: 0.9rem;
  color: #fff;
  padding-left: 2rem;
}
.headersearch{
  display: inline-block;
}
::-webkit-input-placeholder { /* WebKit browsers */
  color:    #fff;
}
.searchinput{
  background-color: rgba(0,0,0,0.3);
  font-size: 0.8rem;
  border: 0px;
  height: 1.7rem;
  width: 14rem;
  margin-left: 1.99rem;
  border-top-right-radius:1rem;
  border-bottom-right-radius: 1rem;
}
.c_icon{
  display: inline-block;
  background: url("../assets/search.png") no-repeat center rgba(0,0,0,0.3);

  background-size: 0.8rem 0.8rem;
  height: 1.7rem;
  padding-left: 2rem;
  position: absolute;
  top: 0.3rem;
  border-top-left-radius:1rem;
  border-bottom-left-radius: 1rem;
}
.mint-tab-item-label{
  font-size: 0.8rem;
}
  .baike ul{
    display: flex;
    flex:1;
    justify-content: space-around;
  }
  .baike ul li{
    height: 4rem;
    width: 4rem;
    text-align: center;
    line-height: 4rem;
    color: white;
  }
  .baike1{
    background: url("http://www.fooju.cn/fjw/uploads/encyType/20170829/59a4cd9f6d206.png") center center no-repeat;
  }
  .baike2{
    background: url("http://www.fooju.cn/fjw/uploads/encyType/20170829/59a4cd873ab7d.png") center center no-repeat;
  }
  .baike3{
    background: url("http://www.fooju.cn/fjw/uploads/encyType/20170829/59a4cd7b9d5ee.png") center center no-repeat;
  }
.baike4{
  background: url("http://www.fooju.cn/fjw/uploads/encyType/20170829/59a4cd6668c9d.png") center center no-repeat;
}
.baike5{
  background: url("http://www.fooju.cn/fjw/uploads/encyType/20170829/59a4cd70a0738.png") center center no-repeat;
}
.mint-cell-text{
  font-size: 1rem;
}
.mint-cell-wrapper{
  margin-bottom: 0.8rem;
}
  .mint-cell-value{
    display: block;
    height: 6rem;
    width: 100%;
    font-size: 0.8rem;
  }
.mint-cell-value img{
  display: block;
  height: 6rem ;
  width: 8rem;
  float: left;
  padding-right: 2rem;
}
.usedhousecontent{
  float: left;
}
.mint-cell-value .total{
  font-size: 1rem;
  color:red;
  padding-right: 0.5rem;
}
  .usedHdec{
    font-size: 0.9rem;
    color: black;
    padding-top: 0.8rem;
    padding-bottom: 0.5rem;
    overflow: hidden;
    width: 10rem;
    height: 1.3rem;
  }
  .Hprice{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
.mint-button-text{
  color: gray;
  font-size: 0.8rem;
}
</style>

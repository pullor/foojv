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
        <li></li>
      </ul>
    </div>
    <mt-header title="活动专题">
      <router-link to="/" slot="right">
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
      <router-link to="/" slot="right">
        <mt-button icon="right">更多</mt-button>
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
      <router-link to="/" slot="right">
        <mt-button icon="right">更多二手房</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">二手房</mt-tab-item>
      <mt-tab-item id="2">新房</mt-tab-item>
      <mt-tab-item id="3">租房</mt-tab-item>
    </mt-navbar>
    <div class="toutiao">
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="toutiao">
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
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
  export default {
    components: {
      footerbar: footerbar
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
  background-color: lightblue;
}
.toutiao .image{
  background: url("../assets/fujutoutiao.png");
  background-size: cover;
  height: 3rem;
  width: 3rem;
  padding: 0.5rem;
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
  background: url("http://www.fooju.cn/fjw/uploads/encyType/20170829/59a4cd7b9d5ee.png") center center no-repeat;
}
.baike5{
  background: url("http://www.fooju.cn/fjw/uploads/encyType/20170829/59a4cd7b9d5ee.png") center center no-repeat;
}

</style>

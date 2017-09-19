<template>
  <section class="box">
    <div class="header">
      <router-link to="/location" class="searchlocation">呼和浩特市</router-link>
      <router-link to="/search" class="headersearch"><i class="c_icon"></i><input type="text" placeholder="输入小区进行搜索" class="searchinput"></router-link>
    </div>
    <div class="swipe-wrapper">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="swipe-item-1">1</mt-swipe-item>
        <mt-swipe-item class="swipe-item-2">2</mt-swipe-item>
        <mt-swipe-item class="swipe-item-3">3</mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="selection">
      <ul>
        <li><router-link to="/usedhouse"><img src="../assets/10@2x.png" alt=""><br><span>二手房</span></router-link></li>
        <li><router-link to="/usedhouse"><img src="../assets/11@2x.png" alt=""><br><span>新房</span></router-link></li>
        <li><router-link to="/usedhouse"><img src="../assets/12@2x.png" alt=""><br><span>租房</span></router-link></li>
        <li><router-link to="/usedhouse"><img src="../assets/13@2x.png" alt=""><br><span>地图找房</span></router-link></li>
      </ul>
    </div>
    <div class="selection">
      <ul>
        <li><router-link to=""><img src="../assets/4@2x.png" alt=""> <br><span>查门店</span></a></router-link></li>
        <li><router-link to=""><img src="../assets/15@2x.png" alt=""><br><span>找小区</span></a></router-link></li>
        <li><router-link to=""><img src="../assets/16@2x.png" alt=""><br><span>学区房</span></a></router-link></li>
        <li><router-link to=""><img src="../assets/17@2x.png" alt=""><br><span>在线委托</span></a></router-link></li>
      </ul><span></span>
    </div>
    <div class="toutiao">
      <ul>
        <li></li>
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
        <mt-swipe-item class="swipe-item-1">1</mt-swipe-item>
        <mt-swipe-item class="swipe-item-2">2</mt-swipe-item>
        <mt-swipe-item class="swipe-item-3">3</mt-swipe-item>
      </mt-swipe>
    </div>
    <mt-header title="福居百科">
      <router-link to="/" slot="right">
        <mt-button icon="right">更多</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="toutiao">
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
    <mt-header title="热门推荐">
      <router-link to="/" slot="right">
        <mt-button icon="right">更多</mt-button>
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
  height: 10rem;
}
.swipe-item-1{
  background-color: lemonchiffon;
}
.swipe-item-2{
  background-color: lightblue;
}
.swipe-item-3{
  background-color: lightpink;
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

</style>

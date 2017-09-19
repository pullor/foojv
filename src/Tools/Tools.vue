<template>
  <section>
    <mt-header fixed title="福居工具"></mt-header>
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
      </ul>
    </div>
    <div class="selection">
      <ul>
        <li><router-link to=""><img src="../assets/4@2x.png" alt=""> <br><span>查门店</span></a></router-link></li>
        <li><router-link to=""><img src="../assets/15@2x.png" alt=""><br><span>找小区</span></a></router-link></li>
        <li><router-link to=""><img src="../assets/16@2x.png" alt=""><br><span>学区房</span></a></router-link></li>
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
  html{
    text-align: center;
  }
  .swipe-wrapper{
    width: 100%;
    height: 15rem;
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
    width: 2rem;
    height: 2rem;
  }
</style>

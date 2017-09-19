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
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui'
//  import {usedHouse} from '../../config/index'
  export default{
    components: {
      Swipe,
      SwipeItem
    }
  }
</script>

<style>
.newhouse-box{
  width: 100%;
}
.newhouse-tab{
  width: 100%;
  border: 1px solid red;
}
.newhouse-tab ul{
  display: flex;
  padding: 0.5rem 0rem;
}
.newhouse-tab ul li{
  flex: 1;
  text-align: center;
}
.newhouse-tab .newhouse-tab-i{
  width: 0.5rem;
  height: 0.5rem;
  display: inline-block;
  border-left: 0.08rem solid #aaa;
  border-bottom: 0.08rem solid #aaa;
  transform: rotate(-45deg);
  position: relative;
  top: -0.1rem;
}

</style>
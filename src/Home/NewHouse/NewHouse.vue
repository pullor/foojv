<template>
  <div class="newhouse-box">
    <Swipe :auto="4000" style="width:100%;height:10rem">
      <Swipe-item style="">1</Swipe-item>
      <Swipe-item style="">2</Swipe-item>
      <Swipe-item style="">3</Swipe-item>
    </Swipe>
    
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui'
  export default{
    components: {
      Swipe,
      SwipeItem
    }
  }
</script>

<style>
.newhouse-box{
  width:100%;
}

</style>
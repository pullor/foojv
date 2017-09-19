<template>
  <section class="box">
    <Swipe :auto="4000">
      <Swipe-item style="height: 100px; width: 100px; border: 1px solid red">1</Swipe-item>
      <Swipe-item style="height: 100px; width: 100px; border: 1px solid red">2</Swipe-item>
      <Swipe-item style="height: 100px; width: 100px; border: 1px solid red">3</Swipe-item>
    </Swipe>

    <footerbar></footerbar>
  </section>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui'
  import footerbar from '../components/Footbar.vue'
  export default {
    components: {
      footerbar: footerbar,
      Swipe,
      SwipeItem
    }
  }
</script>

<style>
.box{
  width: 100%;
  height: 100px;
}
</style>

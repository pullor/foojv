<template>
  <section id="footerbar">
    <router-link to="/home">首页</router-link>
    <router-link to="/tools">工具</router-link>
    <router-link to="/watch">看房</router-link>
    <router-link to="/mine">我</router-link>
  </section>
</template>

<script>
export default {

}
</script>

<style>
#footerbar{
  position: fixed;
  bottom: 0px;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #ddd;
}
#footerbar a{
  flex: 1;
  text-decoration: none;
  color: #999;
  font-size: 1.3rem;
}
</style>

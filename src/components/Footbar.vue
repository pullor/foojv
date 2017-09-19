<template>
  <section id="footerbar">
    <router-link to="/home">
      <i class="tabar-nav-i first-nav-i"><img src="../assets/tabar-home1.png" width="100%" alt=""></i>
      <i class="tabar-nav-i second-nav-i"><img src="../assets/tabar-home2.png" width="100%" alt=""></i>
      首页
    </router-link>
    <router-link to="/tools">
      <i class="tabar-nav-i first-nav-i"><img src="../assets/tabar-tool1.png" width="100%" alt=""></i>
      <i class="tabar-nav-i second-nav-i"><img src="../assets/tabar-tool2.png" width="100%" alt=""></i>
      工具
    </router-link>
    <router-link to="/watch">
      <i class="tabar-nav-i first-nav-i"><img src="../assets/tabar-watch1.png" width="100%" alt=""></i>
      <i class="tabar-nav-i second-nav-i"><img src="../assets/tabar-watch2.png" width="100%" alt=""></i>
      看房
    </router-link>
    <router-link to="/mine">
      <i class="tabar-nav-i first-nav-i"><img src="../assets/tabar-my1.png" width="100%" alt=""></i>
      <i class="tabar-nav-i second-nav-i"><img src="../assets/tabar-my2.png" width="100%" alt=""></i>
      我
    </router-link>
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
    background-color: white;
    border-top: 1px solid #ccc;
    padding-top: 0.2rem;
  }
  #footerbar a{
    flex: 1;
    text-decoration: none;
    color: #999;
    font-size: 1rem;
  }
  #footerbar .first-nav-i{
    display: none;
  }
  .router-link-active .first-nav-i{
    color: red !important;
    display: block !important;
  }
  .router-link-active .second-nav-i{
    display: none;
  }
  .router-link-active {
    color: red !important;
  }
  .tabar-nav-i {
    /*border: 1px solid red;*/
    width: 1.8rem;
    height: 1.8rem;
    display: block;
    margin: 0rem auto;
  }
</style>


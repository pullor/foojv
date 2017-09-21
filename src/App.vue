<template>
  <div id="app">
    <transition name="app-fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html{
  font-size: 40px;
}
*{
  margin: 0px;
  padding: 0px;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
}
.app-fade-enter-active {
  transition: all .3s;
}
.app-fade-leave-active {
  transition: all .1s;
}
.app-fade-enter, .app-fade-leave-to {
  opacity: 0;
}
.app-fade-leave, .app-fade-enter-to {
  opacity: 1;
}
</style>

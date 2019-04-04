<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.ivu-layout-header{
  width: 1200px;
  margin: auto;
  background: none;
  margin-top: 20px;
}
.ivu-layout {
  background: #fff;
  background: url('../src/images/bg/03.jpg');
}
.ivu-layout-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #999;
  background: #000;
}
.ivu-menu-horizontal.ivu-menu-light:after{
  background: none;
}
</style>

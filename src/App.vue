<template>
  <div id="app">
    <!--<img id="mlogo" src="./assets/logo.png">-->
    <!--top menu bar-->
    <mmenu id="mmenu"></mmenu>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import menutab from '@/components/menutab'

Vue.component('mmenu', menutab)

export default {
  name: 'app'
}
</script>

<style>
#mlogo{
top:10px;
left:10px;
position:fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html{
  background-image:url('http://img.diytrade.com/cdimg/405105/2298248/0/1150350091.jpg');
/* background-image: url('https://images8.alphacoders.com/525/525377.jpg'); */
}
#mmenu{
z-index:10;
position:fixed;
top:0px;
right:0px;
width:100%;
height:50px;
}
</style>

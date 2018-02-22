<template>
  <div id="ls_main">
        <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'ls_main',
}
</script>

<style>
#ls_main{
  margin-left:20%;
  width:50%;
  height:100%;
/*  opacity:1;*/
  background-color:white;
}
</style>

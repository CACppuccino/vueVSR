<template>
  <div id="doc_main">
        <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'doc_main',
}
</script>

<style>
#doc_main{
  margin-left:20%;
  width:60%;
  height:100%;
  opacity:0.9;
  background-color:white;
}
</style>

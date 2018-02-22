<template>
  <div id='dashboard'>
    <!-- tabbar -->
    <div>
     <usrtab></usrtab>
    </div>
    <router-view/>
  </div>
</template>

<script>
import usertab from '@/components/usertab'
import Vue from 'vue'
Vue.component('usrtab', usertab)

export default{
  name:'dashboard',
  methods: {
  }
}
</script>

<style>
#dashboard{
  opacity:0.9;
  width:100%;
}
</style>

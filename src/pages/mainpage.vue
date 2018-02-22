<template>
<!-- streets views -->
    <div id="mainpage">
        <pic></pic>
    </div>
</template>

<script>
import Vue from 'vue'
import editor from '@/components/editor'
import picnav from '@/components/picnav'

Vue.component('pic', picnav)

export default {
  name: 'mainpage'
}
</script>

<style>
#mainpage{
padding-top:30px;
}
#streets{
height:100%;
width: 100%;
}
</style>

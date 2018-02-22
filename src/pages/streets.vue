<template>
<!-- streets views -->
    <div id="streets">
    streets view
    <editp></editp>
    </div>
</template>

<script>
import Vue from 'vue'
import editor from '@/components/editor'

Vue.component('editp', {
  template: 'editor'
})

export default {
  name: 'streets'
}
</script>

<style>
#streets{
height:100%;
width: 100%;
}
</style>

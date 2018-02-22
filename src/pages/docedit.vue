<template>
    <div id="doc_edit">
      <editor></editor>
    </div>
</template>

<script>
import Vue from 'vue'
import editor from '@/components/editor' 

Vue.component('editor', editor)
export default {
  name:'doc_edit'
}
</script>

<style>
#doc_main{
  width:100%;
  margin-left:0;
  opacity:1;
}
editor{
  box-sizing:border-box;
}
</style>

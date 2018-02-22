<template>
    <div id="menutab">
    <el-menu 
        :default-active="activeIndex" 
        class="el-menu-demo" 
        mode="horizontal" 
        background-color="#545c64"
        text-color="#ffffff"
        active-text-color="#ffd04b"
        >
    <el-menu-item index="1" @click="navigate('/')">Home</el-menu-item>
    <el-submenu index="3">
        <template slot="title">User</template>
        <el-menu-item index="3-1" v-if="!ustate" @click="navigate('/login')" id="loginbox">login</el-menu-item>
        <el-menu-item index="3-2" v-if="!ustate" @click="navigate('/dashboard')" id="loginbox">dashboard</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
        <template slot="title">Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
    </el-submenu>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
    </el-menu>
    <div class="line"></div>
    </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

export default {
  name: 'menutab',
  data() {
    return {
      ustate:false,
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    navigate: function(r) {
      this.$router.push(r)
    },
  }
}
</script>

<styles>
#loginbox{
display:block;
}
</styles>

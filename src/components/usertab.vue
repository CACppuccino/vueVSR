<template>
  <div id="usertab">
    <el-col :span="12" style="margin-top:3%;">
        <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item  index="1">
            <div @click="swapBoard($event)" data-name="profile">
            <i class="el-icon-edit-outline"></i>
            <span  slot="title">Profile</span>
            </div>
        </el-menu-item>
        <el-menu-item  index="2">
            <div @click="swapBoard($event)" data-name="settings">
            <i class="el-icon-menu"></i>
            <span slot="title">Settings</span>
            </div>
        </el-menu-item>
        <!--<el-menu-item  index="3">
            <div @click="swapBoard($event)" data-name="activities">
            <i class="el-icon-setting"></i>
            <span  slot="title">Activities</span>
            </div>
        </el-menu-item>-->
        </el-menu>
    </el-col>
  </div>
</template>

<script>
import Vue from 'vue'


export default{
  name:'usertab',
  methods: {
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    },
    swapBoard: function(event){
      var sf = event.currentTarget.getAttribute('data-name');
      sf = sf==='profile'?'':sf;
      this.$router.push('/dashboard/'+sf);
    }
  }
}
</script>

<style>
#usertab{
  margin-top:1%;
  opacity:1;
  width:40%;
}
</style>

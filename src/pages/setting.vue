<template>
  <div id="usr_settings">
    <h1 style="text-align:left;margin-left:15px;"> reset your password</h1>
    <el-form ref="form" :model="form" class="form_panel" label-width="80px">
      <el-form-item label="old password">
        <el-input type="password" v-model="form.opassword"></el-input>
      </el-form-item>
      <el-form-item label="new password">
        <el-input type="password" v-model="form.npassword"></el-input>
      </el-form-item>
      <el-form-item label="repeat">
        <el-input type="password" v-model="form.rpassword"></el-input>
      </el-form-item>
      <el-button type="primary">Update</el-button>
    </el-form>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name:'profile',
  data () {
    return {
      form:{
        opassword:'',
        npassword:'',
        rpassword:''
      } 
    }
  }
}
</script>

<style>
#usr_settings{
  float:left;
  margin-top:1%;
  margin-left:5%;
  width:70%;
  background-color:white;
}
</style>

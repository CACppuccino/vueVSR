<template>
  <div id="usr_activity">
    <h1 style="text-align:left;margin-left:15px;"> Recent Activities</h1>
    <div v-for="act in info" class="usr_act_bar">
      <div class="status_bar">
        <img src="act.avatar" class="usr_act_avatar"/>
        <label class="usr_act_nickname">{{act.nickname}}</label>
      </div>
      <div v-html="act.describe"></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name:'profile',
  data () {
    return {
      info:[
        {
          avatar:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018176218,1225448702&fm=27&gp=0.jpg',
          nickname:'lestina',
          describe:'she just uploaded a new photo for <a href="www.baidu.com">old street</a>'
        },
        {
          avatar:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018176218,1225448702&fm=27&gp=0.jpg',
          nickname:'lestina',
          describe:'she just uploaded a new photo for <a href="www.baidu.com">old street</a>'
        },
        {
          avatar:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018176218,1225448702&fm=27&gp=0.jpg',
          nickname:'lestina',
          describe:'she just uploaded a new photo for <a href="www.baidu.com">old street</a>'
        }
      ]
    }
  }
}
</script>

<style>
#usr_activity{
  float:left;
  margin-top:1%;
  margin-left:5%;
  width:70%;
  background-color:white;
}
.status_bar{
  margin-left:5%;
  float:left;
}
.usr_act_avatar{
  display:block;
  height:50px;
  width:50px;
}
.usr_act_nickname{
  color:grey;
  font-size:20px;
}
.usr_act_bar{
  float:left;
  display:block;
  bottom-border:1px dotted gray;
}
</style>

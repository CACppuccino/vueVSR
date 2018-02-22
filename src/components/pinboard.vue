<template>
  <div id="pinboard">
    <!-- comments to publish -->
    <el-input
    type="textarea"
    :rows="2"
    minr
    placeholder="publish your comments here"
    :autosize="{minRows: 4}"
    v-model="userComment">
    </el-input>
    <el-button id="cbtn" type="success" plain>comment</el-button>
    <!-- others' comments -->
    <div class="comment" v-for="item in comments">
      <div class="ubox">
      <img class="avatar" :src="item.avatar" height="100px" width="100px" />
          <!--<label class="uname">{{item.username}}</label>-->
      </div>
      <div class="content">
        <label class="ctime"><strong>{{item.username}}</strong> commented at {{item.time}}</label>
        <p style="padding:5px 10px;">{{item.content}}</p> 
      </div> 
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'pinboard',
  data () {
    return{
    userComment:'',
    comments: [
      {
        username:'Jack',
        avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1082195034,4139527125&fm=27&gp=0.jpg',
        content:'Hello again!\n I search for best practice for preview image in Django admin before save model. I want to display image quickly for my site moderators (with included filter from ImageKit) when they\'re adding image to the ImageField in admin. This\'s important, because this images posted to our Instagram account after save model (automatically).',
        time:'2018-01-18 13:54'
      },
      {
        username:'Shelly',
        avatar:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1415362622,3870992508&fm=27&gp=0.jpg',
        content:'I\'m making an issue here because I\'m sure this is being worked on somewhere in this huge repo and I\'ve failed to find it by search. \n Almost all models have hyperparameters that cannot be set by gradient descent (number of layers, for example). These needs to be tuned, preferably programatically with a smart strategy. \n What\'s the canonical way of doing hyperparameter tuning with the tf.estimator API? \n(also, how can we do early stopping with tf.estimator?)',
        time: '2018-02-01 08:32'
      }
    ]
    }
  }
}
</script>

<style>
.comment{
  margin-top: 30px;
  display:inline-block;
}
.content{
  border: 1px solid #eff2f6;
  float: left;
  display: inline-block;
  width: 70%;
  text-align: left;
  border-radius: 15px;
  -moz-box-shadow: 10px 10px 5px #888888; 
  box-shadow: 10px 10px 5px #888888;
}
.avatar{
  border-radius: 10px;
  margin-left: 0px;
  padding:10px;
}
.uname{
  text-align: center;
  display: block;
}
.ubox{
  float:left;
  width: auto;
/*  align-items: left;
  text-align: left; */
}
.ctime{
  padding: 5px 10px;
  border-bottom: 1px dotted grey;
  display: block;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #4396fd;/* #F5F8FA; */
  color:white;
}
#cbtn{
  float:right;
  margin-top: 20px;
}
</style>

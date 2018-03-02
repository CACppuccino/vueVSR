<template>
  <div >
    <div id="ls_title">
        <h1>The Lost Streets</h1> 
    </div>
    <div id="ls_body">
      <div class="bblock" @click="toProject" v-for="ban in banners" :data-proid="ban.id">
        <img class="banner" :src="ban.cover" ></img>
        <span class="btitle" >{{ban.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'ls_main',
  data () {
  return{
    banners: [],
    }
  },
  methods: {
    toProject: function () {
      this.inProject = true;
      this.$router.push('/loststreet/project');
    }
  },
  beforeCreate: function (){
    this.$http.get('http://127.0.0.1:8000/loststreet/api_index_page/').then(response=>{
        // sucess request'
        var data = response.body;
        data.forEach(function(e){
            e.cover = 'http://127.0.0.1:8000'+e.cover;
        })
        console.log(data)
        this.banners = data
    }, response =>{
        console.log('error occured')
    }) 
  }
}
</script>

<style>
@import url(http://fonts.font.im/css?family=Cardo:400italic);

.btitle{
  display: block;
  font-size:30px;
  font-weight: bold;
  font-family: 'Cardo', serif;
  color:grey;
}
.bblock{
  padding:3%;
  }
.banner{
  border-radius:15px;
  width:90%;
  height:270px;
}
#ls_body{
}
#ls_title{
  padding:30px; 
}
#ls_main{
  margin-left:20%;
  width:60%;
  height:100%;
  opacity:0.9;
  background-color:white;
}
</style>

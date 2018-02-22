<template>
  <div >
    <div id="ls_title">
        <h1>The Lost Streets</h1> 
    </div>
    <div id="ls_body">
      <div class="bblock" @click="toProject" v-for="ban in banners" :data-proid="ban.id">
        <img class="banner" :src="ban.url" ></img>
        <span class="btitle" >{{ban.title}}</span>
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
    banners: [
      {
        id:1,
        title:'lost home besides Sydney Opera House--Peter Karmel',
        url:'https://tse3.mm.bing.net/th?id=OIP.nFwwOmL6kwL4RbRY7L2dvwEsDE&pid=Api'
      },{
        id:2,
        title: 'old house -- Linda Vigen',
        url: 'http://www.cparama.com/forum/cartes2013c/1386778616-584.jpg'
      },{
        id:3,
        title: 'queen valley -- John Hinton',
        url: 'http://static.skynetblogs.be/media/14756/dyn010_original_551_348_pjpeg_2623863_915e8ce4bbacb036b36d1dda71c44ec5.jpg'
      }
    ],
    }
  },
  methods: {
    toProject: function () {
      this.inProject = true;
      this.$router.push('/loststreet/project');
    }
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

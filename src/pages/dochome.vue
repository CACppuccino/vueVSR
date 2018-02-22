<template>
  <div id="doc_home">
    <div id="doc_title">
        <h1>Stories of Streets</h1> 
    </div>
    <div id="doc_body">
      <div class="bblock" @click="toStreet" v-for="ban in banners" :data-proid="ban.id">
        <img class="banner" :src="ban.url" ></img>
        <span class="btitle" >{{ban.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'doc_home',
  data () {
  return{
    banners: [
      {
        id:1,
        title:'Arab Street',
        url:'https://tse3.mm.bing.net/th?id=OIP.nFwwOmL6kwL4RbRY7L2dvwEsDE&pid=Api'
      },{
        id:2,
        title: 'Queens Street',
        url: 'http://www.cparama.com/forum/cartes2013c/1386778616-584.jpg'
      },{
        id:3,
        title: 'City Circle',
        url: 'http://static.skynetblogs.be/media/14756/dyn010_original_551_348_pjpeg_2623863_915e8ce4bbacb036b36d1dda71c44ec5.jpg'
      }
    ],
    }
  },
  methods: {
    toStreet: function () {
      this.$router.push('/doc/street');
    }
  }
}
</script>

<style scoped>
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
#doc_main{
  margin-left:20%;
  width:60%;
}
#doc_title{
  padding:30px; 
}
</style>

<template>
  <div id="doc_building">
    <div v-html="inHtml" id="htmlContainer"> </div>
    <div id="floatWin">
      <ul>
        <li @click="goEdit">Edit this page</li>
        <li>Report this page</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name:'doc_building',
  data () {
    return {
      inHtml:'<h1 style="text-align:center;">Soul Pattin Building</h1>\
              <img style="" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/%281%29_Soul_Pattinson.JPG/800px-%281%29_Soul_Pattinson.JPG" />\
              <h3>Build: 15 May 1997 </h3>\
              <h3>Demolished: 3 Dec 2005</h3>\
              <h3>Introduction</h3>\
              <p>The Commonwealth Bank was created in 1911 under order of Prime Minister Andrew Fisher. Its head office was designed by architect John Kirkpatrick, who was the cousin of the bank\'s governor. In August 1916, the building opened. The building was expanded with extensions designed by E.H. Henderson and F. Hill between 1929 and 1933 along Pitt Street, and in 1966 construction was begun on an annex facing Martin Place, completed in 1967. <br /> \
              From 2012 the building was extensively refurbished. The 1960s extension was rebuilt, while much of the 1916 building and 1930s extension was stripped out and refurbished.[1][2][3] The building now houses retail space in the old banking hall.\
              <br / > \
              The Commonwealth Bank was created in 1911 under order of Prime Minister Andrew Fisher. Its head office was designed by architect John Kirkpatrick, who was the cousin of the bank\'s governor. In August 1916, the building opened. The building was expanded with extensions designed by E.H. Henderson and F. Hill between 1929 and 1933 along Pitt Street, and in 1966 construction was begun on an annex facing Martin Place, completed in 1967.\
              <br /> \
              From 2012 the building was extensively refurbished. The 1960s extension was rebuilt, while much of the 1916 building and 1930s extension was stripped out and refurbished.[1][2][3] The building now houses retail space in the old banking hall.\
              <br /> \
              </p>\
              ' 
    }
  },
  methods: {
    goEdit: function () {
      this.$router.push('/doc/edit');
    }
  }
}
</script>

<style>
#doc_building{
  height:100%;
/*  opacity:1;*/
  background-color:white;
}
#htmlContainer{
  text-align:left;
  padding-top:10px;
}
#htmlContainer p {
  padding:5px;
}
#htmlContainer h3 {
  padding-left:5px;
}
#floatWin{
  padding:10px;
  padding-right:20px;
  position:fixed;
  left:1%;
  top:20%;
  background-color:black;
  color:white;
  opacity:0.9;
  border-left: red 2px solid;
}
#floatWin li{
  text-align:left;
  padding-bottom:10px;
  text-decoration:underline;
}
</style>

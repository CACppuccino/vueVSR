<template>
  <div id="doc_street">
    <!-- banner for the street --> 
    <div>
      <label id="str_name">{{str_name}}</label>
      <img :src="banner" id="str_banner" />
    </div>
    <!-- introduction to the street -->
    <p class="intro" v-html="intro"></p>
    <!-- image navigators to buildings-->
    <div class="bnav" v-for="item in buildings" :key="item.index" @click="toBuilding">
      <div class="bname"><label >{{item.name}}</label><i class="el-icon-caret-right"></i></div>
      <img class="bpic" :src="item.img" height="200px" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name:'doc_street',
  data () {
    return {
      banner: 'https://tse2-mm.cn.bing.net/th?id=OIP.Q_JzYjyXhFSARV5IdUuxggHaEI&p=0&o=5&pid=1.1',
      str_name: 'Pitty Street',
      intro:'Pitt Street is a major street in the central business district of Sydney in New South Wales, Australia. The street runs through the entire city centre from Circular Quay in the north to Waterloo, although today\'s street is in two disjointed sections after a substantial stretch of it was removed to make way for Sydney\'s Central Railway Station. Pitt Street is well known for the pedestrian only retail centre of Pitt Street Mall, a section of the street which runs from Market Street to King Street. <br /> The street is one way (southbound only) from Railway Square to Pitt Street Mall and (northbound only) from Circular Quay to Pitt Street Mall, while Pitt Street Mall is for pedestrians only. The northern section of the street, from Railway Square to Circular Quay, is dominated by retail and commercial office space, while the southern section, from Railway Square through Redfern to Waterloo, is predominantly residential with some light commercial and industrial use.',
      buildings: [
        {
          name:'Soul Pattinson Building',
          img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/%281%29_Soul_Pattinson.JPG/800px-%281%29_Soul_Pattinson.JPG'
        },{
          name:'Commonwealth Trading Bank Building',
          img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/CBA2.jpg/800px-CBA2.jpg'
        }
      ]
    }
  },
  methods: {
    toBuilding: function () {
      this.$router.push('/doc/building')
    }
  },
}
</script>

<style>
/*
@import url(http://fonts.font.im/css?family=Cardo:400italic);
@import url(http://fonts.font.im/css?family=Dancing+Script:700);
*/
#doc_street{
  height:100%;
  opacity:0.9;
  background-color:white;
}
#str_banner{
  width:100%;
  height:300px;
  -webkit-mask-image:-webkit-radial-gradient(0% 100%, rgba(0,0,0,0),rgba(0,0,0,0.8));
}
.bname{
  padding-left:10px;
  text-align: left;
  font-size:1.5em;
  margin-bottom:20px;
  display:inline-block;
  font-weight:bold;
}
#str_name{
  position:absolute;
  margin-bottom:0px;
  margin-left:10px;
  font-size:5em;
  font-weight:bolder;
}
.intro:first-letter{
  text-indent: 10px;
  font-weight: bold;
  font-size: 3em;
  /* font-family: 'Cardo', serif; */
}
.intro{
  text-align:left;
  padding:10px;
  font-size:1.3em;
  /*font-family: 'Dancing Script', cursive;*/
}
.bnav{
  padding-top:20px;
  margin-bottom:20px;
}
.bpic {
  width:100%;
}
.bname{
}
</style>

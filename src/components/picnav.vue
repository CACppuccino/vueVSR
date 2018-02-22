<template>
<div id="pic">
    <!--<div @click="showTitle" class="monte" v-for="pic in pics">
        <label v-if="dis === 'block'" >{{pic.title}}</label>
        <img class="picimg" @click="navigate($event)" :data-route="pic.route" :src="pic.url" />
    </div>-->
    <el-carousel :interval="4000" type="card"  height="500px" >
        <el-carousel-item v-for="item in pics" :key="item.index">
            <!--<h3>{{ item }}</h3>-->
            <img class="picimg" :src="item.url" @click="navigate($event)" :data-route="item.route" />
        </el-carousel-item>
    </el-carousel>
</div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'pictab',
  data: function () {
    return {
      imgUrl: 'https://cn.vuejs.org/images/logo.png',
      title:'The Lost Street',
      dis:'none',
      pics:[
        {
        title: 'The Lost Street',
        url: 'https://tse4-mm.cn.bing.net/th?id=OIP.wkN8Kn4290zQhXDDlg3doQHaFI&p=0&o=5&pid=1.1',
        route: 'loststreet'
        },{
        title: 'Documents',
        url: 'https://images.monocle.com/1/760/570/uploads/image/gallery/sydney-pages1-57615739b54d6.jpg',
        route: 'doc'
        },{
        title: 'Experience with VR',
        url: 'http://www.visual-eyes-media.co.uk/wp-content/uploads/2016/11/virtual-reality-architecture_orig-e1462327274869.jpg',
        route: 'vr'
        }
      ]
    }
  },
  methods:{
    navigate: function(event) {
      console.log('touched');
      event.cancelBuble = true;
      this.$router.push(event.currentTarget.getAttribute('data-route'));
    },
    showTitle: function() {
      console.log('toggled');
      this.dis = this.dis==='block'?'none':'block';
    }
  }
}
</script>

<style>
#pic{
height:100%;
width:100%;
}
.monte{
height:80%;
width:33%;
display: inline-block;
opacity:0.8;
background-color:#000000;
}
.picimg{
  opacity:0.9;
  height:100%;
  width:100%;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>

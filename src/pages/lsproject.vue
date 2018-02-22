<template>
  <div id="lsproject">
    <h1 style="padding-top:20px;">37 Charles Street, owned by Elziberth Virgen</h1>
    <div class="bblock">
        <a :href="ban.url"><img class="banner" :src="ban.url" /></a>
        <span class="btitle" >{{ban.title}}</span>
        <p>{{ban.intro}}</p>
        <!-- carousel for illustrating the gallery image of this project -->
        <el-carousel :interval="4000" type="card"  height="200px">
            <el-carousel-item v-for="item in banners" :key="item.index">
                <img class="picimg" :src="item.url" @click="toProject" :data-proid="item.id" />
            </el-carousel-item>
        </el-carousel>
        <!-- the blue prints of the house-->
        <img class="banner" :src="ban.blueprint"/>
        <!-- viewing the current unity file -->

        <!-- upload button, first check user status -->
        <el-button class="uploadBtn" @click="showUpWindow" type="primary">Upload Your Work<i class="el-icon-upload el-icon--right"></i></el-button>
        <transition name="el-fade-in-linear">
        <el-upload
        v-if="showUp"
        class="upload-demo"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">pick the file</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">upload to server</el-button>
        <div slot="tip" class="el-upload__tip">jpg/png files only, no larger than 500kb</div>
        </el-upload>
        </transition>
        <!-- pinboard for comments-->

        <pinb></pinb>

    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import pinboard from '@/components/pinboard'

Vue.component('pinb', pinboard)

export default {
  name: 'lsproject',
  data () {
    return {
    showUp: false,
    fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
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
      ban: {
        title: 'lovely queen valley -- John Hinton',
        url: 'http://static.skynetblogs.be/media/14756/dyn010_original_551_348_pjpeg_2623863_915e8ce4bbacb036b36d1dda71c44ec5.jpg',
        intro: 'The Sydney Opera House is a multi-venue performing arts centre in Sydney, New South Wales, Australia. It is one of the 20th century\'s most famous and distinctive buildings.        Designed by Danish architect Jorn Utzon, the building was formally opened on 20 October 1973[4] after a gestation beginning with Utzon\'s 1957 selection as winner of an international design competition. The government of New South Wales, led by the premier, Joseph Cahill, authorised work to begin in 1958 with Utzon directing construction. The government\'s decision to build Utzon\'s design is often overshadowed by circumstances that followed, including cost and scheduling overruns as well as the architect\'s ultimate resignation.',
        blueprint: 'http://www.legeros.com/ralwake/gallery/stations/ral-hist-1932-sta2-blueprint.jpg'
      },
      comments: [
      {
        username:'Jack',
        avatar: '',
        content:'Hello again!\n I search for best practice for preview image in Django admin before save model. I want to display image quickly for my site moderators (with included filter from ImageKit) when they\'re adding image to the ImageField in admin. This\'s important, because this images posted to our Instagram account after save model (automatically).',
        time:'2018-01-18 13:54'
      }
    ]
    
    }
  },
  methods: {
    toProject: function () {
      this.inProject = true;
      this.$router.push('/loststreet/project');
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    showUpWindow: function () {
      this.showUp = !this.showUp;
    }
  }
}
</script>

<style>
@import url(http://fonts.font.im/css?family=Cardo:400italic);
h1 {
  font-family: 'Cardo', serif;
}
.btitle{
  display: block;
  font-size:30px;
  font-weight: bold;
  font-family: 'Cardo', serif;
}
.bblock{
  padding:3%;
  background-color:white;
}
.banner{
  border-radius:15px;
  width:90%;
  height:270px;
}
.uploadBtn{
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>

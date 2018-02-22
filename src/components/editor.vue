<template>
  <div class="hello">
   <el-button id="edit_sub" type="primary" @click="submit($event)">submit</el-button>
   <!-- editor -->
   <div id="editpart">
   <select  data-name="fontsize" :data-value="fontv"  v-model="fontv">
   <option v-for="x in 7" :value="x">{{x}}</option>
   </select>
    <select v-model="headingSize" placeholder="Heading Size" class="selector">
        <option
        v-for="item in headings"
        :key="item.value"
        :value="item.value"
        data-name="formatblock"
        :data-value="item.value"
        @hover="btn($event)"
        class="headingItem"
        v-html="item.label">
        </option>
    </select>
   <select  data-name="fontsize" :data-value="fontv"  v-model="fontv">
   <option  :value="7" style="font-size:7">LEVEL 1</option>
   <option  :value="5" style="font-size:5" >LEVEL 2</option>
   <option  :value="3" style="font-size:3">LEVEL 3</option>
   </select>
   <el-button @click="test">test</el-button>
   <el-button  v-on:click="btn($event)" data-name="fontsize" data-value="5">大字体</el-button>
   <el-button v-on:click="btn($event)" data-name="forecolor" data-value="red" class="red">A</el-button>
   <el-button v-on:click="btn($event)" data-name="backColor" data-value="lightgreen" id="lightgreen">ABC</el-button>
   <el-button v-on:click="btn($event)" data-name="bold" id="bold">B</el-button>
   <el-button @click="btn($event)" data-name="italic">Itelic</el-button>    
   <el-button @click="btn($event)" data-name="insertorderedlist">ol</el-button>
   <el-button @click="btn($event)" data-name="insertunorderedlist">ul</el-button>
   <el-button v-on:click="btn($event)" data-name="underline">Underline</el-button> 
   <el-button v-on:click="btn($event)" data-name="removeformat">Remove Format</el-button> 
   <el-button @click="showImgDialog" data-name="insertimage" :data-value="imgUrl">Insert Image</el-button> 
   <el-button @click="btn($event)" data-name="unlink">Unlink</el-button>
   <div v-show="imgVisible">
   <input v-model="imgUrl" type="text"/><el-button @click="insertImgByUrl">Insert</el-button>
   </div>
   <el-button @click="showUrlDialog" data-name="createlink">Insert URL</el-button> 
   <div id="editbox"  contenteditable v-html="editContent"></div>
   </div>
   <!--display -->
   <!--<div id="displaypart" >
      <div v-html="editContent"></div>
   </div>-->
  </div>
</template>

<script>
export default {
  name: 'editor',
  data () {
    return {
      headingSize:'',
      headings:[
        {label:'<h1>Heading 1</h1>',value:'h1'},
        {label:'<h2>Heading 2</h2>',value:'h2'},
        {label:'<h3>Heading 3</h3>',value:'h3'},
        {label:'<h4>Heading 4</h4>',value:'h4'},
        {label:'<h5>Heading 5</h5>',value:'h5'},
      ],
      imgVisible: false,
      fontv: '1',
      headingSize:'',
      imgUrl:'',
      editContent:'<h1 style="text-align:center;">Soul Pattin Building</h1>\
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
',
    }
  },
  mounted:function () {
    
  },
  computed: {
  },
  methods:{
    test: function() {
      console.log('ed:', this.editContent);
      console.log('in:', document.getElementById('editbox').innerHTML);
    },
    cHead: function() {
      var words = window.getSelection().toString();
    },
    submit: function(event) {
      var content = document.getElementById('editbox').innerHTML
      console.log('content to be submit', content)    
      /*this.$http({
        url: '127.0.0.1:8000/',
        method: 'POST',
        data: {
          content: content
        },
        headers: {
          'Content-Type': 'text/plain'
        }
      }).then(function () {  // success callback
        console.log('data success sent')

      }, function () {
        console.log('data failed to sent')
      })*/
    },
    showUrlDialog: function () {
      // get the selected node
      var selected = document.getSelection()
      // get the selected range
      var range = selected.getRangeAt(0)
      var link = document.createElement("a")
      var cb = prompt('URL Link:', 'https://baidu.com')
      // if cb is meaningful
      if(cb){
        link.href = cb
        console.log('url added', cb)
      }
      range.surroundContents(link)
      console.log('inner', document.getElementById('editbox').innerHTML)
    },
    insertImgByUrl: function () {
      // make the input box get the focus to point the place to insert
      document.getElementById('editbox').focus()
      document.execCommand('insertimage', false, this.imgUrl)
    },
    // to show the dialog for inserting the image
    showImgDialog: function () {
      this.imgVisible = !this.imgVisible
    },
    btn: function (event) {
       // document.execCommand() 
      var tar = event.target;
      console.log('content', document.getElementById('editbox').innerHTML);
      console.log('d', tar.getAttribute('data-name'), tar.getAttribute('data-value'));
      document.execCommand(tar.getAttribute('data-name'),false,tar.getAttribute('data-value'));
    }
  },
  watch: {
    // controling the fontsize by selecting # on the list
    fontv: function (val) {  
      console.log('watcher', val)
      document.execCommand('fontsize', false, val)
    },
    headingSize: function (val) {
      document.execCommand('formatblock', false, val)
    },
/*    (document.getElementById('editbox').innerHTML): function (val){
      console.log('changed', val)
    },*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#lightgreen{
  background-color: lightgreen;
}
#bold{
  font-weight: bold;
}
#editbox{
margin-top:30px;
text-align:left;
height: 100%;
width: 100%;
overflow:scroll;
border:1px solid black;
}
.red{
  font-weight: bold;
  color:red;
}
#editpart, #displaypart{
  height:500px;
  display:inline-block;
}
#editpart{
  width:100%;
}
#editpart button{
  margin-top:10px;
} 
#displaypart{
  border:1px solid black;
  width:40%;
}
.headingItem{
  display:block;
  height:100%;
}
#edit_sub{
  float:left;
  margin-left:30px;
  margin-top:20px;
}
.selector{
  background-color:white;
  padding:10px;
  border-radius:5px;
  border-color:#DCDFE6;
}
</style>

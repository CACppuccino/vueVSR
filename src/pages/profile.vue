<template>
  <div id="usr_profile">
    <el-form ref="form" :model="form" class="form_panel" label-width="80px">
        <el-form-item label="avatar" >                            
              <el-upload
                class="upload-demo"
                action=""
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList2"
                list-type="picture">
               <el-button size="small" type="primary">Choose the picture</el-button>
              <div slot="tip" class="el-upload__tip">jpg/png only，no larger than 500kb</div>
              </el-upload>
         </el-form-item>
      <el-form-item label="nickname">
        <el-input v-model="form.nickname"></el-input>
      </el-form-item>
      <el-form-item label="organization">
        <el-input v-model="form.organization"></el-input>
      </el-form-item>
      <el-form-item label="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="summary">
        <el-input 
          type="textarea" 
          v-model="form.summary"
          :autosize="{minRows:2}"></el-input>
      </el-form-item>
      <el-button type="primary">Update</el-button>
    </el-form>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name:'profile',
  data () {
    return {
      fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],              
      imageUrl:'',
      form:{
        avatar:'',
        nickname:'zeltaV',
        organization:'ANU',
        email:'ziyang.liu03@hotmail.com',
        summary:'Hey'
      }
    }
  },
  methods:{
      handleRemove(file, fileList) {
              console.log(file, fileList);
      },
      handlePreview(file) {
              console.log(file);
      }
  }
}
</script>

<style>
#usr_profile{
  float:left;
  margin-top:1%;
  margin-left:5%;
  width:70%;
  background-color:white;
}
.panel-box{
  display:inline-flex;
}
.input_box{
  width:300px;
  margin-left:10px;
}
.form_panel{
  padding:10px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.form_avatar, .avatar {
  width: 178px;
  height: 178px;
}

</style>

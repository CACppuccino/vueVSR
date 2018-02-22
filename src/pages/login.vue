<template>
    <div id="login">
        <template v-if="formStatus === 'login'" >
        <el-form ref="form" :model="lform">
            <el-form-item label="username" >
                <el-input v-model="lform.username"></el-input>
            </el-form-item>
            <el-form-item label="password">
                <el-input type="password" v-model="lform.password"></el-input>
            </el-form-item>
            <el-form-item><el-button type="primary" @click="submit">Login</el-button></el-form-item>
            <el-form-item><el-button type="text" @click="swapcard" id="register">Register</el-button></el-form-item>
        </el-form>
        </template>
        <template v-else-if="formStatus === 'register'" >

        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  class="demo-ruleForm">
            <el-form-item label="username" prop="usrname">
                <el-input v-model.number="ruleForm2.usrname"></el-input>
            </el-form-item>
            <el-form-item label="password" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="repeat password" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">Register</el-button>
            </el-form-item>
            <el-form-item><el-button type="text" @click="swapcard" id="register">sign in</el-button></el-form-item>
        </el-form>
        </template>
    </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  name: 'login',
  data () {
          var validatePass = (rule, value, callback) => {
                  if (value === '') {
                          callback(new Error('please input the password'));
                  } else {
                          if (this.ruleForm2.checkPass !== '') {
                                  this.$refs.ruleForm2.validateField('checkPass');
                          }
                          callback();
                  }
          };
          var validatePass2 = (rule, value, callback) => {
                  if (value === '') {
                          callback(new Error('please input the password again'));
                  } else if (value !== this.ruleForm2.pass) {
                          callback(new Error('mismatch with the origin password'));
                  } else {
                          callback();
                  }
          };
    var checkuname = (rule, value, callback) => {
      console.log('vali', value);
      if(!value){
        return callback(new Error('username cannot be blank'));
      }
      if(value){
        return callback(new Error('username is too short!'));
      }
    };
    return {
      formStatus:'login',
      lform: {
        username:'',
        password:''
      },
      rform: {
        rfusername:'',
        rfpassword:'',
        rfrpassword:'',
      },
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: ''
        },
        rules2: {
        pass: [
            { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
            { validator: validatePass2, trigger: 'blur' }
        ],
        usrname: [
            { validator: checkuname, trigger: 'blur' }
        ]
        }
    };
  },
  methods:{
    /* to validate with backend */
    submit: function() {
      console.log('submitted');
      //console.log('un:',this.lform.username,'pwd:',this.rform.)
      this.$http.post('http://127.0.0.1:8000/usrinfo/authValidate/',{username:this.lform.username,password:this.lform.password}).then(response =>{
        // sucess for this 
          var sd = response.body;
          console.log('success, get response:', sd);
          this.$router.push('/dashboard')
        }, response => {
          console.log('there is an error', response);
        
      });
      console.log('submit!');
    },
    /* form submission */
    submiteForm: function(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
            console.log('error submit!!');
            return false;
            }
        });
    },
    swapcard: function () {
      this.formStatus = this.formStatus==='register'?'login':'register';
    }
  }
}
</script>

<style>
#login{
  border-radius:10px;
  background-color:white;
  opacity:0.95;
  margin-left:25%;
  margin-top:10%;
  width:33%;
  padding:5%;
}
#register{
position:absolute;
right:5px;
bottom:5px;
}
</style>

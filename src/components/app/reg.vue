<template>
<div class="body">
     <el-card class="box">
            <el-form>
                  <h1 >爱宠邦</h1>
               <el-form-item label="用 户 名  :" prop="pass">
                    <el-input v-model="userAcount" type="text" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item   label="手 机 号 码  :" prop="pass">
                    <el-input v-model="userPhone" type="text" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密 码  :" prop="checkPass">
                    <el-input  v-model="userPwd" type="password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确 认 密 码  :" prop="checkPass">
                    <el-input v-model="userPwd1" type="password" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item label="注 册 权 限  :" >
                    <el-radio v-model="radio" label="1"  @change="mendianGl">平台管理员</el-radio>
                    <el-radio v-model="radio" label="2"  @change="mendianGl">门店管理员</el-radio>
                 </el-form-item>
                 <el-form-item>
                  <el-checkbox v-model="checked">我已经认真阅读并同意</el-checkbox>
                </el-form-item>
                <el-form-item>
                <el-button @click="zhuce" type="primary" >注 册</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        
</div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      checked: true,
      userAcount:"",
      userPhone:"",
      userPwd:"",
      userPwd1:"",
    }
  },
  methods: {
     async zhuce() {
          const { radio,userPhone,userPwd,userAcount, } = this
            console.log("in")
            const data =  await fetch("/users/addUsers",{
                method:"post",
                body:JSON.stringify({
                      userPhone,
                      userPwd,
                      userType:radio,
                      userAcount
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(res=>res.json())
          if(radio === "2"){
            const { _id } = data
            this.$router.push({
              path:"/shenqing",
              query: { 
              userGl:_id
            }
            })
            return
          }
          this.$router.push("/Login");
    },
    mendianGl(){
      console.log(this.radio)
    }
  }
};
</script>
<style>
.body {
  width: 99%;
  height: 750px;
  background: url("https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4126622686,1529296538&fm=27&gp=0.jpg");
  background-size: 100% 100%;
  position: absolute;
}
.box {
  width: 400px;
  position: relative;
  top: 10px;
  left: 900px;
}
</style>
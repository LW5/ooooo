<template>
    <div class="body1">
        <el-card class="box1">
            <el-form>
                <el-form-item>
                    <h1 >爱宠邦</h1>
                </el-form-item>
                <el-form-item label="账 号  :" prop="pass">
                    <el-input v-model="userAcount" type="text" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密 码  :" prop="checkPass">
                    <el-input v-model="userPwd" type="password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                <el-button @click="denglu" type="primary">登 录</el-button>
                <el-button @click="zhuce" >注 册</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userAcount:"",
            userPwd:""
        }
    },
  methods: {
    denglu() {
        const { userAcount,userPwd } = this
        if(userAcount&&userPwd){
            const { userAcount,userPwd,async_Login }  = this
             async_Login({userAcount,userPwd})
            // this.$router.push("/Info")
        }
        console.log("in")
        return
    },
    zhuce(){
        this.$router.push("/reg")
    },
   async async_Login({userPwd,userAcount}){
            const data =  await fetch("/users/getUsers",{
                method:"post",
                body:JSON.stringify(
                    {
                        userAcount,userPwd
                    }
                ),
                headers:{
                    "Content-Type":"application/json"
                }
                })
                .then(res=>res.json())
                const { userType,_id:userGlId } = data[0]
                if(userType===2){
                    this.$router.push({
                        path:"/Info",
                        query: { 
                           userGlId
                        }
                 })
                 return
                }else{
                 this.$router.push({
                    path:"/_Info",
                    query: { 
                        userGlId
                    }
                 })
                }
    }
  }
};
</script>
<style>
h1 {
  color: skyblue;
  margin-left: 140px;
}
.body1 {
  width: 99%;
  height: 690px;
  background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532087014854&di=555ab77004c783bff790b414b8f9182b&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-12-01%2F5a20f87388b5e.jpg");
  background-size: 100% 100%;
  position: absolute;
}
.box1 {
  width: 400px;
  position: relative;
  top: 110px;
  left: 150px;
}
</style>
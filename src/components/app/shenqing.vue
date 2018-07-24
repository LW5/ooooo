<template>
<div class="body2">
     <el-card class="box2">
            <el-form>
                  <h1 >创建店铺</h1>
               <el-form-item label="店 铺 名 称 :" prop="pass">
                    <el-input  v-model="shopName" type="text" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item   label="联 系 人 :" prop="pass">
                    <el-input  v-model="shopCorporate" type="text" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联 系 电 话 :" prop="checkPass">
                    <el-input  v-model="shopTel" type="text" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="店 铺 地 址  :" prop="checkPass">
                    <el-input  v-model="shopAdd"  type="text" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="店 铺 类 型  :" prop="checkPass">
                    <el-input  v-model="shopLocation" type="text" auto-complete="off"></el-input>
                </el-form-item>
                  <el-form-item label="店 铺 照 片 :" prop="checkPass">
                    <el-upload
                       action="users/picApi"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :on-success="handleSuccess"
                    >
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>
                 <el-form-item label="营 业 执 照 :" prop="checkPass">
                    <el-upload
                        action="users/picApi"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :on-success="handleSuccess1"
                    >
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>
                <el-form-item label="身 份 照 片 :" prop="checkPass">
                     <el-upload
                     action="users/picApi"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :on-success="handleSuccess2"
                    >
                    <i class="el-icon-plus"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="简 介 :" prop="checkPass">
                   <el-input
                        v-model="shopFeature"
                        type="textarea"
                        :rows="3"
                        placeholder="请输入内容"
                       >
                    </el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="chuangjian">创 建 </el-button>
                  <el-button  >重 置 </el-button>
                </el-form-item>
            </el-form>
        </el-card>
</div>
</template>

<script>
    export default{
        data(){
            return{
                userGl_id: this.$route.query.userGl,
                dialogImageUrl: '',
                dialogVisible: false,
                shopImg:"",
                shopLicenceImg:"",
                shopUserImg:"",
                shopName:"",
                shopAdd:"",
                shopLocation:"",
                shopCorporate:"",
                shopTel:"",
                shopFeature:"",
            }
        },
          methods: {
            handleRemove(file) {
                console.log(file);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleSuccess(response, file ){
                const { url } = file
                this.shopImg = url
            },
               handleSuccess1(response, file){
                const { url } = file
                this.shopLicenceImg = url
            },
               handleSuccess2(response, file){
                const { url } = file
                this.shopUserImg = url
            },
               async chuangjian() {
                    console.log("in")
                  
                     await fetch("/users/mendian",{
                        method:"post",
                        body:JSON.stringify(
                           this._data
                       ),
                        headers:{
                            "Content-Type":"application/json"
                        }
                        })
                        .then(res=>res.json())
                        this.$router.push({
                        path:"/shenghe",
                        })
                    }
    },
    }
</script>
<style>
.body2 {
  width: 99%;
  height: 750px;
  background-size: 100% 100%;
  position: absolute;
}
.box2 {
  width: 550px;
  position: relative;
  top: 10px;
  left: 480px;
}
</style>
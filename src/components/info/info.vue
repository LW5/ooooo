<template>
    <el-container>
  <el-header>
  <el-menu  mode="horizontal" @select="handleSelect"  background-color="#545c64"  text-color="#fff">
  <el-menu-item index="1">处理中心</el-menu-item>
   <el-menu-item index="4" disabled>2018-07-20</el-menu-item>
  <el-submenu index="2">
    <template slot="title">管理</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3" >{{userName}}!欢迎回来</el-menu-item>
     <el-menu-item index="5">门店管理员</el-menu-item>
</el-menu>
<div class="line"></div>

  </el-header>
  <el-container>
    <el-aside width="200px" class="bac" >
<el-row class="tac">
  <el-col >
   
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
      <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">商品管理</span>
    </template>
    <el-menu router mode="horizontal">
    <el-menu-item-group>
      <el-menu-item index="/Info/Pet">宠物</el-menu-item>
      <el-menu-item index="/Info/Foods">食品</el-menu-item>
      <el-menu-item index="/Info/Artical">用品</el-menu-item>
      <el-menu-item index="/Info/Services">服务</el-menu-item>
    </el-menu-item-group>
   </el-menu>
  </el-submenu>
    <el-menu router mode="horizontal">
      <el-menu-item index="/Info/Service">
        <i class="el-icon-menu"></i>
        <span slot="title">店铺管理</span>
      </el-menu-item>
        <el-menu-item index="/Info/Clerk">
        <i class="el-icon-menu"></i>
        <span slot="title">店员管理</span>
      </el-menu-item>
        <el-menu-item index="/Info/Order">
        <i class="el-icon-menu"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      </el-menu>
    </el-menu>
  </el-col>
</el-row>
    </el-aside>
    <el-container>
        <router-view></router-view>
    </el-container>
  </el-container>
</el-container>
</template>

<script>
export default {
    created(){
      if(this.$route.query.userGlId){
          localStorage.userGlId = this.$route.query.userGlId
      }
      this.async_Getmendian(localStorage.userGlId)
    },
    computed:{
      userName(){
          return this.$store.state.Info.userName
      }
    }
    ,
    methods:{
      handleSelect(){
      },
         async async_Getmendian(_id){
            const data =  await fetch("/users/getUsers",{
                method:"post",
                body:JSON.stringify({_id}),
                headers:{
                    "Content-Type":"application/json"
                }
                })
                .then(res=>res.json())
                const { userAcount,mendianguanliId } = data[0]
                this.$store.state.Info.userName = userAcount
                this.$store.state.Info.mendianGli = mendianguanliId
      }
    }  
}
</script>

<style>
    .bac{
        margin-left: 20px;
    }
</style>


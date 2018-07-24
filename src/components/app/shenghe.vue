<template>
<div>
    <span class="shenghetitle">爱宠邦</span>
<div class="shenghebox">
<el-steps :space="200" :active="1" finish-status="success" >
    <el-step title="已完成"></el-step>
    <el-step title="进行中"></el-step>
    <el-step title="步骤 3"></el-step>
</el-steps>
<div><img src="" alt=""></div>
<div class="shenghefooter"><h3 >正在审核中,需要1-3个工作日</h3></div>
</div>
</div>

</template>
<script>
export default {
    created(){
        setTimeout(()=>{
            this.$router.push("/Login");
        },3000)
    }
}
</script>

<style>
.shenghebox{
 margin-top:20px;
 margin-left: 500px;
}
.shenghetitle{
    font-size: 40px;
    font-size-adjust: inherit;
    font-family: "PingFang SC",sans-serif;
    margin: 30px;
    padding: 0;
}
.shenghefooter{
    width: 250px;
    margin-left:100px; 
    margin-top: 80px;
}
</style>

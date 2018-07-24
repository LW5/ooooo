<template>
   <div>
    <span @click="handeClick(1)" style="margin-right:20px;">1</span>         
    <span @click="handeClick(2)"  style="margin-right:20px;">2</span>         
    <span @click="handeClick(3)">3</span>         
  </div>
</template>

<script>
    export default{
        created(){
            console.log( localStorage.user_Type)
            console.log( localStorage.user_Type)
        },
        methods:{
                handeClick(index){
                    console.log(index)
                     this.$store.commit("Service/handeClick",index)
                }
        }
    }
</script>
<style>

</style>
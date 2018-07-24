export default {
    namespaced: true,
     state: {
         mendianIndex:0
       },
     mutations:{
        handeClick(state,index){
            console.log(state,index)
           state.mendianIndex=index-1
        }
     },
     actions:{
 
     }
 }
 
 
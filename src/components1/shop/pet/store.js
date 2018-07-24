export default {
    namespaced: true,
     state: {
        chongwuguanli:[],
        form: {
            chongwuName: "",    //名字
            chongwuType: "",    //宠物的品类
            chongwuKind: "" ,   //宠物的种类
            chongwuColor:"" ,    //宠物的颜色
            chongwuData:"",     //宠物的生日
            chongwuStyle:"", 
            mendianGliId:localStorage.mendianGliId
        }
       },
     mutations:{
        handeClick(state,index){
            console.log(index)
        },
        getPetData(state,petData){
            const { chongwuguanliId } = petData[0]
            state.chongwuguanli = chongwuguanliId
        },
        delPetData(){
            
        },
        xGPetData(){
        
        }
     },
     actions:{
      async async_handleAdd(Content) {
          console.log(Content.state.form)
          if(Content.state.form._id===""){
              console.log("_id")
              const { chongwuName,chongwuType,chongwuKind,chongwuColor,chongwuData,chongwuStyle } = Content.state.form
              let form = { chongwuName,chongwuType,chongwuKind,chongwuColor,chongwuData,chongwuStyle } 
              Content.state.form = form
          }
           Content.state.form.mendianGliId=localStorage.mendianGliId
           const data =  await fetch("/chongwu/chongwuAdd",{
            method:"post",
            body:JSON.stringify(
                Content.state.form
            ),
            headers:{
                "Content-Type":"application/json"
            }
            })
            .then(res=>res.json())
                const { chongwuguanliId } = data[0]
                this.state.Pet.chongwuguanli =chongwuguanliId
                for(var name in Content.state.form) {
                    Content.state.form[name] = ""
                }
                // if(data){
                //     console.log("data")
                //  const { chongwuguanliId } = data[0]
                //  this.chongwuguanli = chongwuguanliId
                // }
        },
        async async_handleGet({commit}) {
            const data =   await fetch("/chongwu/getChongwu",{
                method:"post",
                body:JSON.stringify({
                    _id:localStorage.mendianGliId
                    }
                ),
                headers:{
                    "Content-Type":"application/json"
                }
                })
                .then(res=>res.json())
                commit("getPetData",data)
    },
        async async_handleXg(Content) {
            // Content.state.form = row
            console.log(Content.state.form)
            const data =  await fetch("/chongwu/xGChongwu",{
            method:"post",
            body:JSON.stringify(
                Content.state.form
            ),
            headers:{
                "Content-Type":"application/json"
            }
            })
            .then(res=>res.json())
            console.log(data)
            if(data){
                console.log("data")
                 for(var name in Content.state.form) {
                        Content.state.form[name] = ""
                }
            }
            const { chongwuguanliId } = data[0]
            this.state.Pet.chongwuguanli =chongwuguanliId
        },
        async async_handleDel(Content,row) {
            console.log(row)
               const data =  await fetch("/chongwu/sCChongwu",{
                method:"post",
                body:JSON.stringify(row),
                headers:{
                    "Content-Type":"application/json"
                }
                })
                .then(res=>res.json())
                const { chongwuguanliId } = data[0]
                this.state.Pet.chongwuguanli =chongwuguanliId
    },
}
 }
 
 
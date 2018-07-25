
export default ({
    // 一种模式查
    namespaced:true,
    state: {
        tableData:[{
            goodsName: "",      //名称食品
            goodsCanFor:"",     //适用狗狗
            goodsTaste:"",      //口味
            goodsRegion:"",     //产地
            goodsDate:"",       //出厂日期
            goodsTime:"",       //保质期
            goodsIntro:"",      //描述
            goodsPrice:"", 
            foodsImg:"", 
          _id:""
        }]
    },
    mutations: {
        assign(state,data){
            // Object.assign(state.tableData,data)
            state.tableData = data
        },
        // 下一页
        nextBtn(state){
            if(state.data.curPage>state.data.maxPage){
                state.data.curPage++;
            }
        },
        // 上一页
        preBtn(state){
            if(state.data.curPage>1){
                state.data.curPage--;
            }
        },
        // 首页
        firstBtn(state){
            state.data.curPage=1;
        },
        // 尾页
        wyBtn(state){
            state.data.curPage=state.data.maxPage
        }
    },
    
    
    actions:{
        // 商品查询
        async getFoods(context,state) {     
        const data = await fetch("/foods/getFoods", {
            method: "post",
            body: JSON.stringify(),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
        context.commit("assign",data)
        
        //    console.log(data)
         },





        //  添加食品
        async addEmp(context,data1) {
            
             await fetch("/foods/addEmp", {
                method: "post",
                body: JSON.stringify(data1),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then();
            // context.commit("assign",data)
             },

        
            //  食品删除
            async delet(context,data2) {
                 await fetch("/foods/delet", {
                    method: "post",
                    body: JSON.stringify(data2),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then();
                // context.commit("assign",data)
                 },
                //  修改食品
                async amend(context,data3) {
                    await fetch("/foods/amend", {
                       method: "post",
                       body: JSON.stringify(data3),
                       headers: {
                           "Content-Type": "application/json"
                       }
                   }).then();
                    },
               
  }
})
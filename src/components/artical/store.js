
export default ({
    // 一种模式查
    namespaced: true,
    state: {
        tableData: [{
            articlesName: "",      //用品名称
            goodsMaterial: "",  //用途
            goodsOnlyFor: "",    //规格型号 (vip)
            goodsSize: "",       //产地
            articlesDate: "",   //生产日期
            goodsSpecial: "",    //颜色
            goodsSupplier: "",   //供应商
            articlesPrice: "",
            articalImg:"",
            _id: ""
        }]
    },
    mutations: {
       
        assign(state, data) {
            
            // Object.assign(state.tableData,data)
            state.tableData = data
            
        },
        // 下一页
        nextBtn(state) {
            if (state.data.curPage > state.data.maxPage) {
                state.data.curPage++;
            }
        },
        // 上一页
        preBtn(state) {
            if (state.data.curPage > 1) {
                state.data.curPage--;
            }
        },
        // 首页
        firstBtn(state) {
            state.data.curPage = 1;
        },
        // 尾页
        wyBtn(state) {
            state.data.curPage = state.data.maxPage
        }
    },


    actions: {


        // 用品查询
        async getArtical(context, state) {
            const data = await fetch("/artical/getArtical", {
                method: "post",
                body: JSON.stringify(),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json());
            context.commit("assign", data)

            // console.log(data)
        },


        //  添加用品
        async articalAdd(context, adata) {
            // console.log(adata)
            await fetch("/artical/articalAdd", {
                method: "post",
                body: JSON.stringify(adata),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then();
            // context.commit("assign",data)
        },


        //  用品删除
        async articalDelet(context, data2) {
            await fetch("/artical/articalDelet", {
                method: "post",
                body: JSON.stringify(data2),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then();
            // context.commit("assign",data)
        },
        //  修改
        async articalAmend(context, adata3) {
            
            await fetch("/artical/articalAmend", {
                method: "post",
                body: JSON.stringify(adata3),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then();
           
        },
    }
})
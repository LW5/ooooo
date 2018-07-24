<template>
<el-container>
  <el-header>
     <el-col :span="6">
      <el-input
      placeholder="请输入内容"
      v-model="input10"
      clearable>
    </el-input>
    </el-col>
  <el-button icon="el-icon-search"  circle></el-button>
   <el-button type="primary"  @click="dialogFormVisible = true" >添加用品</el-button>
    </el-header>
   <el-table
    :data="this.tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="产考图片"
      width="150">
      <template scope="scope">
            <img :src="scope.row.date" width="40" height="40" class="head_pic"/>
      </template>
    </el-table-column>
    <el-table-column
      prop="articlesName"
      label="用品名称"
      width="120"
      >
    </el-table-column>
    <el-table-column
      prop="goodsMaterial"
      label="用途"
      width="120">
    </el-table-column>
    <el-table-column
      prop="goodsOnlyFor"
      label="规格型号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="goodsSize"
      label="产地"
      width="120">
    </el-table-column>
    <el-table-column
      prop="articlesDate"
      label="生产日期"
      width="100">
    </el-table-column>
    <el-table-column
      prop="goodsSpecial"
      label="颜色"
      width="80">
    </el-table-column>
    <el-table-column
      prop="goodsSupplier"
      label="产品描述"
      width="120">
    </el-table-column>
    <el-table-column
      prop="articlesPrice"
      label="价格"
      width="80">
    </el-table-column>
   
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除</el-button>
        <el-button type="text" size="small" @click.native.prevent="modify(scope.$index, tableData)" >修改</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 添加 -->
  
  <el-dialog title="添加用品" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="用品名称" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="form.articlesName" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>

    <el-form-item label="用途" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="form.goodsMaterial" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
    <el-form-item label="规格型号" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="form.goodsOnlyFor" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
    <el-form-item label="产地" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="form.goodsSize" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
    <el-form-item label="生产日期" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="form.articlesDate" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
    <el-form-item label="颜色" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="form.goodsSpecial" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
     <el-form-item label="产品描述" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="form.goodsSupplier" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
     <el-form-item label="价格" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="form.articlesPrice" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="letter">确 定</el-button>
    </div>
    <el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
 
</el-upload>
</el-dialog>


<el-dialog title="修改用品" :visible.sync="dialogFormVisible2">
  <el-form :model="form">
    <el-form-item label="用品名称" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="form.articlesName" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>

    <el-form-item label="用途" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="form.goodsMaterial" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
    <el-form-item label="规格型号" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="form.goodsOnlyFor" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
    <el-form-item label="产地" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="form.goodsSize" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
    <el-form-item label="生产日期" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="form.articlesDate" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
    <el-form-item label="颜色" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="form.goodsSpecial" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
     <el-form-item label="产品描述" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="form.goodsSupplier" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
     <el-form-item label="价格" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="form.articlesPrice" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
    <el-button type="primary" @click="modifyk">确 定</el-button>
    </div>
    <el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
 
</el-upload>
</el-dialog>


 <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
  </el-container>
</template>

<script>
import {mapState,mapActions}from "vuex"
export default {
  methods: {
   
     handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 添加
    letter(){
      this.dialogFormVisible = false;
      const adata=this.form;
        this.$store.dispatch('Artical/articalAdd',adata)
        this.$store.dispatch("Artical/getArtical")
    },
    // 删除
    deleteRow(index, rows){
      const adata2={id:rows[index]._id}
      this.$store.dispatch('Artical/articalDelet',adata2)
      this.$store.dispatch("Artical/getArtical")
    },
    // 修改
    modify(index, rows){
       this.dialogFormVisible2 = true;
        const data3={id:rows[index]._id}
      this.$store.dispatch('Artical/articalRevise',adata2)
    },
    modifyk(){
      this.dialogFormVisible2 = false;
      console.log("修改完成")
    }

   
  },

  created(){
    this.$store.dispatch("Artical/getArtical")
  },

  computed:{
    ...mapState("Artical",["tableData"]),
    ...mapActions("Artical",["addEmp"])
  },

  data() {
    return {
  
       input10: '',
       dialogTableVisible: false,
      dialogFormVisible: false,
      dialogFormVisible2: false,
      form: {
         
        articlesName:"",      
        goodsMaterial:"" ,  
        goodsOnlyFor:"",    
        goodsSize:"",       
        articlesDate:"",   
        goodsSpecial:"",    
        goodsSupplier:"",   
        articlesPrice:"",   

      },
      formLabelWidth: "100px",
       currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  }
 
};
</script>
<style>
</style>
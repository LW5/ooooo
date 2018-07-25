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
   <el-button type="primary"  @click="dialogFormVisible = true" >添加食品</el-button>
    </el-header>
   <el-table
    :data="this.tableData"
    border
    style="width: 100%"
    max-height="400">
    <el-table-column
      prop="foodsImg"
      label="产考图片"
      width="150">
      <template scope="scope">
            <img :src="scope.row.foodsImg" width="50" height="50" class="head_pic"/>
      </template>
    </el-table-column>
    <el-table-column
      prop="goodsName"
      label="食品名称"
      width="120"
      >
    </el-table-column>
    <el-table-column
      prop="goodsCanFor"
      label="适用宠物"
      width="120">
    </el-table-column>
    <el-table-column
      prop="goodsTaste"
      label="食品口味"
      width="120">
    </el-table-column>
    <el-table-column
      prop="goodsRegion"
      label="产地"
      width="120">
    </el-table-column>
    <el-table-column
      prop="goodsDate"
      label="生产日期"
      width="100">
    </el-table-column>
    <el-table-column
      prop="goodsTime"
      label="保质期"
      width="80">
    </el-table-column>
    <el-table-column
      prop="goodsIntro"
      label="产品描述"
      width="120">
    </el-table-column>
    <el-table-column
      prop="goodsPrice"
      label="价格"
      width="80">
    </el-table-column>
   
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除</el-button>
        <el-button type="text" size="small" @click.native.prevent="modify(scope.$index, scope.row)" >修改</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 添加 -->
  
  <el-dialog title="添加食品" :visible.sync="dialogFormVisible">
  <el-form >
    <el-form-item label="食品名称" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="tableData.goodsName" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>

    <el-form-item label="适用宠物" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="tableData.goodsCanFor" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
    <el-form-item label="食品口味" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="tableData.goodsTaste" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
    <el-form-item label="产地" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="tableData.goodsRegion" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
    <el-form-item label="生产日期" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="tableData.goodsDate" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
    <el-form-item label="保质期" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="tableData.goodsTime" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
     <el-form-item label="产品描述" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="tableData.goodsIntro" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
     <el-form-item label="价格" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="tableData.goodsPrice" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="letter">确 定</el-button>
    </div>
    <el-upload
    ref="upload"
  class="upload-demo"
  drag
  :on-success="spImg"
  action="files/upload1"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
 
</el-upload>
</el-dialog>


<el-dialog title="修改食品" :visible.sync="dialogFormVisible2">
  <el-form >
    <el-form-item label="食品名称" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="tableData.goodsName" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>

    <el-form-item label="适用宠物" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="tableData.goodsCanFor" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
    <el-form-item label="食品口味" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="tableData.goodsTaste" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
    <el-form-item label="产地" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="tableData.goodsRegion" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
    <el-form-item label="生产日期" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="tableData.goodsDate" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
    <el-form-item label="保质期" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="tableData.goodsTime" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
     <el-form-item label="产品描述" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="tableData.goodsIntro" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
     <el-form-item label="价格" :label-width="formLabelWidth">
       <el-col :span="10">
         <el-input  v-model="tableData.goodsPrice" auto-complete="off"></el-input>
        </el-col>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
    <el-button type="primary" @click="modifyk">确 定</el-button>
    </div>
    <el-upload
    ref="upload"
  class="upload-demo"
  drag
   :on-success="xgspImg"
  action="files/upload1"
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
      :page-sizes="[5, 10, 15, 20]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="10">
    </el-pagination>
  </div>
  </el-container>
</template>

<script>
import {mapState,mapActions}from "vuex"
export default {

    // watch: {
    //     curPage() {
    //       this.$store.dispatch("Foods/getFoods")
    //     },
    //     eachPage() {
    //       this.$store.dispatch("Foods/getFoods")
    //     },
    //   },

  methods: {
     handleSizeChange(val) {
      this.eachPage=val
    },
    handleCurrentChange(val) {
      this.curPage=val
    },

      deleteRow(index, rows) {
        rows.splice(index, 1);
      },

    //图片
    spImg(res){
      this.tableData.foodsImg=res.url
    }, 
    // 修改图片
      xgspImg(res){
        this.tableData.foodsImg=res.url
      },


    // 添加
    letter(){
      this.dialogFormVisible = false;
     const {
          goodsName,
          goodsCanFor,
          goodsTaste,
          goodsRegion,
          goodsDate,
          goodsTime,
          goodsIntro,
          goodsPrice,
          foodsImg,
     }=this.tableData;
     const data1={
       goodsName:goodsName,
        goodsCanFor:goodsCanFor,
        goodsTaste:goodsTaste,
        goodsRegion:goodsRegion,
        goodsDate:goodsDate,
        goodsTime:goodsTime,
        goodsIntro:goodsIntro,
        goodsPrice:goodsPrice,
        foodsImg:foodsImg,
        imgsId:this.imgsId
     }
      this.$store.dispatch('Foods/addEmp',data1)
       this.$store.dispatch("Foods/getFoods")
    },
    // 删除
    deleteRow(index, rows){
      const data2={id:rows[index]._id}
      this.$store.dispatch('Foods/delet',data2)
      this.$store.dispatch("Foods/getFoods")
    },


    // 修改获取值
    modify(index, rows){
       this.dialogFormVisible2 = true;
       const {
          goodsName,
          goodsCanFor,
          goodsTaste,
          goodsRegion,
          goodsDate,
          goodsTime,
          goodsIntro,
          goodsPrice,
          foodsImg,
          _id,
       }=rows;
       this.tableData.goodsName=goodsName;
       this.tableData.goodsCanFor=goodsCanFor;
       this.tableData.goodsTaste=goodsTaste;
       this.tableData.goodsRegion=goodsRegion;
       this.tableData.goodsDate=goodsDate;
       this.tableData.goodsTime=goodsTime;
       this.tableData.goodsIntro=goodsIntro;
       this.tableData.goodsPrice=goodsPrice;
       this.tableData.foodsImg=foodsImg;
       this.tableData.id=_id;
    },
    // 修改值
    modifyk(){
      this.dialogFormVisible2 = false;
      const {
          goodsName,
          goodsCanFor,
          goodsTaste,
          goodsRegion,
          goodsDate,
          goodsTime,
          goodsIntro,
          goodsPrice,
          foodsImg,
          id,
      }=this.tableData;

      const data3={
        goodsName:goodsName,
        goodsCanFor:goodsCanFor,
        goodsTaste:goodsTaste,
        goodsRegion:goodsRegion,
        goodsDate:goodsDate,
        goodsTime:goodsTime,
        goodsIntro:goodsIntro,
        goodsPrice:goodsPrice,
        foodsImg:foodsImg,
        id:id
      }
      this.$store.dispatch("Foods/amend",data3)
      this.$store.dispatch("Foods/getFoods")
    }

   
  },

  created(){
    this.$store.dispatch("Foods/getFoods")
  },

  computed:{
    ...mapState("Foods",["tableData"]),
    ...mapActions("Foods",["addEmp"])
  },

  data() {
    return {
  
       input10: '',
       dialogTableVisible: false,
      dialogFormVisible: false,
      dialogFormVisible2: false,
      
      formLabelWidth: "100px",
       currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      imgsId:[],

      // 控制第几页
      curPage: 1,
      // 显示条数
      eachPage: 10,
      // 种页数
      maxPage: 0,
      // 总条数
      count: 0,
    };
  }
 
};
</script>
<style>
</style>
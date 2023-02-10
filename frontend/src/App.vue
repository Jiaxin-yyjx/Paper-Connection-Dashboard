<template>
  <div id="app">
    <el-row><Menu/></el-row>  
    
    <el-row>
         <el-col :span="5">
          <div style="height:800px; border:2px solid black">
            <River/>
          </div>
        </el-col>
        <el-col :span="10">
          <div style="height:500px; border:2px solid black">
          </div>
        </el-col>
         <el-col :span="9">
          <div style="height:500px; border:2px solid black">
          </div>
         </el-col>
      </el-row>
       <el-row>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>

  </div>
</template>

<script>
import River from './components/River.vue'
import Menu from './components/menu.vue'
export default {
  name: 'App',
  components:{
    River, Menu,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-row {
    margin-bottom: 40px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

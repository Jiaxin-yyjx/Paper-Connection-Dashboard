<template>
  <div id="app">
    <el-row><TopMenu/></el-row>  
    <template>
      <div>
        <!-- <h2>{{ file }}</h2> -->
        <input type="file" ref="fileInput" />
        <button @click="uploadFile">Upload</button>
      </div>
    </template>

    <el-row>
        <el-col :span="5">
          <div style="height:800px; border:2px solid black">
            <Keyword/>
          </div>
        </el-col>
        <el-col :span="10">
          <div style="height:500px; border:2px solid black">
            <Graph1/>
          </div>
        </el-col>
        <el-col :span="9">
          <div style="height:500px; border:2px solid black">
            <Information/>
          </div>
        </el-col>
        <el-col :span="19">
          <div style="height:300px; border:2px solid black">
            <Abstract/>
          </div>
        </el-col>
    </el-row>
    <!-- <el-row><div style="height:500px; border:2px solid black"><Graph2/></div></el-row>   -->
    
<!-- <el-row>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
</el-row> -->

  </div>
</template>

<script>
import River from './components/River.vue'
import TopMenu from './components/menu.vue'
import Keyword from './components/Keyword.vue'
import Information from './components/Information.vue'
import Abstract from './components/abstract.vue'
import Graph1 from './components/Graph1.vue'
import Graph2 from './components/Graph2.vue'
import axios from 'axios'

export default {
  name: 'App',
  // data(){
  //   return {file:""}
  // },
  // mounted(){
  //   this.file = this.$store.getters.getfiles
  // },  
  components:{
    River, TopMenu, Keyword, Abstract, Graph1, Graph2, Information
  },
  methods: {
      uploadFile() {
        const file = this.$refs.fileInput.files[0];
        const formData = new FormData();
        formData.append('file', file);
        // 
        const backend_url = 'http://127.0.0.1:5000'
        axios.post(backend_url+'/keydata', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          // Handle the response as needed
          // Data result is stored in the response
          console.log(response.data);
        })
        .catch(error => {
          // Handle the error
          console.error(error);
        });
      }

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

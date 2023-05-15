<template>
  <div>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      height="430"
      style="width: 100%">
    <el-table-column
      type="index"
      width="50">
      </el-table-column>
      <el-table-column
        prop="namePeople"
        label="Contact Author"
        width="150">
      </el-table-column>
      <el-table-column
        prop="nameArticle"
        label="Title"
        width="300">
      </el-table-column>
      <!-- <el-table-column
        prop="address"
        label="C"
        show-overflow-tooltip>
      </el-table-column> -->
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="setCurrent(tableData[1])">Select second row</el-button>
      <el-button @click="setCurrent()">Clear selection</el-button>
    </div>
  </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          // tableData: this.$store.state.author_title,
          currentRow: null
        }
      },
      computed: {
        tableData() {
          return this.$store.getters.getAuthorTitle;
        },
      },
      methods: {
        setCurrent(row) {
          this.$refs.singleTable.setCurrentRow(row);
      },
        handleCurrentChange(val) {
          this.currentRow = val;
          this.$store.commit('selectArticle', val)
          // console.log(val, 'changeee!!')
      }
        // handleSelectionChange(val) {
        //   this.multipleSelection = val;
        //   this.$store.commit('selectArticle', val)
        //   // console.log(val, 'changeee!!')
        // }
      }
    }
  </script>
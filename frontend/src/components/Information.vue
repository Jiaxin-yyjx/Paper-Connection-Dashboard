<template>
  <div>
   <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="50">
      </el-table-column>
      <el-table-column
        prop="namePeople"
        label="Author"
        width="200">
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
    <div>
      <!-- <el-button @click="toggleSelection([tableData[1], tableData[2]])">Change the status of second and third lines.</el-button> -->
      <el-button @click="toggleSelection()">Cancel choice</el-button>
    </div>
  </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-03',
            namePeople: 'XXX',
            nameArticle: 'BUIJ'
          }, {
            date: '2016-05-02',
            namePeople: 'XXX',
            nameArticle: 'PKJH'
          }, {
            date: '2016-05-04',
            namePeople: 'XXX',
            nameArticle: 'PKJH'
          }, {
            date: '2016-05-01',
            namePeople: 'XXX',
            nameArticle: 'PKJH'
          }, {
            date: '2016-05-08',
            namePeople: 'XXX',
            nameArticle: 'PKJH'
          }, {
            date: '2016-05-06',
            namePeople: 'XXX',
            nameArticle: 'PKJH'
          }, {
            date: '2016-05-07',
            namePeople: 'XXX',
            nameArticle: 'PKJH'
          }],
          multipleSelection: []
        }
      },
  
      methods: {
        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        }
      }
    }
  </script>
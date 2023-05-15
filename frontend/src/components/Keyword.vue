<template>
  <div class="TVCG">
  <div>
  <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      height="700"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="50">
      </el-table-column>
      <!-- <el-table-column
        label="Keywords"
        width="200">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column> -->
      <el-table-column
        prop="name"
        label="Keywords"
        width="200">
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
  </div>
</template>
  
  <script>
  import store from '../store'
    export default {
      name: 'TVCG',
      data() {
        return {
          tableData: this.$store.state.files.map((file) => ({name: file.name})).filter((file, index, self) =>
          index === self.findIndex((t) => (JSON.stringify(t) === JSON.stringify(file))))
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
          console.log(val)
          store.commit('selectKeywords', [{namePeople:'123',nameArticle:'4321'}])
          this.multipleSelection = val;
        }
      }
    }
  </script>
<template>
  <div class="TVCG">
  <div>
  <el-input
      v-model="searchText"
      placeholder="Search..."
      @keyup.enter.native="search"
      clearable
  ></el-input>

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
          searchText: '',
          tableData: this.$store.state.files.map((file) => ({name: file.name})).filter((file, index, self) =>
          index === self.findIndex((t) => (JSON.stringify(t) === JSON.stringify(file))))
        }
      },
      computed: {
        filteredData() {
        if (this.searchText) {
        // Filter the table data based on the search text
        return this.tableData.filter(item => {
          // Modify this condition based on your requirements
          return (
            item.Keywords.toLowerCase().includes(this.searchText.toLowerCase())
          )
        })
        } else {
        return this.tableData
        }
      },
      // filteredDataCount() {
      //   return this.filteredData.length;
      // }
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
          // console.log(val, 'changeee!!')
          this.$store.commit('selectKeywords', val)
          // this.$store.commit('selectKeywords', [{namePeople:'123',nameArticle:'4321'}])
          // this.$store.commit('Test', val)
          this.multipleSelection = val;
        },
        search() {
        // Perform the search action
        console.log('Performing search:', this.searchText)
        }
      }
    }
  </script>
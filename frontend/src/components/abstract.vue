<template>
  <div class="scrollable-container">
    <el-scrollbar height="300px">
      <p><strong>Abstract</strong></p>
      <p class="scrollable-content">
        {{ firstRow }}
      </p>
    </el-scrollbar>
  </div>
</template>

<style>
  .scrollable-container {
    height: 300px;
    overflow: hidden;
  }

  .scrollable-content {
    max-height: 200px;
    overflow-y: auto;
    text-align: left;
  }
</style>

<script>
  export default {
    computed: {
      firstRow() {
        // return this.$store.state.files.map((file) => ({Abstract: file.Abstract}))[0].Abstract
        return this.$store.getters.getAbstract;
      }
    }
  }
</script>

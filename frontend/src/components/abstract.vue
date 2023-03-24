<template>
    <el-scrollbar height="100px">
        <h4>Abstract</h4>
      <p v-for="item in 5" :key="item" class="scrollbar-demo-item">{{ item }}</p>
    </el-scrollbar>
  </template>
  
<style scoped>
  .scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    margin: 10px;
    text-align: left;
    border-radius: 4px;
    background: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
  }
</style>
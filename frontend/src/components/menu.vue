<template>
    <!-- components/TopMenu.vue -->
    <div class="menupage">
      <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
        <p class="logo-title"><i class="el-icon-star-on"></i>IEEE Paper</p>
        <el-menu-item index="1" style="margin-left:400px;">TVCG</el-menu-item>
        <el-menu-item index="2">Content2</el-menu-item>
        <el-menu-item index="3">Content3</el-menu-item>
        <el-menu-item index="4">Content4</el-menu-item>
      </el-menu>
    </div>
  </template>
  <style>
  .menupage{
    position: fixed;
    width: 100%;
    top: 0px;
    z-index: 100;
  }
  .menupage .el-menu.el-menu--horizontal{
    border-bottom: none;
    height: 100px;
    line-height: 100px;
  }
  .menupage .el-menu.el-menu--horizontal>.el-menu-item,.menupage .el-menu--horizontal>.el-submenu .el-submenu__title{
      height: 100px;
      line-height: 100px;
      padding: 0px 50px;
      font-size: 16px;
      letter-spacing: 4px;
  }
  .menupage .el-menu--horizontal>.el-menu-item.is-active,.menupage .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
    border-bottom-width: 4px;
  }
  .menupage .logo-title .el-icon-user{
    margin-right: 5px;
  }
  </style>
  <style scoped>
    .logo-title{
      position: absolute;
      left: 100px;
      top: 0px;
      color:#fff;
      font-size:26px;
      cursor: pointer;
    }
    .logo-title img{
      width: 80px;
      outline:none;
      vertical-align: middle;
    }
  </style>
  <script>
  export default {
    name: 'topMenu',
    data () {
      return {
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        var name = ''
        if (key === '1') name = 'TVCG'
        if (key === '4') name = 'Content4'
        if (key === '3') name = 'Content3'
        if (key === '2') name = 'Content2'
        var targetEle = document.querySelector('.' + name)
        var offsetTop = targetEle.offsetTop
        document.documentElement.scrollTop = offsetTop - 150
      }
    }
  }
  </script>
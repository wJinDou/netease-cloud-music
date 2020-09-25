<template>
  <div class="menu">
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#eee"
      active-text-color="#e00"
      >
      <el-menu-item index="0">
        <i class="iconfont icon-tubiaozhizuomoban" ></i>
        <span slot="title">发现音乐</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="iconfont icon-gedan" ></i>
        <span slot="title">推荐歌单</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="iconfont icon-yinle" ></i>
        <span slot="title">最新音乐</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="iconfont icon-shexiangji" ></i>
        <span slot="title">最新MV</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped >
.el-menu-item:hover {
  background-color: #dfdfdf !important ;
}
.el-menu-item {
  .iconfont {
    margin-right: 16px;
    font-size: 20px;
  }
}
</style>

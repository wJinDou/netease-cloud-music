<template>
  <div class="header">
      <!-- 顶部菜单 -->
      <div class="menu">
          <el-button type="success" icon="el-icon-s-home" circle></el-button>
          <el-button type="danger" icon="el-icon-close" circle></el-button>
          <el-button type="warning" class="iconfont" circle> &#xe725;</el-button>
      </div>
      <!-- 历史记录 -->
      <div class="history">
        <i class="el-icon-arrow-left"></i>
        <i class="el-icon-arrow-right"></i>
      </div>
      <!-- 搜索功能 -->
      <div class="search">
        <i class="el-icon-search"></i>
        <el-input v-model="keywords" @keyup.enter.native="goSearch" placeholder="搜索"></el-input>
      </div>
      <!-- 换肤功能 -->
      <div class="change">
        <i class="iconfont">&#xe622;</i>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keywords: ''
    }
  },
  methods: {
    async goSearch () {
      console.log('/搜索请求')
      const res = await this.$axios.get('/search', {
        params: {
          keywords: this.keywords
        }
      })
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped >
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 16px;
  background-color: #f9f9f9;
    // 顶部菜单
    .menu{
      display: flex;
      align-content: center;
      .el-button  {
        transform: scale(0.5) ;
        margin: 0 -5px;
      }
    }
    // 历史记录
    .history {
      flex: 1;
      margin-left: 60px;
      font-size: 18px;
      i {
        margin: 0 10px;
      }
    }
    // 搜索功能
    .search {
      position: relative;
      .el-icon-search{
        position: absolute;
        left: 10px;
        top: 8px;
        z-index: 1;
        color: #333;
      }
      .el-input {
        width: 160px;
        height: 28px;
        ::v-deep .el-input__inner {
          padding-left: 30px;
          height: 100%;
          border: none;
          background-color: #eee;
        }
      }
    }
    // 换肤功能
    .change {
      padding-left: 20px;
      margin-right: 30px;
      .iconfont {
        color: #777;
        font-size: 20px;
      }
    }
}
</style>

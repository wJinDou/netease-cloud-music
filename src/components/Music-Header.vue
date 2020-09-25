<template>
  <div class="header">
      <!-- 顶部菜单 -->
      <div class="menu">
          <el-button type="success" icon="el-icon-s-home" circle></el-button>
          <el-button type="danger" icon="el-icon-close" circle></el-button>
          <el-button type="warning" class="iconfont icon-icon-- " circle></el-button>
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
      <div class="change" @click="isShow = !isShow" >
        <i class="iconfont icon-huanfu"></i>
        <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut" >
          <div v-show="isShow" class="anima">
            <div class="item">
              <i></i>
              <span>深色</span>
            </div>
            <div class="item">
              <i></i>
              <span>浅色</span>
            </div>
            <div class="item">
              <i></i>
              <span>红色</span>
            </div>
          </div>
        </transition>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keywords: '',
      isShow: false
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
      position: relative;
      cursor: pointer;
      margin-left: 20px;
      margin-right: 30px;
      padding: 3px;
      border-radius: 50%;
      &:hover {
        background-color: #ececec;
      }
      .iconfont {
        color: #777;
        font-size: 20px;
      }
      .anima {
        position: absolute;
        right: -30px;
        top: 40px;
        width: 240px;
        height: 80px;
        border-radius: 5px;
        box-shadow: 0 0 15px rgba(0, 0, 0, .1);
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-around;
        box-sizing: border-box;
        padding: 0 20px;
        .item{
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 16px;
          color: #555;
          i {
            display: block;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background-color: #d00;

          }
          &:nth-child(1) {
            i {
              background-color: #333;
            }
          }
          &:nth-child(2) {
            i {
              background-color: #eee;
            }
          }
        }
        &::after {
          position: absolute;
          top: -20px;
          right: 32px;
          content: "";
            display: block;
            border: 10px solid #fff;
            border-left: 10px solid  transparent;
            border-top: 10px solid  transparent;
            border-right: 10px solid  transparent;
        }
      }
    }
}
</style>

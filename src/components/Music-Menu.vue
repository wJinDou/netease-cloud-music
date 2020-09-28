<template>
  <div class="menu">
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="var(--bgColor2)"
      active-text-color="#e00 !important"
      >
      <el-menu-item :class="{isblack:isBlack}" @click.native="login" >
        <i class="iconfont icon-denglu" :class="{isblack:isBlack}" ></i>
        <span class="login" >未登录</span>
      </el-menu-item>
      <el-menu-item index="0" :class="{isblack:isBlack}" >
        <i class="iconfont icon-tubiaozhizuomoban" ></i>
        <span slot="title" >发现音乐</span>
      </el-menu-item>
      <el-menu-item index="2" :class="{isblack:isBlack}" >
        <i class="iconfont icon-gedan" ></i>
        <span slot="title" >推荐歌单</span>
      </el-menu-item>
      <el-menu-item index="3" :class="{isblack:isBlack}" >
        <i class="iconfont icon-yinle" ></i>
        <span slot="title" >最新音乐</span>
      </el-menu-item>
      <el-menu-item index="4" :class="{isblack:isBlack}" >
        <i class="iconfont icon-shexiangji" ></i>
        <span slot="title" >最新MV</span>
      </el-menu-item>
  </el-menu>
  <!-- 登录的提示框 -->
  <el-dialog
    title="登录"
    :visible.sync="dialogVisible"
    width="500"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">登 录</el-button>
      </span>
  </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      dialogVisible: false
    }
  },
  computed: {
    ...mapState(['isBlack'])
  },
  methods: {
    login () {
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="less" scoped >
.el-menu {
  height: 100%;
}
.el-menu-item:hover {
  background-color:  var(--bgColor3) !important ;
}
.el-menu-item:first-child:hover{
    background: none !important ;
  }
.el-menu-item {
  transition: none;
}
  .iconfont {
    margin-right: 16px;
    font-size: 20px;
  }
  .icon-denglu{
    font-size: 24px;
    color: #444;
  }
.isblack {
  color: rgba(255, 255, 255,.6);
}
</style>

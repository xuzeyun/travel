<template>
  <div class="header">
    <!-- 返回 -->
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <!-- 输入框 -->
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>输入城市/游玩主题
    </div>
    <!-- 城市 -->
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header
    display: flex
    line-height:.86rem
    background: $bgColor
    color:#fff
    .header-left
      width:.64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width:1.24rem
      float: right
      text-align: center
      color: #fff
</style>

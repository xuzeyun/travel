<template>
  <div class="list" ref="wrapper">
    <div class="">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrap" v-for="item of hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    // 监听器，坚挺letter的变化
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color:#777;
  .list
    position: absolute
    overflow: hidden
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .4rem
      background: #eee
      padding-left: .2em
      color: #666
    .button-list
      overflow: hidden
      padding:  .1rem .6rem .1rem .1rem
      .button-wrap
        width: 33.33%
        float: left
        .button
          padding: .1rem 0
          border-radius: .06rem
          text-align: center
          margin: .1rem
          border: .02rem solid #ccc
    .item-list
      .item
        line-height: .76rem
        color: #666
        padding-left: .2rem
</style>

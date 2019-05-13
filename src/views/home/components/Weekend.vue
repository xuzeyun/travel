<template>
  <div>
    <div class="rec-title">
      周末去哪儿
    </div>
    <div class="list">
      <ul>
        <li class="border-bottom" v-for="item of list" :key="item.id">
          <div class="img-box">
            <img class="img-cont" :src="item.imgUrl" alt="">
          </div>
          <div class="text-box">
            <p class="title">{{item.title}}</p>
            <p class="desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .rec-title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    margin-top: .2rem
  .list
    li
      box-sizing: border-box
      padding: 0 0
      overflow: hidden
      .img-box
        width: 100%
        height: 2rem
        background: #ddd
        overflow: hidden
        .img-cont
          width: 100%
          height: 100%
      .text-box
        box-sizing: border-box;
        padding:0 0 0 0
        .title
          font-size: .3rem
          ellipsis()
          padding: 0.2rem 0.1rem
        .desc
          margin-top: 0
          font-size: .3rem
          color: #999
          padding: 0rem 0.1rem 0.2rem
          ellipsis()
</style>

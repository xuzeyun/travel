<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="img-box">
            <img class="img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="img-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption:{

      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  @import '~@/assets/styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 50%
    .icon
      position: relative;
      overflow: hidden
      height: 0
      width: 25%
      float: left
      padding-bottom: 25%
      .img-box
        position: absolute
        box-sizing: border-box
        padding: .2rem
        left: 0
        top: 0
        right: 0
        bottom:.44rem
        text-align: center;
        .img-content
          height: 100%
      .img-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>

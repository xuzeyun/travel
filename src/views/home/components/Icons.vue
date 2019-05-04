<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="img-box">
            <img class="img-content" :src="item.iconUrl" alt="">
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
  data (){
    return {
      swiperOption:{

      },
      iconList:[
        {
          id: '01',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '春季旅游最强攻略'
        },
        {
          id: '02',
          iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f0f00d6dfe038c044dbc9a437f58b0eb.png',
          desc: '夏季'
        },
        {
          id: '03',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '秋季'
        },
        {
          id: '04',
          iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/6b7127c142123eabcf3e41c136e0ccc2.png',
          desc: '东季'
        },
        {
          id: '05',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '滑雪季'
        },
        {
          id: '06',
          iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f0f00d6dfe038c044dbc9a437f58b0eb.png',
          desc: '自驾游'
        },
        {
          id: '07',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '出国游'
        },
        {
          id: '08',
          iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/6b7127c142123eabcf3e41c136e0ccc2.png',
          desc: '赏樱季'
        },
        {
          id: '09',
          iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/6b7127c142123eabcf3e41c136e0ccc2.png',
          desc: '汉服节'
        }
      ]
    }
  },
  computed:{
    pages (){
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index/8)
        if (!pages[page]){
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

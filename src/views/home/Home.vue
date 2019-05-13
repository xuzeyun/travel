<template>
  <div>
    <home-header v-bind:city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data (){
    return {
      city: '',
      swiperList : [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods:{
    // 去index.json获取数据
    getHomeInfo (){
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    // 把数据打印出来
    getHomeInfoSucc (res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        console.log(data)
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted (){
    // 页面挂载好了执行getHomeInfo
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus">

</style>

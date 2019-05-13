<template>
  <div>
    <home-header v-bind:city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
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
      swiperList : []
    }
  },
  methods:{
    getHomeInfo (){
      axios.get('/api/city.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        console.log(data.hotCities)
        this.city = data.hotCities[0].name

      }
    }
  },
  mounted (){
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus">

</style>

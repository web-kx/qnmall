<template>
  <div>
    <Header class="header" :city="city"></Header>
    <Scroll class="center">
    <home-swiper :banner="banner"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommondList="recommondList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
    </Scroll>
  </div>
</template>
<script>
import getHomeMultidata from 'network/home'
import Scroll from 'components/scroll/scroll.vue'

import Header from "./components/header";
import HomeSwiper from "./components/swiper";
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
export default {
  name: "Home",
  data() {
    return {
      city:'',
      iconList:[],
      banner:[],
      recommondList:[],
      weekendList:[]
    };
  },
  components: {
    Header,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    Scroll
  },
  mounted(){
    getHomeMultidata().then(res =>{
      console.log(res.data.recommendList)
      this.city = res.data.city,
      this.banner = res.data.swiperList,
      this.recommondList = res.data.recommendList,
      this.weekendList = res.data.weekendList
    })
  }
};
</script>
<style lang="stylus" scoped>
.header{
  position relative
  z-index 9
}
.center{
  position absolute
  left 0
  right 0
  top 40px
  bottom 0
  width 100%


}
</style>

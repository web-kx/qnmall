<template>
  <div class="header">
    <van-icon class="header-search" name="search" />
    <input type="text" class="header-counter" placeholder="输入城市/景点">
    <div class="header-right" @click="cityClick">{{this.city}}</div>
    <van-icon name="play" class="header-play" />
    
  </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    cityClick(){
      this.$router.push("/city")
    }
  },
  computed:{
    ...mapState(['city'])
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/normalize.css'
@import '~@/assets/css/varibles.styl'
.header{
    display flex
    width 100%
    height 40px
    line-height 40px
    background $bgColor
    color #fff  
    text-align center
    font-size 16px
}
.header-search{
    position absolute
    font-size 20px
    left 18px
    z-index 2
    color #666
    width 40px
    line-height 40px
}
.header-counter{
    position absolute
    left 20px
    background #eee
    color #999999
    width 70%
    height 28px
    line-height 28px
    margin-top 6px
    border-radius 2px
    border 0
    box-sizing: border-box;
    font-size 14px
    padding-left 40px
}
.header-right{
    position absolute
    right 30px   
}
.header-play{
    position absolute
    right 0
    width 40px
    height 40px
    line-height 40px
    transform rotate(90deg)
}
</style>

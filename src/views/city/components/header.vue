<template>
  <div class="header">
  <van-icon name="arrow-left" class="header-icon" @click="iconClick"/>
    城市选择
    <router-link to="/">
      <div></div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "CityHeader",
  methods:{
      iconClick(){
          this.$router.push('/')
      }
  }
};
</script>
<style lang="stylus" scoped>
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
    justify-content center
    position fixed
    z-index 9
}
.header-icon{
    position absolute
    line-height 40px
    left 8px
    display block
    font-size 24px
}
</style>

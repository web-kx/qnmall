<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <van-icon name="arrow-left" class="van-icon" />
    </router-link>
    <router-link
      tag="div"
      to="/"
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <van-icon name="arrow-left" class="van-icon-center" />
      景点详情
    </router-link>
  </div>
</template>
<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0,
      },
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed(){
    window.removeEventListener('scroll',this.handleScroll)
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      /* console.log(top) */
      if (top > 60) {
        let opacity = top / 140;
        this.opacityStyle = {
          opacity,
        };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
      console.log();
    },
  },
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/varibles.styl'

.header-abs{
    width 40px
    height 40px
    line-height 40px
    border-radius 50%
    background rgba(0,0,0,.5)
    color #fff
    font-size 30px
    text-align center
    position absolute
    top 4px
    left 4px
}
.van-icon{
    display block
    position absolute
    bottom 5px
    left 5px
}
.header-fixed{
    width 100%
    height 40px
    line-height 40px
    background $bgColor
    color #fff
    text-align center
    position fixed
    top 0
    z-index 9
}
.van-icon-center{
    display block
    font-size 20px
    position absolute
    top 10px
    left 10px
}
</style>

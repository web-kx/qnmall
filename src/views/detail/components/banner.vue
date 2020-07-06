<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        :src="bannerImg"
      />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <van-icon name="photo" class="banner-icon" />
        </div>
      </div>
    </div>
    <fade-animation>
    <gollary
      :imgs="bannerImgs" 
      v-show="showGallary"
      @close="handleGallaryClose"
    ></gollary>
    </fade-animation>
  </div>
</template>
<script>
import Gollary from "components/gollary/gollary.vue";
import FadeAnimation from "components/fade/fade.vue"

export default {
  name: "DetailBanner",
  components: {
    Gollary,
    FadeAnimation
  },
  data() {
    return {
      showGallary: false,
      imgs: [
        "//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg",
        "https://imgs.qunarzz.com/sight/p0/1907/e4/e4a734b0c3fb9598a3.img.jpg_350x240_e0ec48d1.jpg",
      ],
    };
  },
  props:{
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    },
  },
};
</script>
<style lang="stylus" scoped>
.banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
        width 100%
    .banner-info
        display flex
        position absolute
        color #fff
        left 0
        right 0
        bottom 0
        line-height 30px
        background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
        .banner-title
            flex 1
            font-size 16px
            padding 0 .2rem
        .banner-number
            margin-top 8px
            padding: 0 20px
            line-height 16px
            height 16px
            line-height 16px
            font-size .24rem
            border-radius .2rem
            background rgba(0,0,0,.8)
            text-align center
            .banner-icon
                font-size 16px
</style>

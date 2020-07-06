<template>
  <div class="container" @click="handleGallayClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gollary",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination" /* 导航圆点 */,
          type: "fraction" /*  圆点样式 */,
        },
        loop: true,
        observeParents: true /*当Swiper的父元素变化时，Swiper更新 */,
        observer: true /* 当改变swiper的样式自动初始化swiper */,
      },
    };
  },
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    handleGallayClick() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-wrapper
    display flex
    align-items center


.container
    display flex
    flex-direction column
    justify-content center
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    z-index 9
    .wrapper
        display flex
        align-items center
        justify-content center
        width 100%
        height 7.5rem
        .gallary-img
            display block
            width 100%
        .swiper-pagination
            bottom 0
            color #fff
</style>

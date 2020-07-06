<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item, index) in banner" :key="index">
        <img class="swiper-img" :src="item.imgUrl" alt="" />
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        pagination: { el: ".swiper-pagination" } /* 导航圆点 */,
        loop: true /* 循环轮播 */,
      },
    };
  },
  props:{
    banner:{
      type:Array
    }
  }
};
</script>
<style lang="stylus" scoped>
.wrapper {
  width: 100%;
  height: 120px;
  overflow: hidden;
  background: #eee;
}
.swiper-img{
  width: 100%;
  height: 100%;
}
.wrapper >>> .swiper-pagination-bullets {
  margin-top -30px
  margin-left 180px
}
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff !important;
}
</style>

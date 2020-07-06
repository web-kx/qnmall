<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
  </div>
</template>
<script>
import getDetailData from "network/detail";

import DetailBanner from "./components/banner";
import DetailHeader from "./components/header";
import DetailList from "./components/list";

export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      list: [],
    };
  },
  mounted() {
    getDetailData().then((res) => {
      console.log(res);
      params: {
        id: this.$route.params.id;
      }
      this.sightName = res.data.sightName;
      this.bannerImg = res.data.bannerImg;
      this.gallaryImgs = res.data.gallaryImgs;
      this.list = res.data.categoryList;
    });
  },
};
</script>
<style lang="stylus" scoped></style>

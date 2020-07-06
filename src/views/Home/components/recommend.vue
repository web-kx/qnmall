<template>
  <div class="wrapper">
    <div class="title">热销推荐</div>
    <ul>
      <router-link 
        tag="li"
        :to="'/detail/'+ item.id"
        class="item border-bottom"
        v-for="(item,index) in recommondList"
        :key="index"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
    };
  },
  props:{
      recommondList:{
          type:Array
      }
  }
};
</script>
<style lang="stylus" scoped>
.title{
    background #eee
    margin-top 20px
    width 100%
    height 40px
    line-height 40px
    font-weight 500  
    text-align center
}
.item{
    position relative
    width 100%
    height 100px
    overflow hidden
    border-bottom 1px solid #eee
}
.item-img{
    display block
    float left
    width 80px
    height 80px
    padding-top 10px
    padding-left 20px
}
.item-info{
    position relative
    overflow hidden
    width 275px
    height 80px
    top 10px
    right 0
}
.item-title{
    position absolute
    font-size 18px
    left 4px
    margin 0
    padding 0
}
.item-desc{
    position absolute
    margin 0
    padding 0
    top 28px
    left 4px
    color #666
    overflow hidden
    text-overflow ellipsis
    white-space nowrap

}
.item-button{
    position absolute
    bottom 0
    left 4px
    border 0
    background red
    color #fff
}
</style>

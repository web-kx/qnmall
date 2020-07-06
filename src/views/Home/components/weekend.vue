<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="(item,index) in weekendList"
        :key="index"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
    };
  },
  props:{
    weekendList:{
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
.item-img-wrapper{
    width 100%  
    height 0
    padding-bottom 120px
    overflow hidden 
}
.item-img{
    width 100% 
}
.item-info{
    width 100%
    height 90px
    position relative
}
.item-title{
    display block
    position absolute
    margin 0 
    padding 0
    top 20px
    left 4px
}
.item-desc{
    display block
    width 90%
    position absolute
    margin 0
    padding 0 
    top 50px
    left 4px
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    color #666

}
</style>

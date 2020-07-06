<template>
  <div>
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="item-title">
        <span class="item-title-icon"></span>
        {{ item.title }}
      </div>
      <div class="item-children" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailList",
  props: {
    list: {
      type: Array,
    },
  },
};
</script>
<style lang="stylus" scoped>
.item-title{
    line-height 40px
    font-size 16px
    height 40px
    padding 0 10px
    border-bottom 1px solid #eee
}
.item-title-icon
    position relative
    left 3px
    top 3px
    display: inline-block;
    width: 18px;
    height: 18px;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -22px no-repeat;
    margin-right: 5px;
    background-size: 20px 150px;
.item-children    
    padding 0 20px    
</style>

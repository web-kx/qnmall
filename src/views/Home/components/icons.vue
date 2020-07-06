<template>
  <div class="wrapper">
    <van-grid :column-num="4" gutter="0" :border="false" :icon-size="40">
      <van-grid-item
        v-for="(item,index) in iconList"
        :key="index"
        :icon="item.imgUrl"
        :text="item.desc"
      />
    </van-grid>
  </div>
</template>
<script>
export default {
    name:'HomeIcons',
    data(){
      return{
          iconList:[{
              id:'0001',
              imgUrl:'//s.qunarzz.com/homenode/images/touchheader/hotel.png',
              desc:'酒店'
          },{
              id:'0002',
              imgUrl:'//s.qunarzz.com/homenode/images/touchheader/flight.png',
              desc:'机票'
          },{
              id:'0003',
              imgUrl:'//s.qunarzz.com/homenode/images/touchheader/train.png',
              desc:'火车票'
          },{
              id:'0004',
              imgUrl:'//s.qunarzz.com/homenode/images/touchheader/package.png',
              desc:'度假'
          },{
              id:'0005',
              imgUrl:'//s.qunarzz.com/homenode/images/touchheader/piao.png',
              desc:'景点门票'
          },{
              id:'0006',
              imgUrl:'//s.qunarzz.com/homenode/images/touchheader/flight.png',
              desc:'机票'
          },{
              id:'0007',
              imgUrl:'//s.qunarzz.com/homenode/images/touchheader/train.png',
              desc:'火车票'
          },{
              id:'0008',
              imgUrl:'//s.qunarzz.com/homenode/images/touchheader/package.png',
              desc:'度假'
          }]
      }
  },
};
</script>
<style lang="stylus" scoped></style>

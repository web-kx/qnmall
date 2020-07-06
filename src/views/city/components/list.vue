<template>
  <div class="list">
    <scroll class="center" ref="scroll">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="(item, index) in hotCities"
            :key="index"
            @click="handleCityCkick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem in item"
            :key="innerItem.id"
            @click="handleCityCkick(innerItem.name)"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import Scroll from "components/scroll/scroll.vue";
import {mapState,mapMutations} from 'vuex'

export default {
  name: "CityList",
  data () {
    return {
      themeTopYs:[]
    }
  },
  components: {
    Scroll,
  },
  props: {
    cities: {
      type: Object,
    },
    hotCities: {
      type: Array,
    },
    letter: {
      type: "",
    },
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0].offsetTop;
        this.$refs.scroll.scroll.scrollTo(0,-element)
      }
    }, 
  },
  methods:{
    handleCityCkick(city){
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed:{
    ...mapState({currentCity:'city'})
  }
};
</script>
<style lang="stylus" scoped>
.border-topbottom
    &:before
        border-color #ccc
    &:after
        border-color #ccc
.border-bottom
    &:before
        border-color #ccc
.list
    overflow hidden
    position absolute
    top 80px
    left 0
    right 0
    bottom 0
    .title
        line-height 20px
        background #eee
        padding-left 10px
        color #666
        font-size 13px
    .button-list
        overflow hidden
        padding 5px
        .button-wrapper
            float left
            width 33.33%
            .button
                text-align center
                padding 5px 0
                border-radius 3px
                margin 5px 5px
                border 1px solid #ccc


    .item-list
        .item
            line-height 40px
            padding-left 10px
.center{
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    width 100%
}
</style>

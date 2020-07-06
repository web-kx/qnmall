<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li v-for="(item, index) of list" :key="index" class="search-item"
        @click="handleCityClick">
          {{ item.name }}
        </li>
        <li class="search-item" v-show="!list.length">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
  name: "CitySearch",
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
    };
  },
  props: {
    cities: Object,
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    },
  },
  methods:{
    handleCityClick(city){
        this.changeCity(city)
        this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/varibles.styl'
.search{
    height 40px
    background $bgColor
    text-align center
    position fixed
    z-index 9
    top 40px
    width 100%
}
.search-input{
    height 30px
    width 80%
    box-sizing border-box
    border-radius 10px
    border 0
}
.search-content{
    overflow hidden
    position absolute
    top 80px
    left 0
    right 0
    bottom 0
    background #eee
    z-index 1
}
.search-item{
    line-height 30px
    padding-left 10px
    background #fff
    color #666
}
</style>

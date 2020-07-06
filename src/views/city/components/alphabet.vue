<template>
  <ul class="list">
    <li
      class="item"
      v-for="item in letters"
      :ref="item"
      :key="item"
      @touchstart="handleTachStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchend"
      @click="handleLettterClick"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
  data() {
    return {
      touchStatus: false,
    };
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    },
  },
  props: {
    cities: {
      type: Object,
    },
  },
  methods: {
    handleLettterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTachStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        const startY = this.$refs["A"][0].offsetTop;
        const touchY = e.touches[0].clientY - 80
        const index = Math.floor((touchY-startY)/20)
        if(index > 0 && index < this.letters.length){
           this.$emit('change',this.letters[index])
        }
      }
    },
    handleTouchend() {
      this.touchStatus = false;
    },
  },
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/varibles.styl'
.list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 80px
    right 0
    bottom 0
    width 20px
    .item
        line-height 20px
        text-align center
        color $bgColor
</style>

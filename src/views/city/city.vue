<template>
  <div>
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
      <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
      <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>
<script>
import getCityData from 'network/city.js'

import CityHeader from '../city/components/header.vue'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
    
  },
  data () {
      return {
          cities:{},
          hotCities:[],
          letter:[]
      }
  },
  methods:{
      handleLetterChange(letter){
            this.letter = letter


        }

  },
  mounted(){
      getCityData().then(res => {
          /* console.log(res) */
          this.cities = res.data.cities
          this.hotCities = res.data.hotCities
      });
     
  }
};
</script>
<style lang="stylus" scoped>

</style>

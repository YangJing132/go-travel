<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list  :cities="cities"
      				:hot="hotCities"
      				:letter="letter"></city-list>
		<city-alphabet :cities="cities"
					@change="handleLetterChange"
					></city-alphabet>
	</div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'


export default{
  name: 'City',
  components:{
  	CityHeader:CityHeader,
  	CitySearch:CitySearch,
  	CityList:CityList,
  	CityAlphabet:CityAlphabet
  },
  data (){
  	return {
  		cities: {},
  		hotCities: [],
      	letter: ''
  	}
  },
  mounted (){
  	this.getCityList()
  },
  methods:{
  	getCityList (){
  		axios.get('/api/city.json').then(this.getHomeInfoSucc)
  	},
  	getHomeInfoSucc (res){
  		// console.log(res);
  		res = res.data
	    if (res.ret && res.data) {
	        const data = res.data
	        this.cities = data.cities
	        this.hotCities = data.hotCities
	    }
  	},
  	handleLetterChange (letter){
  		this.letter = letter
  	}
  }
}
</script>

<style lang="stylus" scoped>

</style>
<template>
	<div>
		<div class="search">
			<input type="text" v-model='keyword' placeholder="输入城市名或者拼音" class="search-input">
		</div>

		<div class="search-content" v-show="keyword" ref="search">
			<ul>
				<li class="search-item border-bottom" v-for='item of list' :key="item.id" 
				@click="handleCityClick(item.name)">{{item.name}}</li>
				<li class="search-item border-bottom" v-show="hasNoData">
		          没有找到匹配数据
		        </li>
			</ul>
		</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
	export default{
	  name: 'CitySearch',
	  props:{
	  	cities: Object
	  },
	  data (){
	  	return {
	  		keyword:'',
	  		list:[],
	  		timer:null
	  	}
	  },
	  mounted () {
	    this.scroll = new Bscroll(this.$refs.search)
	  },
	  computed: {
	    hasNoData () {
	      return !this.list.length
	    }
	  },
	  watch: {
			keyword (){
				if(this.timer){
					clearTimeout(this.timer)
				}
				this.timer = setTimeout(()=>{
					const result=[]
					for (var i in this.cities){
						this.cities[i].forEach((value)=>{
							if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
								result.push(value)
							}
						})
					}
					this.list = result;
				},100)
			}
	  },
	  methods: {
	    handleCityClick (city) {
	      this.changeCity(city)
	      // this.$store.commit('changeCity',city)
	      this.$router.push('/')
	    },
	     ...mapMutations(['changeCity'])
  },
	}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
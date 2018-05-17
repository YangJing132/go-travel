<template>
	<div>
		<home-header ></home-header>
		<home-swiper :list='swiperList'></home-swiper>
		<icons :list='iconList'></icons>
		<home-recommend :list='recommendList'></home-recommend>
		<home-weekend :list='weekendList'></home-weekend>
	</div>
</template>
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import Icons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
//ajax数据请求
import axios from 'axios'


export default{
  name: 'Home',
  components:{
	HomeHeader:HomeHeader,
	HomeSwiper:HomeSwiper,
	Icons:Icons,
	HomeRecommend:HomeRecommend,
	HomeWeekend:HomeWeekend
  },
  data (){
  	return {
  		swiperList:[],
  		iconList:[],
  		recommendList:[],
  		weekendList:[]
  	}
  },
  mounted (){
  	this.getHomeInfo()
  },
  methods:{
  	getHomeInfo (){
  		axios.get('/api/index.json').then(this.getHomeInfoSucc)
  	},
  	getHomeInfoSucc (res){
  		console.log(res);
  		res = res.data
      	if (res.ret && res.data) {
	        const data = res.data
	        this.swiperList = data.swiperList
	        this.iconList = data.iconList
	        this.recommendList = data.recommendList
	        this.weekendList = data.weekendList
      	}
  	}
  }
}
</script>

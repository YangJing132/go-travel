<template>
	<div>
		<home-header></home-header>
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
import { mapState } from 'vuex'

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
    this.lastCity = this.city
  	this.getHomeInfo()
  },
  computed: {
    ...mapState(['city'])
  },
  methods:{
  	getHomeInfo (){
  		axios.get('/api/index.json?city='+this.city).then(this.getHomeInfoSucc)
  	},
  	getHomeInfoSucc (res){
  		// console.log(res);
  		res = res.data
      	if (res.ret && res.data) {
	        const data = res.data
	        // this.city = data.city
	        this.swiperList = data.swiperList
	        this.iconList = data.iconList
	        this.recommendList = data.recommendList
	        this.weekendList = data.weekendList
      	}
  	}
  },
  activated(){
    //keep-alive 新增的生命周期函数
    // 判断返回来的城市和上一次的城市是否一样，不一样的话再次请求一次
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

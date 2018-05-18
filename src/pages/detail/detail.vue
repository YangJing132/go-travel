<template>
	<div>
		<detail-banner 
		:sightName="sightName"
        :bannerImg="bannerImg"
        :gallaryImgs="gallaryImgs"
		></detail-banner>
		<detail-header ></detail-header>
		<div class="content">
			<detail-list :list='list'></detail-list>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
// name的作用：
//           1.递归组件的时候用到name
//			 2.对某个页面取消缓存的时候要用到
//		     3.调试的时候
export default {
	name:'Detail',
	components:{
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data (){
		return {
			list:[
				{
					title:'成人票',
					children:[
						{
						title:'成人1馆票',
						children:[
							{title:'成人1馆联票'},
							{title:'成人1馆分票'}
						]
						},
						{title:'成人2馆票'}
					]
				},
				{title:'学生票'},
				{title:'儿童票'},
				{title:'特惠票'}
			],
			sightName:"",
			bannerImg:'',
			gallaryImgs:[],
			list:[]
		}
	},
	mounted (){
		this.getDetailInfo()
	},
	methods:{
		getDetailInfo (){
			// axios.get('/api/detail.json?id='+this.$route.params.id).then(this.getHomeInfoSucc)
			axios.get('/api/detail.json',
				{
				params:{id:this.$route.params.id} 
				}).then(this.getDetailInfoSucc)
		},
		getDetailInfoSucc (res){
			res = res.data
			if (res.ret && res.data){
				const data = res.data
				// console.log(data)
				this.sightName = data.sightName
				this.bannerImg = data.bannerImg
				this.gallaryImgs = data.gallaryImgs
				this.list = data.categoryList
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.content
    height:50rem
</style>
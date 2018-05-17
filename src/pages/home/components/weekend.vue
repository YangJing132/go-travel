<template>
	<div>
		<div class="title">周末去哪</div>
		<ul>
			<li class="item border-bottom" v-for='item of list' :key='item.id'>
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'HomeWeekend',
		props:{
	      list: Array
	    },
		data (){
			return {
				lists:[
					{
						id:'001',
						imgurl:'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_600x330_b40971b4.jpg',
						title:'八达岭长城',
						desc:'八达岭长城'
					},
					{
						id:'002',
						imgurl:'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_600x330_b40971b4.jpg',
						title:'八达岭长城',
						desc:'八达岭长城'
					},
					{
						id:'003',
						imgurl:'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_600x330_5f4c76f7.jpg',
						title:'世界花卉大观园',
						desc:'世界花卉大观园'
					},
					{
						id:'004',
						imgurl:'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_600x330_5f4c76f7.jpg',
						title:'世界花卉大观园',
						desc:'世界花卉大观园'
					},
				]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
	    line-height: .8rem
	    background: #eee
	    text-indent: .2rem
	.item-img-wrapper
		overflow:hidden
		height:0
		padding-bottom:37%
		.item-img
			width:100%
	.item-info
		padding:.1rem
	
	.item-title
		line-height:.4rem
		font-size:.32rem
		color:#333
		ellipsis()
	.item-desc
		line-height:.4rem
		color:#aaa
		ellipsis()
</style>
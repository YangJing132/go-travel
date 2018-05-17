<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for='item of list' :key='item.id'>
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-btn">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'HomeRecommend',
		props:{
	      list: Array
	    },
		data (){
			return {
				lists:[
					{
						id:'001',
						imgurl:'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_200x200_5fddc1d8.jpg',
						title:'世界花卉大观园',
						desc:'世界花卉大观园'
					},
					{
						id:'002',
						imgurl:'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg',
						title:'北京欢乐谷',
						desc:'世界花卉大观园'
					},
					{
						id:'003',
						imgurl:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
						title:'故宫',
						desc:'世界花卉大观园'
					},
					{
						id:'004',
						imgurl:'http://img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_200x200_740720ff.jpg',
						title:'古北水镇',
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
	    margin-top: .2rem
	    line-height: .8rem
	    background: #eee
	    text-indent: .2rem
	.item
		display:flex
		height:1.9rem
		overflow:hidden
		.item-img
			width:1.7rem
			height:1.7rem
			padding:.1rem
		.item-info
			flex:1
			padding:.1rem
			min-width:0
		.item-title
			line-height:.4rem
			font-size:.32rem
			color:#333
			ellipsis()
		.item-desc
			line-height:.4rem
			color:#aaa
			ellipsis()
		.item-btn
			background:#ff9300
			padding:0 .1rem
			border-radius:.06rem
			margin-top:.16rem
			color:#fff
			line-height:.44rem

</style>
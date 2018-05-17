<template>
	<div class="header">城市选择
		<router-link to='/'>
			<div class='iconfont back-icon'>&#xe624;</div>
		</router-link>
	</div>
</template>

<script>
	export default{
	  name: 'CityHeader'
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
		overflow:hidden
		height:$headerHeight
		line-height:$headerHeight
		text-align:center
		color:#fff
		background:$bgColor
		font-size:.32rem
		position:relative
		.back-icon
			width:.64rem
			text-align:center
			font-size:.4rem
			position:absolute
			left:0
			top:0
			color:#fff

</style>
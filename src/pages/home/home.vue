<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<icons></icons>
	</div>
</template>
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import Icons from './components/icons'
export default{
  name: 'Home',
  components:{
	HomeHeader:HomeHeader,
	HomeSwiper:HomeSwiper,
	Icons:Icons
  }
}
</script>

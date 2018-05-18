<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" src="https://img1.qunarzz.com/p/tts5/1803/33/3a62745286ad1c02.jpg_r_640x420x90_8892a0f3.jpg">
			<div class="banner-info">
				<div class="banner-title">故宫博物院</div>
				<div class="banner-number">
					<span class='iconfont banner-icon'>&#xe650;</span>99
				</div>
			</div>
		</div>

	<common-gallary 
		:img='img'
		v-show="showGallary"
		@close="handleGallaryClose"
	></common-gallary>
	</div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
export default {
	name: 'DetailBanner',
	components:{CommonGallary},
	data (){
		return {
			img:[
		    	"https://img1.qunarzz.com/p/tts5/1803/33/3a62745286ad1c02.jpg_r_640x420x90_8892a0f3.jpg",
		    	"https://img1.qunarzz.com/p/tts5/1501/24/85f7e3a4c0deb6.jpg_r_640x420x90_355b2e11.jpg",
		    	"https://img1.qunarzz.com/p/tts9/1805/87/20b09accf4cdc02.jpg_r_640x420x90_a9287410.jpg"
		    ],
		    showGallary: false
		}
	},
	methods: {
    	handleBannerClick () {
      		this.showGallary = true
    	},
	    handleGallaryClose () {
	      this.showGallary = false
	    }
  },
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
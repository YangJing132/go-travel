<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for='item of swiperList' :key='item.id'>
        <img class="swiper-img" :src="item.imgurl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
      <!-- <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data () {
      return {
        swiperOption: {
          pagination:'.swiper-pagination',
          loop: true
        },
        swiperList:[
          {
            id:'001',
            imgurl:'https://img1.qunarzz.com/qs/1805/66/29a40eeb420e0302.jpg'
          },
          {
            id:'002',
            imgurl:'https://img1.qunarzz.com/qs/1805/79/895429b453f08002.jpg'
          },
          {
            id:'003',
            imgurl:'https://img1.qunarzz.com/qs/1805/95/f650b837b5246302.jpg'
          },
          {
            id:'004',
            imgurl:'https://img1.qunarzz.com/qs/1805/a9/f01d076cea2ee902.jpg'
          },
          {
            id:'005',
            imgurl:'https://img1.qunarzz.com/qs/1805/f6/ed3f589004da902.jpg'
          },
          {
            id:'006',
            imgurl:'https://img1.qunarzz.com/qs/1804/98/9f0b9ecfeea3cd02.jpg'
          }
        ]
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      showSwiper () {
        return this.swiperList.length
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false);
      // var this_=this;
      
      // setInterval(()=>{
      //   this_.swiper.slideTo(3, 1000, false)
      // },1000)
    }
  }
</script>
<!-- scoped 限制范围-->
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 25.6%
    background: #eee
    .swiper-img
      width: 100%
</style>
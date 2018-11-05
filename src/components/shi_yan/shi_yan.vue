<template>
	<swiper :options="swiperOption">
		<swiper-slide v-for="slide in swiperSlides" :key="slide">I'm Slide {{ slide }}</swiper-slide>
		<!--<div class="swiper-pagination" slot="pagination"></div>-->
	</swiper>
</template>

<script>
	export default {
		name: 'carrousel',
		data() {
			return {
				swiperOption: {
//					pagination: {
//						el: '.swiper-pagination'
//					},
//					autoplay: true,
					simulateTouch : true,
					freeMode:true,
				},
				swiperSlides: [1, 2, 3, 4, 5],
				
			}
		},
		mounted() {
//			setInterval(() => {
//				console.log('simulate async data')
//				if(this.swiperSlides.length < 10) {
//					this.swiperSlides.push(this.swiperSlides.length + 1)
//				}
//			}, 3000)
		}
	}
</script>
<style type="text/css" scoped>
	.swiper-container{
		height: 5rem;
	}
</style>
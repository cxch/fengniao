<template>
	<div class="ren_wu">
		<!--轮播图-->
		<div class="banner_box">
			<yd-slider autoplay="5000" pagination-color="rgba(255,255,255,0.4)">
				<yd-slider-item>
					<img src="http://static.ydcss.com/uploads/ydui/1.jpg">
				</yd-slider-item>
				<yd-slider-item>
					<img src="http://static.ydcss.com/uploads/ydui/2.jpg">
				</yd-slider-item>
				<yd-slider-item>
					<img src="http://static.ydcss.com/uploads/ydui/3.jpg">
				</yd-slider-item>
			</yd-slider>
		</div>
		<!--分类导航-->
		<div class="fen_lei clearfix">
			<swiper :options="swiperOption">
				<swiper-slide v-for="slide,index in nav" :key="index">
					<div class="fen_lei_item" v-for="item,index_in in slide" :key="index_in">
						<img :src="item.url" />
						<div>{{item.tit}}</div>
					</div>
				</swiper-slide>
				<!--<div class="swiper-pagination" slot="pagination"></div>-->
			</swiper>

		</div>
		<!--热门推荐-->
		<div class="re_men">
			<div class="title">
				~热门推荐~
			</div>
			<div class="content">
				<div class="ty_ying_yong_style01">
					<img src="https://gxybjs.oss-cn-qingdao.aliyuncs.com/html_img/cl/my-red02.png" />
					<div class="style01_con">
						<div class="tit">华夏银行手机银行</div>
						<div class="mid_box">
							<div class="subtit">华夏银行移动银行是为客户量身打造的移动金融服务平台金融服务平台金融服务平台</div>
							<div class="get_btn">获取</div>
						</div>
						<div class="btm_box">
							<div class="gong_yong_tips">
								<div class="tip_item">财务</div>
							</div>
							<div class="price">
								<span>返利金：￥</span><span style="font-size: 0.36rem;">12.0</span>
							</div>
						</div>
					</div>
				</div>
				<div class="ty_ying_yong_style01">
					<img src="https://gxybjs.oss-cn-qingdao.aliyuncs.com/html_img/cl/my-red02.png" />
					<div class="style01_con">
						<div class="tit">华夏银行手机银行</div>
						<div class="mid_box">
							<div class="subtit">华夏银行移动银行是为客户量身打造的移动金融服务平台金融服务平台金融服务平台</div>
							<div class="get_btn">获取</div>
						</div>
						<div class="btm_box">
							<div class="gong_yong_tips">
								<div class="tip_item">财务</div>
							</div>
							<div class="price">
								<span>返利金：￥</span><span style="font-size: 0.36rem;">12.0</span>
							</div>
						</div>
					</div>
				</div>
				<div class="see_more">
					<span>查看更多</span><img src="../../assets/common/double_arrow.png" />
				</div>
			</div>
		</div>
		<bottom-view show='true'></bottom-view>
	</div>
</template>

<script>
	export default {
		name: 'ren_wu',
		data() {
			return {
				nav: [{
					url: "https://gxybjs.oss-cn-qingdao.aliyuncs.com/html_img/cl/my-red02.png",
					tit: "金融类"
				}, {
					url: "https://gxybjs.oss-cn-qingdao.aliyuncs.com/html_img/cl/my-red02.png",
					tit: "金融类"
				}, {
					url: "https://gxybjs.oss-cn-qingdao.aliyuncs.com/html_img/cl/my-red02.png",
					tit: "金融类"
				}, {
					url: "https://gxybjs.oss-cn-qingdao.aliyuncs.com/html_img/cl/my-red02.png",
					tit: "金融类"
				}, {
					url: "https://gxybjs.oss-cn-qingdao.aliyuncs.com/html_img/cl/my-red02.png",
					tit: "金融类"
				}, {
					url: "https://gxybjs.oss-cn-qingdao.aliyuncs.com/html_img/cl/my-red02.png",
					tit: "金融类"
				}, {
					url: "https://gxybjs.oss-cn-qingdao.aliyuncs.com/html_img/cl/my-red02.png",
					tit: "金融类"
				}, {
					url: "https://gxybjs.oss-cn-qingdao.aliyuncs.com/html_img/cl/my-red02.png",
					tit: "金融类"
				}, {
					url: "https://gxybjs.oss-cn-qingdao.aliyuncs.com/html_img/cl/my-red02.png",
					tit: "金融类"
				}],
				swiperOption: {
					//					pagination: {
					//						el: '.swiper-pagination'
					//					},
					//					autoplay: true,
					simulateTouch: true,
					freeMode: false,
				},
			}
		},
		created: function(e) {
			this.nav = this.sliceArray(this.nav, 8);
			console.log(this.nav)
		},
		methods: {
			//分个数组函数
			sliceArray(array, size) {
				var result = [];
				for(var x = 0; x < Math.ceil(array.length / size); x++) {
					var start = x * size;
					var end = start + size;
					result.push(array.slice(start, end));
				}
				return result;
			},
		},
		mounted: function(e) {

		}
	}
</script>
<style type="text/css">
	.ren_wu .banner_box .yd-slider {
		height: 3.2rem;
	}
	
	.ren_wu .yd-slider-pagination-item-active {
		background: #FFFFFF;
		width: 6px;
		height: 6px;
		background: #FFFFFF!important;
	}
</style>
<style scoped>
	@import url("../../../static/zxy.css");
	.ren_wu .banner_box .yd-slider img {
		width: 100%;
		height: 100%;
	}
	
	.ren_wu .fen_lei {
		padding-top: 0.4rem;
		background: #FFFFFF;
		margin-bottom: 0.2rem;
	}
	
	.ren_wu .fen_lei img {
		width: 0.9rem;
		height: 0.9rem;
		border-radius: 50%;
	}
	
	.ren_wu .fen_lei_item {
		float: left;
		margin: 0 0.487rem;
		margin-bottom: 0.3rem;
	}
	/*热门推荐*/
	
	.ren_wu .re_men {
		background: #FFFFFF;
		padding: 0 0.3rem;
	}
	
	.ren_wu .re_men .title {
		width: 100%;
		height: 0.98rem;
		border-bottom: 1px solid #F0F0F0;
		font-size: 0.36rem;
		font-weight: 500;
		color: #323232;
		text-align: center;
		line-height: 0.98rem;
	}
</style>
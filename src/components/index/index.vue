<template>
	<div class="index" v-cloak>
		<!-- 搜索栏 开始 -->
		<div class="search_box">
			<div class="choose_area">
				<!--<yd-cell-group>
					<yd-cell-item arrow>
						<input slot="right" type="text" @click.stop="show1 = true" v-model="model1" readonly placeholder="请选择收货地址">
					</yd-cell-item>
				</yd-cell-group>

				<yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>-->
				<span>{{model1}}<yd-cell-group>
            <yd-cell-item arrow>
                <input slot="right" type="text" @click.stop="show1 = true" v-model="model1" readonly>
            </yd-cell-item>
        </yd-cell-group>

        <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect></span><img src="../../assets/index/arrow_down.png" />
			</div>
			<div class="search">
				<img src="../../assets/index/serach.png" /><span>请搜索查找关键字</span>
			</div>
		</div>
		<!-- 搜索栏 结束 -->
		<!--轮播图开始-->
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
		<!--轮播图结束-->
		<!--分类开始-->
		<div class="class_nav">
			<div class="class_nav_item">
				<img src="../../assets/index/class01.png" />
				<div>精选任务</div>
			</div>
			<div class="class_nav_item">
				<img src="../../assets/index/class02.png" />
				<div>应用推广</div>
			</div>
			<div class="class_nav_item">
				<img src="../../assets/index/class03.png" />
				<div>公众号推广</div>
			</div>
			<div class="class_nav_item">
				<img src="../../assets/index/class04.png" />
				<div>视频推广</div>
			</div>
		</div>
		<!--分类结束-->
		<!--热门推荐 开始-->
		<div class="hot_box clearfix">
			<div class="hot_tit">~热门推荐~</div>
			<div class="hot_nav">
				<div class="hot_nav_item" @click="change_nav(4)">
					<img src="../../assets/index/nav_icon02.png" v-show="cur_nav!=4" />
					<img src="../../assets/index/nav_icon01.png" v-show="cur_nav==4" />
					<span :class="{active:cur_nav==4}">推荐任务</span>
				</div>
				<div class="hot_nav_item" @click="change_nav(1)">
					<img src="../../assets/index/nav_icon04.png" v-show="cur_nav!=1" />
					<img src="../../assets/index/nav_icon03.png" v-show="cur_nav==1" />
					<span :class="{active:cur_nav==1}">推荐应用</span>
				</div>
				<div class="hot_nav_item" @click="change_nav(2)">
					<img src="../../assets/index/nav_icon06.png" v-show="cur_nav!=2" />
					<img src="../../assets/index/nav_icon05.png" v-show="cur_nav==2" />
					<span :class="{active:cur_nav==2}">推荐公众号</span>
				</div>
				<div class="hot_nav_item" @click="change_nav(3)">
					<img src="../../assets/index/nav_icon08.png" v-show="cur_nav!=3" />
					<img src="../../assets/index/nav_icon07.png" v-show="cur_nav==3" />
					<span :class="{active:cur_nav==3}">推荐视频</span>
				</div>
			</div>
			<div class="hot_con">
				<!--推荐/应用/公众号的样式-->
				<div style="padding: 0 0.3rem;" v-if="cur_nav==1||cur_nav==2||cur_nav==4">
					<div class="ty_ying_yong_style01" v-for="(item,index) in list">
						<img :src="item.img" />
						<div class="style01_con">
							<div class="tit">{{item.title}}</div>
							<div class="mid_box">
								<div class="subtit">{{item.sub_details}}</div>
								<div class="get_btn">获取</div>
							</div>
							<div class="btm_box">
								<div class="gong_yong_tips">
									<div class="tip_item" v-for="(item1,index1) in item.label">{{item1.name}}</div>
								</div>
								<div class="price">
									<span>返利金：￥</span><span style="font-size: 0.36rem;">{{item.fy_price}}</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!--视频-->
				<div v-if="cur_nav==3">
					<div class="ty_shi_pin_style01" v-for="(item,index) in list">
						<div class="pic">
							<img src="https://gxybjs.oss-cn-qingdao.aliyuncs.com/html_img/cl/my-red02.png" />
						</div>
						<div class="txt">
							<div class="txt_p1">{{item.title}}</div>
							<div class="txt_p2 slh_one">{{item.sub_details}}</div>
							<div class="txt_p3">
								<div class="gong_yong_tips">
									<div class="tip_item">财务</div>
									<div class="tip_item">单独</div>
								</div>
								<div class="money">
									<span>返利金：￥</span>
									<span style="font-size: 0.36rem;">1.0</span>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
		<!--热门推荐 结束-->
		<bottom-view show='true'></bottom-view>
	</div>
</template>

<script>
	import District from 'ydui-district/dist/jd_province_city_area_id';
	export default {
		name: 'index',
		data() {
			return {
				cur_nav: '4',
				//省市企业插件数据
				show1: false,
				model1: '全国',
				district: District,
				list: [], //商品列表
			}
		},
		created: function(e) {
			var that = this;
			console.log(this.common.ajax_url);
			this.get_list();
		},
		methods: {
			//点击热门推荐导航
			change_nav(_index) {
				this.cur_nav = _index;
				this.get_list();
			},
			//省市区
			result1(ret) {
				this.model1 = ret.itemName1;
			},

			//获取商品列表
			get_list() {
				var that = this;
				$.ajax({
					type: "post",
					url: this.common.ajax_url + "/index.php/Api/Goods/index",
					data: {
						sheng: "山东省",
						shi: "青岛市",
						qu: "黄岛区",
						type: that.cur_nav,
					},
					xhrFields: {
						withCredentials: true
					},
					//			dataType: "jsonp",
					//			contentType: "application/x-www-form-urlencoded",
					success: function(res) {
						console.log(res)
						that.list=res.data;
						

					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {
						//		       alert(XMLHttpRequest.status);
						//		       alert(XMLHttpRequest.readyState);
						//		       alert(textStatus);
					},
				});
			}

		},
		mounted: function(e) {
			//调用腾讯的定位功能
			var that = this;
			var geolocation = new qq.maps.Geolocation("OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77", "myapp");
			var options = {
				timeout: 8000
			};
			function showPosition(position) {
				//				alert('定位成功');
				console.log(position)
					//position即为获取的定位信息的对象
			};
			function showErr() {
				alert('定位失败');
			};
			//获取位置信息
			geolocation.getLocation(showPosition, showErr, options);
		}
	}
</script>

<style>
	/*重置小圆点样式*/
	
	.index .yd-slider-pagination-item-active {
		background: #FFFFFF;
		width: 6px;
		height: 6px;
		background: #FFFFFF!important;
	}
	/*省市区插件样式*/
	
	.yd-cell,
	.yd-cell-right,
	.yd-cell-right input[type=text],
	.yd-cell-item,
	.yd-cell-box {
		height: 100%;
		width: 100%;
		min-height: 0;
		margin: 0;
		padding: 0;
		background: #2873EE;
		font-size: 0.28rem;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		text-align: center;
		opacity: 0;
	}
	
	.yd-cell-arrow:after {
		display: none;
	}
	
	.yd-cell-box {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>

<style scoped>
	@import url("../../../static/zxy.css");
	.yd-slider {
		height: 3.2rem!important;
	}
	
	.yd-slider img {
		width: 100%;
		height: 100%;
	}
	
	.search_box {
		width: 100%;
		height: 0.88rem;
		background: #2873EE;
		display: flex;
		align-items: center;
		padding: 0.3rem;
		display: flex;
		justify-content: space-between;
		align-content: center;
	}
	
	.choose_area {
		font-size: 0.28rem;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		display: flex;
		align-items: center;
	}
	
	.choose_area span {
		width: 0.84rem;
		display: inline-block;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		position: relative;
		text-align: center;
	}
	
	.choose_area img {
		width: 0.2rem;
		height: 0.11rem;
		margin-left: 0.1rem;
		margin-top: 0.1rem;
	}
	
	.search {
		width: 5.5rem;
		height: 0.6rem;
		border-radius: 0.3rem;
		background: #538FF1;
		font-size: 0.28rem;
		font-weight: 400;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.search img {
		width: 0.28rem;
		height: 0.3rem;
		margin-right: 0.16rem;
	}
	/*分类开始*/
	
	.class_nav {
		padding: 0.32rem 0;
		display: flex;
		justify-content: center;
		text-align: center;
		font-size: 0.24rem;
		font-weight: 500;
		color: #323232;
		background: #FFFFFF;
		margin-bottom: 0.2rem;
	}
	
	.class_nav_item {
		width: 1.71rem;
		margin-right: 0.06rem;
	}
	
	.class_nav_item:last-child {
		margin-right: 0
	}
	
	.class_nav_item img {
		width: 1.71rem;
		height: 1.11rem;
	}
	/*热门推荐 开始*/
	
	.hot_box {
		background: #FFFFFF;
		padding-bottom: 0.3rem;
	}
	
	.hot_tit {
		height: 1rem;
		width: 100%;
		line-height: 1rem;
		font-size: 0.36rem;
		font-weight: 500;
		color: #323232;
		text-align: center;
	}
	
	.hot_nav {
		background: #FAFAFA;
		display: flex;
		height: 0.9rem;
		background: #F0F0F0;
		box-shadow: 0px -1px 7px 0px rgba(240, 240, 240, 1);
	}
	
	.hot_nav_item {
		width: 25%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.28rem;
		font-weight: 500;
		color: #323232;
	}
	
	.hot_nav_item img {
		width: 0.3rem;
		height: 0.3rem;
		margin-right: 0.04rem;
	}
	
	.hot_nav_item span.active {
		color: #2873EE;
		font-weight: bold;
	}
	
	.hot_con {}
	/*热门推荐 结束*/
</style>
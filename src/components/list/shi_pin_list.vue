<template>
	<div class="rw_list" v-cloak>
		<!--头部-->
		<head-view title="视频列表" border="false" v-cloak></head-view>
		<div class="nav_content">
			<div class="nav_packet">
				<div class="nav_item" :class="{active:cur_nav == item.id}" v-for="(item,index) in nav" @click="choose_nav(item.id)">{{item.name}}</div>
			</div>
		</div>
		<div class="section">
			<div class="ty_shi_pin_style02">
				<div class="item_lt">
					<img src="https://gxybjs.oss-cn-qingdao.aliyuncs.com/html_img/cl/my-red02.png" />
				</div>
				<div class="item_rt">
					<div class="tit">视频</div>
					<div class="subtit slh_one">的撒大撒旦士大夫首发式发生生巅峰的方式发送的说法是大</div>
					<div class="money">
						<div class="gong_yong_tips">
							<div class="tip_item">财务</div>
						</div>
						<div>
							<span>返利金：￥</span><span style="font-size: 0.36rem;">1.0</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'rw_list',
		data() {
			return {
				nav: [{
					name: "啊啊",
					id: "01"
				}, {
					name: "哈哈哈哈",
					id: "03"
				}, {
					name: "嘿嘿嘿嘿嘿嘿嘿",
					id: "07"
				}, {
					name: "信用卡",
					id: "08"
				}, {
					name: "吼吼吼吼",
					id: "20"
				}, {
					name: "吼吼吼吼",
					id: "15"
				}],
				cur_nav: "01"
			}
		},
		created: function(e) {

		},
		methods: {
			//点击导航
			choose_nav(id) {
				this.cur_nav = id;
			},
		},
		mounted: function(e) {

		}
	}
</script>

<style scoped>
	@import url("../../../static/zxy.css");
	.nav_content {
		height: 0.88rem;
		background: #FFFFFF;
		padding: 0 0.3rem;
		width: 100%;
		overflow-x: scroll;
		/*子元素的宽度大于父元素的即可滚动*/
		overflow-y: hidden;
		margin-bottom: 0.1rem;
	}
	
	.nav_packet {
		display: flex;
		float: left;
		height: 0.88rem;
	}
	
	.nav_item {
		/*min-width: 1rem;*/
		font-size: 0.32rem;
		/*float: left;*/
		margin-right: 0.3rem;
		display: inline-block;
		white-space: nowrap;
		line-height: 0.88rem;
	}
	
	.nav_item.active {
		font-weight: bold;
		color: #2873EE;
		border-bottom: 2px solid #2873EE;
	}
	
	.section {
		padding: 0 0.3rem;
		background: #FFFFFF;
	}
</style>
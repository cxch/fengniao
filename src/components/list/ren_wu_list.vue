<template>
	<div class="rw_list" v-cloak>
		<!--头部-->
		<head-view title="任务列表" border="false" v-cloak></head-view>
		<div class="nav_content">
			<div class="nav_packet">
				<div class="nav_item" :class="{active:cur_nav == item.id}" v-for="(item,index) in nav" @click="choose_nav(item.id)">{{item.name}}</div>
			</div>
		</div>
		<div class="section">
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
	.section{
		padding: 0 0.3rem;
		background: #FFFFFF;
	}
</style>
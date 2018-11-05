<template>
	<div class="qianbao_mingxi" v-cloak>
		<!--头部-->
		<head-view title="余额明细" border="false"></head-view>
		<!--明细-->

		<yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
			<div class="wrap" slot="list">
				<div class="main clearfix" v-for="item in list">
					<div class="main_left fl">
						<p class="title">{{item.title}}</p>
						<p class="time">{{item.time}}</p>
					</div>
					<div class="main_right fr" :class="Number(item.money)>0?'orange':'black'">
						{{item.money}}
					</div>
				</div>
				
			</div>
			<!-- 数据全部加载完毕显示 -->
			<span slot="doneTip">没有数据啦~~</span>

			<!-- 加载中提示，不指定，将显示默认加载中图标 -->
			<img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg" />
		</yd-infinitescroll>

	</div>
</template>

<script>
	export default {
		name: 'qianbao_mingxi',
		data() {
			return {
				list:[{
					"title":"微信充值",
					"time":"2018-05-18 10:24",
					"money":"+100.0"
				},{
					"title":"微信提现",
					"time":"2018-05-18 10:24",
					"money":"-100.0"
				},{
					"title":"获得返利金",
					"time":"2018-05-18 10:24",
					"money":"0"
				}],
				
			}
		},
		created: function(e) {

		},
		methods: {

		},
		mounted: function(e) {

		}
	}
</script>

<style>
	.qianbao_mingxi .wrap {
		margin-top: 0.2rem;
		background: #fff;
	}
	.qianbao_mingxi .wrap .main{
		height: 1.5rem;
		border-bottom: 1px solid #E1E1E1;
		padding: 0 0.22rem 0 0.25rem;
	}
	.qianbao_mingxi .wrap .main:last-child{
		border-bottom:none;
	}
	.qianbao_mingxi .wrap .main .main_left{
		padding-top: 0.26rem;
	}
	.qianbao_mingxi .wrap .main .main_left .title{
		font-size: 0.32rem;
		color: #343434;
	}
	.qianbao_mingxi .wrap .main .main_left .time{
		margin-top: 0.2rem;
		font-size: 0.26rem;
		color: #A5A5A5;
		letter-spacing: 1px;
		font-weight: 400;
	}
	.qianbao_mingxi .wrap .main .main_right{
		line-height: 1.5rem;
		font-weight:bold;
		font-size: 0.36rem;
		letter-spacing: 1px;
	}
	.qianbao_mingxi .wrap .main .orange{
		color: #FF6600;
	}
	.qianbao_mingxi .wrap .main .black{
		color: #343434;
	}
</style>
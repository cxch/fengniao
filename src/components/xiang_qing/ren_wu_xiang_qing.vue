<template>
	<div class="renwu_xq" v-cloak>
		<!--头部-->
		<head-view title="任务详情" border="false" v-cloak></head-view>
		<!--软件介绍  开始-->
		<div class="jie_shao">
			<div style="padding: 0 0.3rem;">
				<div class="detial">
					<div class="des_box">
						<img class="pic" src="https://gxybjs.oss-cn-qingdao.aliyuncs.com/html_img/cl/my-red02.png" />
						<div class="txt_box">
							<div class="tit">华夏银行手机银行</div>
							<div class="company">华夏银行股份有限公司</div>
							<div class="gong_yong_tips">
								<div class="tip_item">拉拉</div>
							</div>
							<div class="price_box">
								<div class="price">
									<span>返利金：￥</span><span style="font-size: 0.4rem;">12.0</span>
								</div>
								<div class="get">获取</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="img_box" >	
				<div style="display: flex;padding: 0 0.3rem;">
					<img :src="item" v-for="(item,index) in imgs" @click="click_img" />
				</div>
										
			</div>
		</div>
		<!--软件介绍  结束-->
		<!--任务介绍-->
		<div class="wrap">
			<div class="ren_wu">
				<div class="tit">任务介绍</div>
				<div class="con" :class="shou?'active':''">
					<div class="con_style1">
						<div class="key">注意事项:</div>
						<div class="value">无需报名，请直接按照操作流程完成相应任务即可获得返利金！！！</div>
					</div>
					<div class="con_style1">
						<div class="key">完成条件:</div>
						<div class="value">无需报名，请直接按照操作流程完成相应任务即可获得返利金！！！</div>
					</div>
					<div class="con_style2">
						<div class="key">操作流程:</div>
						<div class="value">无需报名，请直接按照操作流程完成相应任务即可获得返利金！！！</div>
					</div>
				</div>
				<div class="shou_qi" @click="shou_qi">
					<span>收起</span><img src="../../assets/common/arrrow_up.png" alt="" />
				</div>
			</div>
		</div>
		<!--任务介绍 结束-->
		<!--软件简介-->
		<div class="wrap">
			<div class="jian_jie">
				<div class="rjjj">
					<div class="tit">软件简介</div>
					<div class="con">
						华夏银行移动银行是为客户量身打造的移动金融服务平台，为您提供查、缴、汇、存、投资等一应俱全的金融服务。
					</div>
				</div>
				<div class="rjxx">
					<div class="tit">软件简介</div>
					<div class="con">
						<div class="con_item">
							<span>上传时间</span><span style="color: #323232;">2018-08-15</span>
						</div>
						<div class="con_item">
							<span>开发公司</span><span style="color: #323232;">华夏银行股份有限公司</span>
						</div>
						<div class="con_item1">
							<div>备注：</div>
							<div>华夏银行移动银行是为客户量身打造的移动金融服务平台，</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--软件简介 结束-->
		<!--用户评价-->
		<div class="wrap">
			<div class="ping_jia">
				<div class="tit" style="padding-bottom: 0;">用户评价(32)</div>
				<div class="con">
					<div class="con_item">
						<div class="line1" style="font-size: 0.28rem;">非常好，里面收费的知识质量都棒棒的！</div>
						<div class="line2">
							<img src=""/>
							<img src=""/>
							<img src=""/>
							<img src=""/>
						</div>
						<div class="line3">
							<img src="../../assets/common/star1.png"/>
							<img src="../../assets/common/star1.png"/>
							<img src="../../assets/common/star1.png"/>
							<img src="../../assets/common/star1.png"/>
							<img src="../../assets/common/star2.png"/>
						</div>
						<div class="line4">
							<div>用户名</div>
							<div>2018-08-15</div>
						</div>
					</div>
					<div class="con_item">
						<div class="line1" style="font-size: 0.28rem;">非常好，里面收费的知识质量都棒棒的！</div>
						<div class="line2">
							<img src=""/>
							<img src=""/>
							<img src=""/>
							<img src=""/>
						</div>
						<div class="line3">
							<img src="../../assets/common/star1.png"/>
							<img src="../../assets/common/star1.png"/>
							<img src="../../assets/common/star1.png"/>
							<img src="../../assets/common/star1.png"/>
							<img src="../../assets/common/star2.png"/>
						</div>
						<div class="line4">
							<div>用户名</div>
							<div>2018-08-15</div>
						</div>
					</div>
				</div>
				<div class="see_all">
					<div>查看全部</div>
				</div>
			</div>
		</div>
		<!--用户评价 结束-->
		<!--猜你喜欢-->
		<div class="wrap">
			<div class="xi_huan">
				<div class="tit">猜你喜欢</div>
				<div class="con clearfix">
					<div class="con-item">
						<img src=""/>
						<div class="slh_one">水水s顶顶顶顶顶顶水水水</div>
					</div>
					<div class="con-item">
						<img src=""/>
						<div class="slh_one">水水s顶顶顶顶顶顶水水水</div>
					</div>
					<div class="con-item">
						<img src=""/>
						<div class="slh_one">水水s顶顶顶顶顶顶水水水</div>
					</div>
					<div class="con-item">
						<img src=""/>
						<div class="slh_one">水水s顶顶顶顶顶顶水水水</div>
					</div>
					<div class="con-item">
						<img src=""/>
						<div class="slh_one">水水s顶顶顶顶顶顶水水水</div>
					</div>
				</div>
			</div>
		</div>
		<!--猜你喜欢 结束-->
		<!--占地方-->
		<div style="height: 0.98rem;"></div>
		<!--底部栏-->
		<div class="di_bu">
			<a style="width: 64%;" class="lian_xi" href="tel:400-110-9808">
				<img src="../../assets/common/lian_xi.png" style="width: 0.4rem;height: 0.4rem;margin-right: 0.2rem;"/>
				<span>联系客服</span>
			</a>
			<div style="width: 36%;" class="shou_cang">
				<div class="sc_item" v-if="shou_cang" @click="shou_cang_fun">
					<img src="../../assets/common/shou_cang1.png" />
					<div style="color: #2873EE;">收藏</div>
				</div>
				<div class="sc_item" v-if="!shou_cang" @click="shou_cang_fun">
					<img src="../../assets/common/shou_cang2.png" />
					<div>收藏</div>
				</div>
				<div class="sc_item">
					<img src="../../assets/common/feng_xiang.png"/>
					<div>分享</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'renwu_xq',
		data() {
			return {
				swiperOption: {
					slidesPerView: "auto",
					spaceBetween: 0,
					freeMode: true,
				},
				imgs: ["", "", ""],
				shou: false,
				shou_cang:false,
				widthData:30
			}
		},
		created: function(e) {
			this.widthData=4.6*this.imgs.lenght+0.6;
			console.log(this.imgs.lenght)
		},
		methods: {
			click_img() {
				alert("aaa")
			},
			//点击收起
			shou_qi() {
				this.shou = !this.shou
			},
			//点击收藏
			shou_cang_fun(){
				this.shou_cang=!this.shou_cang;
			}
		},
		mounted: function(e) {

		}
	}
</script>

<style scoped>
	/*软件介绍 开始*/
	.wrap {
		background: #FFFFFF;
		margin-bottom: 0.2rem;
		padding: 0 0.3rem;
	}
	
	.jie_shao {
		background: #FFFFFF;
		margin-bottom: 0.2rem;
	}
	
	.jie_shao .detial {
		padding: 0.4rem 0;
		height: 2.8rem;
		border-bottom: 1px solid #E6E6E6;
		position: relative;
	}
	
	.jie_shao .detial .pic {
		position: absolute;
		width: 2rem;
		height: 2rem;
	}
	
	.jie_shao .detial .txt_box {
		width: 100%;
		padding-left: 2.3rem;
	}
	
	.gong_yong_tips {
		display: flex;
	}
	
	.gong_yong_tips .tip_item {
		height: 0.35rem;
		line-height: 0.35rem;
		border: 1px solid rgba(40, 115, 238, 1);
		border-radius: 3px;
		font-size: 0.2rem;
		font-weight: bold;
		color: rgba(40, 115, 238, 1);
		text-align: center;
		margin-right: 0.1rem;
		padding: 0 0.06rem;
	}
	
	.jie_shao .tit {
		font-size: 0.40rem;
		font-weight: bold;
	}
	
	.jie_shao .company {
		color: #646464;
		font-size: 0.28rem;
		padding: 0.06rem 0 0.2rem;
	}
	
	.jie_shao .price_box {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.jie_shao .price {
		font-size: 0.24rem;
		font-weight: bold;
		color: #FF6600;
	}
	
	.jie_shao .get {
		width: 1.4rem;
		height: 0.6rem;
		background: #2873EE;
		line-height: 0.6rem;
		font-size: 0.32rem;
		font-weight: bold;
		color: #FFFFFF;
		text-align: center;
		border-radius: 0.3rem;
	}
	.jie_shao .img_box{
		overflow: hidden;
		overflow-x: scroll;
		padding: 0.3rem;
		height: 8.4rem;
	}
	.jie_shao .img_box img {
		width: 4.4rem;
		height: 7.8rem;
		border-radius: 0.1rem;
		margin-right: 0.2rem;
		float: left;
	}
	
	.jie_shao .swiper-container {
		padding: 0.3rem;
	}
	/*软件介绍 结束*/
	/*任务介绍*/
	.wrap .tit {
		font-size: 0.36rem;
		font-weight: bold;
		color: #323232;
		padding: 0.25rem 0;
	}
	
	.ren_wu .con {
		transition: all 0.5s;
	}
	
	.ren_wu .con.active {
		height: 3rem;
		overflow: hidden;
	}
	
	.ren_wu .con_style1 {
		display: flex;
		font-size: 0.28rem;
		font-weight: 400;
		color: #646464;
		line-height: 0.48rem;
		border-bottom: 1px solid #E6E6E6;
		padding: 0.26rem 0;
	}
	
	.ren_wu .con_style1 .key {
		width: 20%;
		font-weight: bold;
		color: #646464;
	}
	
	.ren_wu .con_style1 .value {
		width: 80%;
	}
	
	.ren_wu .con_style2 {
		font-size: 0.28rem;
		font-weight: 400;
		color: #646464;
		line-height: 0.48rem;
		border-bottom: 1px solid #E6E6E6;
		padding: 0.26rem 0;
	}
	
	.ren_wu .con_style2 .key {
		font-weight: bold;
		color: #646464;
	}
	
	.ren_wu .con_style2 .value img {
		width: 100%;
		height: auto;
	}
	
	.ren_wu .shou_qi {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.24rem;
		font-weight: 500;
		color: #2873EE;
		height: 0.64rem;
		line-height: 0.64rem;
	}
	
	.ren_wu .shou_qi img {
		width: 0.24rem;
		height: 0.24rem;
		margin-left: 0.1rem;
	}
	/*任务介绍 结束*/
	/*软件简介*/
	.jian_jie .tit {
		font-size: 0.36rem;
		font-weight: bold;
		color: #323232;
		padding: 0.3rem 0 0.15rem;
	}
	
	.jian_jie .con {
		font-size: 0.28rem;
		font-weight: 500;
		color: #646464;
		line-height: 0.48rem;
	}
	
	.rjjj {
		padding-bottom: 0.35rem;
		border-bottom: 1px solid #E6E6E6;
	}
	
	.rjxx .tit {
		padding-top: 0.2rem;
	}
	
	.jian_jie .con_item {
		padding: 0.3rem 0 0.16rem;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #F3F3F3;
	}
	
	.jian_jie .con_item1 {
		padding: 0.3rem 0 0.3rem;
	}
	/*软件简介 结束*/
	/*用户评价*/
		.ping_jia{
			
		}
		.ping_jia .con_item{
			padding: 0.4rem 0 0.18rem;
			border: 1px solid #F3F3F3;
		}
		.ping_jia .con_item .line2{
			padding: 0.24rem 0;
			display: flex;
			justify-content: space-between;
		}
		.ping_jia .con_item .line2 img{
			width: 1.48rem;
			height: 1.48rem;
		}
		.ping_jia .con_item .line3 img{
			width: 0.24rem;
			height: 0.24rem;
			margin-right: 0.02rem;
		}
		.ping_jia .con_item .line4{
			display: flex;
			justify-content: space-between;
			color: #646464;
			padding-top: 0.24rem;
		}
		.ping_jia .see_all{
			height: 1.18rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.ping_jia .see_all>div{
			width: 2.4rem;
			height: 0.6rem;
			border-radius: 0.3rem;
			border: 1px solid #CCCCCC;
			font-weight: bold;
			line-height: 0.6rem;
			text-align: center;
			color: #646464;
		}
	/*用户评价 结束*/
	/*猜你喜欢*/
	.xi_huan .con-item{
		color: #646464;
		text-align: center;
		margin-right:0.16rem ;
		width: 1.6rem;
		float: left;
		padding-bottom: 0.3rem;
	}
	.xi_huan .con-item:nth-child(4n){
		margin-right:0 ;
	}
	.xi_huan .con-item img{
		width: 1.6rem;
		height: 1.6rem;
		display: inline-block;
		padding-bottom: 0.2rem;
	}
	/*猜你喜欢 结束*/
	/*底部栏*/
	.di_bu{
		width: 100%;
		height: 0.98rem;
		display: flex;
		position: fixed;
		bottom: 0;
	}
	.lian_xi{
		background:#2873EE ;
		justify-content: center;
		font-size:0.32rem;
		font-weight:bold;
		color:#FFFFFF;
		display: block;
		display: flex;
		align-items: center;
	}
	.shou_cang{
		background: #FFFFFF;
		justify-content: space-around;
		padding-right: 0.3rem;
		color: #646464;
		text-align: center;
		display: flex;
		align-items: center;
	}
	.shou_cang img{
		width: 0.36rem;
		height: 0.36rem;
	}
</style>
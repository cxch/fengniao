<template>
	<div class="renwu_xq" v-cloak>
		<!--头部-->
		<head-view title="任务详情" border="false" v-cloak></head-view>
		<!--软件介绍  开始-->
		<div class="jie_shao">
			<div style="padding: 0 0.3rem;">
				<div class="detial">
					<div class="des_box">
						<img class="pic" :src="list.img" />
						<div class="txt_box">
							<div class="tit">{{list.title}}</div>
							<div class="company">{{list.kf_company}}</div>
							<div class="gong_yong_tips">
								<div class="tip_item" v-for="item in list.label">{{item.name}}</div>
							</div>
							<div class="price_box">
								<div class="price">
									<span>返利金：￥</span><span style="font-size: 0.4rem;">{{list. fy_price}}</span>
								</div>
								<div class="get" @click='get'>获取</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="img_box" >	
				<div class="img_packet">
					<img :src="item.url" v-for="(item,index) in imgs" @click="click_img" />
				</div>										
			</div>
		</div>
		<!--软件介绍  结束-------------------------------------------------------------------->
		
		<!--视频详情-->
			<div class="shi_pin" v-if="list.e_level==3">
				<div class="video" >
					<video :src="list.file" autoplay>
						<source src="list.file" type="video/mp4"></source>
						<source src="list.file" type="video/ogg"></source>
						<source src="list.file" type="video/webm"></source>
						<object width="" height="" type="application/x-shockwave-flash" data="myvideo.swf">
							<param name="movie" value="myvideo.swf" />
							<param name="flashvars" value="autostart=true&amp;file=myvideo.swf" />
						</object>
						当前浏览器不支持 video直接播放，点击这里下载视频： <a href="list.file">下载视频</a>
					</video>
				</div>
				<div class="sp_des">
					<div class="sp_des_row1">
						<div class="tit">{{list.title}}</div>
						<div class="gong_yong_tips">
							<div class="tip_item" v-for="item,index in list.label">{{item.name}}</div>
						</div>
					</div>
					<div class="sp_des_row2">{{list.kf_company}}</div>
					<div class="sp_des_row3"><span>返利金：￥</span><span style="font-size: 0.48rem;">{{list. fy_price}}</span></div>
				</div>
			</div>
		<!--视频详情 结束-->
		
		<!--任务介绍-->
		<div class="wrap">
			<div class="ren_wu">
				<div class="tit">任务介绍</div>
				<div class="con" :class="shou?'active':''">
					<div class="con_style1">
						<div class="key">注意事项:</div>
						<div class="value">{{list.zysx?list.zysx:'无注意事项'}}</div>
					</div>
					<div class="con_style1">
						<div class="key">完成条件:</div>
						<div class="value">{{list.wcti?list.wcti:'任意条件'}}</div>
					</div>
					<div class="con_style2">
						<div class="key">操作流程:</div>
						<div class="value">{{list.details}}</div>
					</div>
				</div>
				<div class="shou_qi" v-if="!shou" @click="shou_qi">
					<span>收起</span><img src="../../assets/common/arrrow_up.png" alt="" />
				</div>
				<div class="shou_qi zhan" v-else @click="shou_qi">
					<span>展开</span><img src="../../assets/common/arrrow_up.png" alt="" />
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
						{{list.sub_details}}
					</div>
				</div>
				<div class="rjxx">
					<div class="tit">软件简介</div>
					<div class="con">
						<div class="con_item">
							<span>上传时间</span><span style="color: #323232;">{{list.create_time}}</span>
						</div>
						<div class="con_item">
							<span>开发公司</span><span style="color: #323232;">{{list.kf_company}}</span>
						</div>
						<div class="con_item1">
							<div>备注：</div>
							<div>{{list.contents}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--软件简介 结束-->
		<!--用户评价-->
		<div class="wrap">
			<div class="ping_jia">
				<div class="tit" style="padding-bottom: 0;">用户评价({{list.comment?list.comment.length:0}})</div>
				<div class="con">
					<div class="con_item" v-for="item,index in list.comment" v-if="index<3">
						<div class="line1" style="font-size: 0.28rem;">{{item.content}}</div>
						<div class="line2">
							<img :src="item2" v-for="item2 in item.img"/>
						</div>
						<div class="line3">
							<img :src="item.xingji>0?require('../../assets/common/star1.png'):require('../../assets/common/star2.png')"/>
							<img :src="item.xingji>1?require('../../assets/common/star1.png'):require('../../assets/common/star2.png')"/>
							<img :src="item.xingji>2?require('../../assets/common/star1.png'):require('../../assets/common/star2.png')"/>
							<img :src="item.xingji>3?require('../../assets/common/star1.png'):require('../../assets/common/star2.png')"/>
							<img :src="item.xingji>4?require('../../assets/common/star1.png'):require('../../assets/common/star2.png')"/>
						</div>
						<div class="line4">
							<div>{{item.nick_name}}</div>
							<div>{{item.create_time}}</div>
						</div>
					</div>
				</div>
				<div class="see_all" @click="pinglun">
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
					<div class="con-item" v-for="item in goods_like" @click="like_router(item.id)">
						<img :src="item.img"/>
						<div class="slh_one">{{item.title}}</div>
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
				id:"",
				swiperOption: {
					slidesPerView: "auto",
					spaceBetween: 0,
					freeMode: true,
				},
				imgs: ["", "", ""],
				shou: true,
				shou_cang:false,
				widthData:30,
				list:[],
				//猜你喜欢
				goods_like:[],
			}
		},
		created: function(e) {
			var that = this;
			this.widthData=4.6*this.imgs.lenght+0.6;
			this.id = this.$route.query.id;
			//详情
			$.ajax({
				type:"post",
				url:this.common.ajax_url+"/index.php/Api/Goods/details",
				async:true,
				xhrFields: {
					withCredentials: true
				},
				data:{
					id:'146'
				},
				success:function(res){
					if(res.code==1){
						that.list = res.data
						that.imgs = JSON.parse(res.data.images)
						if(res.data.sc==1){
							that.shou_cang = true
						}else{
							that.shou_cang = false
						}
					}else{
						that.$dialog.toast({
		                    mes: res.info,
		                    timeout: 1500,
		                    icon: 'error'
		                });
					}
					
				}
			});
			//猜你喜欢
			$.ajax({
				type:"post",
				url:this.common.ajax_url+"/index.php/Api/Goods/goods_like",
				async:true,
				xhrFields: {
					withCredentials: true
				},
				success:function(res){
					if(res.code==1){
						that.goods_like = res.data
					}else{
						that.$dialog.toast({
		                    mes: res.info,
		                    timeout: 1500,
		                    icon: 'error'
		                });
					}
					
				}
			});
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
				var that = this;
				this.shou_cang=!this.shou_cang;
				$.ajax({
					type:"post",
					url:"http://fnapi.dongdukeji.com/index.php/Api/Goods/sc",
					async:true,
					data:{
						id:'146'
					},
					success:function(res){
						if(res.code==1){
							that.shou_cang = true
						}else{
							that.shou_cang = false
						}
					}
				});
			},
			//点击评论
			pinglun(){
				this.$router.push({
					path: '/pinglun',
					query:{
						id:this.id
					}
				});
			},
			//获取
			get(){
				window.location.href = this.list.file
			},
			like_router(_id){
				this.$router.push({
					path: '/',
					query:{
						id:_id
					}
				});
			}
		},
		mounted: function(e) {

		}
	}
</script>

<style scoped>
@import url("../../../static/zxy.css");
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
		margin-top: 0.05rem;
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
		padding: 0.3rem 0;
		
	}
	.jie_shao .img_packet{
		display: flex;
		float: left;
		padding:0 0.3rem;
	}
	.jie_shao .img_box img {
		width: 4.4rem;
		height: 7.8rem;
		border-radius: 0.1rem;
		margin-right: 0.2rem;
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
	.ren_wu .zhan img{
		transform: rotate(180deg); 
		-o-transform: rotate(180deg); 
		-webkit-transform: rotate(180deg); 
		-moz-transform: rotate(180deg); 
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
			border-bottom: 1px solid #F3F3F3;
		}
		.ping_jia .con_item .line2{
			padding: 0.24rem 0;
			display: flex;
			justify-content: flex-start;
		}
		.ping_jia .con_item .line2 img{
			width: 1.48rem;
			height: 1.48rem;
			margin-right: 0.33rem;
		}
		.ping_jia .con_item .line2 img:last-child{
			margin-right:0;
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
	
	/*视频的部分*/
	.shi_pin{
		margin-bottom: 0.2rem;
		background: #FFFFFF;
	}
	.shi_pin video{
		width: 100%;
		height:4.24rem;
	}
	.sp_des{
		padding: 0.2rem 0.3rem;
	}
	.sp_des_row1{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight:bold;
		font-size: 0.4rem;
	}
	.sp_des_row2{
		color: #646464;
		font-size: 0.28rem;
		padding: 0.1rem 0;
	}
	.sp_des_row3{
		font-size: 0.24rem;
		font-weight: bold;
		color:#FF6600 ;
	}
	
</style>
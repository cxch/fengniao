<template>
	<div class="dingdan" v-cloak>
		<!--头部-->
		<head-view title="推广订单" border="false" v-cloak></head-view>
		<tuiguang @label_active="active"></tuiguang>
		<!--标题-->
		<div class="label">
			<div class="title" :class="title_num==index?'title_active':''" @click="title_active(index)" v-for="item,index in title">
				{{item}}
			</div>
		</div>
		<!--应用推广-->
		<div class="wrap">
			<div class="main">
				<div class="main_top">
					<img src="../../../build/logo.png" />
					<div class="main_top_right">
						<div class="main_top_title">
							得到-知识就在得到
						</div>
						<div class="main_top_content">
							得到，提供最省时间的知是打开房间数量的咖啡机拉萨附近离开洒家啊士大夫看见卡拉省的放假啦士大夫识服务，罗辑思维团队精心打造，在这……
						</div>
					</div>
				</div>
				<div class="main_bottom">
					<div class="state">
						未完成
					</div>
					<div class="button blue">
						去完成
					</div>
					<div class="button gray">
						取消
					</div>
				</div>
			</div>
		</div>
		<!--公众号推广-->
		<div class="wrap">
			<div class="main">
				<div class="main_top">
					<img src="../../../build/logo.png" />
					<div class="main_top_right">
						<div class="main_top_title">
							得到-知识就在得到
						</div>
						<div class="main_top_content">
							得到，提供最省时间的知是打开房间数量的咖啡机拉萨附近离开洒家啊士大夫看见卡拉省的放假啦士大夫识服务，罗辑思维团队精心打造，在这……
						</div>
					</div>
				</div>
				<div class="main_bottom">
					<div class="state">
						待评价
					</div>
					<div class="button blue">
						去评价
					</div>
				</div>
			</div>
		</div>
		<!--视频推广-->
		<div class="wrap">
			<div class="main">
				<div class="main_top">
					<video ref="videos" @click="video">
						<source src="../../assets/ceshi.mp4" type="video/mp4"></source>
						<source src="../../assets/ceshi.mp4" type="video/ogg"></source>
						<source src="../../assets/ceshi.mp4" type="video/webm"></source>
						<object width="" height="" type="application/x-shockwave-flash" data="myvideo.swf">
							<param name="movie" value="myvideo.swf" />
							<param name="flashvars" value="autostart=true&amp;file=myvideo.swf" />
						</object> 当前浏览器不支持 video直接播放，点击这里下载视频：
						<a href="myvideo.webm">下载视频</a>
					</video>
					<div class="main_top_right">
						<div class="main_top_title">
							得到-知识就在得到
						</div>
						<div class="main_top_content">
							得到，提供最省时间的知是打开房间数量的咖啡机拉萨附近离开洒家啊士大夫看见卡拉省的放假啦士大夫识服务，罗辑思维团队精心打造，在这……
						</div>
					</div>
				</div>
				<div class="main_bottom">
					<div class="state">
						待评价
					</div>
					<div class="button blue">
						去评价
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	//注册组件
	import tuiguang from '@/components/common/tuiguang'
	export default {
		name: 'dingdan',
		data() {
			return {
				title: ["全部", "未完成", "待评价", "已完成"],
				title_num: 0,
				//视频是否全屏
				video_type: false,
				ele: ""
			}
		},
		components: {
			tuiguang
		},
		created: function(e) {

		},
		methods: {
			//子组件传参
			active(_index) {
				this.title_num = 0
			},
			//点击状态
			title_active(_index) {
				this.title_num = _index
			},
			video() {
				this.ele = this.$refs.videos
				if(this.ele.requestFullscreen) {
					this.ele.requestFullscreen();
				} else if(this.ele.mozRequestFullScreen) {
					this.ele.mozRequestFullScreen();
				} else if(this.ele.webkitRequestFullScreen) {
					this.ele.webkitRequestFullScreen();
				}
				this.ele.play();
				this.video_type = true;
			}
		},
		mounted: function(e) {
			var that = this;
			document.addEventListener("fullscreenchange", function(e) {
				if(!that.video_type) {
					that.ele.pause();
				}
				that.video_type = false;
			});
			document.addEventListener("mozfullscreenchange", function(e) {
				if(!that.video_type) {
					that.ele.pause();
				}
				that.video_type = false;
			});
			document.addEventListener("webkitfullscreenchange", function(e) {
				if(!that.video_type) {
					that.ele.pause();
				}
				that.video_type = false;
			});
			document.addEventListener("msfullscreenchange", function(e) {
				if(!that.video_type) {
					that.ele.pause();
				}
				that.video_type = false;
			});
		}
	}
</script>

<style scoped="scoped">
	.label {
		height: 0.9rem;
		background: #FFFFFF;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	
	.label .title {
		height: 0.9rem;
		flex-grow: 1;
		text-align: center;
		line-height: 0.9rem;
		color: #646464;
		font-size: 0.28rem;
	}
	
	.label .title_active {
		color: #2873EE !important;
		font-weight: bold;
		position: relative;
	}
	
	.label .title_active:after {
		position: absolute;
		bottom: 0;
		left: 0;
		content: "";
		width: 100%;
		height: 0.04rem;
		background: #2873EE;
	}
	
	.wrap {
		margin-top: 0.2rem;
	}
	
	.wrap .main {
		background: #FFFFFF;
		padding: 0 0.3rem;
		margin-bottom: 0.1rem;
	}
	
	.wrap .main:last-child {
		margin-bottom: 0;
	}
	
	.wrap .main .main_top {
		padding: 0.3rem 0 0.2rem;
		display: flex;
		align-items: center;
		border-bottom: 0.01rem solid #F5F5F5;
	}
	
	.wrap .main .main_top img {
		width: 1.6rem;
		height: 1.6rem;
		border-radius: 0.06rem;
	}
	
	.wrap .main .main_top video {
		width: 2.39rem;
		height: 1.35rem;
		border-radius: 0.06rem;
	}
	
	.wrap .main .main_top .main_top_right {
		margin-left: 0.25rem;
		height: 1.6rem;
	}
	
	.wrap .main .main_top .main_top_right .main_top_title {
		color: #323232;
		font-size: 0.32rem;
		font-weight: bold;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	
	.wrap .main .main_top .main_top_right .main_top_content {
		margin-top: 0.18rem;
		font-size: 0.24rem;
		color: #646464;
		font-weight: 400;
		line-height: 0.36rem;
		letter-spacing: 0.01rem;
		word-break: break-all;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	
	.wrap .main .main_bottom {
		height: 0.7rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	
	.wrap .main .main_bottom .state {
		color: #2873EE;
		font-size: 0.28rem;
		flex-grow: 1;
	}
	
	.wrap .main .main_bottom .button {
		width: 1.2rem;
		height: 0.49rem;
		text-align: center;
		line-height: 0.49rem;
		border: 0.01rem solid;
		border-radius: 0.06rem;
		margin-right: 0.2rem;
	}
	
	.wrap .main .main_bottom .button:last-child {
		margin-right: 0;
	}
	
	.wrap .main .main_bottom .blue {
		border-color: #2873EE;
		color: #2873EE;
	}
	
	.wrap .main .main_bottom .gray {
		border-color: #CCCCCC;
		color: #909090;
	}
</style>
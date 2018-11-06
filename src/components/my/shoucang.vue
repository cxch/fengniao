<template>
	<div class="shoucang" v-cloak>
		<!--头部-->
		<head-view title="我的收藏" border="true" v-cloak></head-view>
		<tuiguang border="false" @label_active="active"></tuiguang>
		<div class="wrap">
			<div class="main">
				<img src="../../../build/logo.png"/>
				<div class="content">
					<div class="content_top">
						得到-知识就在得到
					</div>
					<div class="content_centent">
						<div class="content_details">
							得到，提供最省时间的知识服务，罗辑思维团队精心打造，在这……
						</div>
						<div class="button">
							下载
						</div>
					</div>
					<div class="content_bottom">
						<div class="label">
							教育
						</div>
						<div class="label">
							教育
						</div>
						<div class="rebate">
							返利金:￥<span>2.0</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import tuiguang from '@/components/common/tuiguang'
	export default {
		name: 'shoucang',
		data() {
			return {

			}
		},
		components:{
			tuiguang
		},
		created: function(e) {

		},
		methods: {
			active(_index){
				console.log(_index)
			}
		},
		mounted: function(e) {

		}
	}
</script>

<style scoped="scoped">
	.shoucang .wrap{
		margin-top: 0.2rem;
		background: #FFFFFF;
	}
	.shoucang .wrap .main{
		padding: 0.3rem 0.3rem 0.2rem 0.3rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.shoucang .wrap .main img{
		width: 1.6rem;
		height: 1.6rem;
		border-radius: 0.06rem;
	}
	.shoucang .wrap .main .content{
		margin-left: 0.25rem;
	}
	.shoucang .wrap .main .content .content_top{
		font-size:0.32rem;
		color: #323232;
		font-weight:bold;
	}
	.shoucang .wrap .main .content .content_centent{
		margin-top: 0.2rem;
		display: flex;
		justify-content: flex-start;
	}
	.shoucang .wrap .main .content .content_centent .content_details{
		width: 3.57rem;
		color: #646464;
		font-size: 0.24rem;
		line-height: 0.36rem;
		word-break: break-all;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2; 
	    overflow: hidden;  
	}
	.shoucang .wrap .main .content .content_centent .button{
		width: 1.2rem;
		height: 0.48rem;
		background: #F0F0F6;
		border-radius: 0.24rem;
		text-align: center;
		line-height: 0.48rem;
		color: #2873EE;
		font-weight:bold;
		margin-left: 0.28rem;
		letter-spacing: 0.01rem;
	}
	.shoucang .wrap .main .content .content_bottom{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-top: 0.05rem;
	}
	.shoucang .wrap .main .content .content_bottom .label{
		width: 0.6rem;
		height: 0.3rem;
		margin-right: 0.1rem;
		border: 0.01rem solid #2873EE;
		text-align: center;
		line-height: 0.3rem;
		font-size: 0.2rem;
		color: #2873EE;
		border-radius: 0.06rem;
	}
	.shoucang .wrap .main .content .content_bottom .label:last-child{
		margin-right:0;
	}
	.shoucang .wrap .main .content .content_bottom .rebate{
		flex-grow: 1;
		text-align: right;
		font-size: 0.24rem;
		color: #FF6600;
		font-weight: bold;
	}
	.shoucang .wrap .main .content .content_bottom .rebate span{
		font-size: 0.36rem;
	}
</style>
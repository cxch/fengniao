<template>
	<div class="biao_qian_two" v-cloak>
		<div class="section">

			<div class='bq_top'>
				<div class='top01'>
					<img style='width:2rem;height:2.54rem' src='../../assets/common/logo02.png' />
				</div>
				<div class='top02'>
					<div class='top02-1'><span>我的形象专属推荐</span></div>
					<div class='top02-2'><span>点击下面的标签进行调整画像</span></div>
				</div>
			</div>
			<!-- 标签 开始 -->
			<div class='subtips'>
				<div class='item' :class="{active:item.checked}" v-for="item,index in sec_nav" @click="choose_sec_tips(index)">{{item.name}}</div>
			</div>
			<!-- 标签 结束 -->
			<div class='ok' style='color:#2873EE'>
				<span>进入旅程</span>
			</div>
			<!-- 返回上一级 -->
			<div class='back' bindtap='back_fun'>
				<span> <返回上一级 </span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'biao_qian_two',
		data() {
			return {
				sec_nav: [{
					id: 10,
					name: '啊啊啊',
					checked: false,
				}, {
					id: 13,
					name: '不不不',
					checked: false,
				}, {
					id: 16,
					name: '错错错',
					checked: false,
				}, {
					id: 17,
					name: '顶顶顶',
					checked: false,
				}, {
					id: 18,
					name: '呃呃呃',
					checked: false,
				}, {
					id: 20,
					name: '帆帆帆帆',
					checked: false,
				}],
				cur_sec_tips: [],
				next: false,
			}
		},
		created: function(e) {
			console.log(this.$route.query.id);
			
		},
		methods: {
			//选择二级标签
			choose_sec_tips(index) {
				var tips = this.sec_nav;
				var cur_tips = [];
				this.sec_nav[index].checked = !this.sec_nav[index].checked;
				for(var i = 0; i < this.sec_nav.length; i++) {
					if(tips[i].checked == true) {
						cur_tips.push(tips[i]);
					};
				};
				console.log(cur_tips);
				this.cur_tips = cur_tips;
			},

			//点击进入旅程
			next_step() {
				if(this.cur_sec_tips.length < 1) {
					this.$dialog.toast({
						mes: '请选择标签',
						timeout: 1500
					});
				}
			},
			
			//返回上一级
			back_fun(){
				this.$router.go(-1);
			},
		},
		mounted: function(e) {

		},
		watch: {
			cur_tips: function() {
				if(this.cur_sec_tips.length > 0) {
					this.next = true;
				}
			}
		}
	}
</script>

<style scoped>
	.biao_qian_two {
		position: fixed;
		width: 100%;
		height: 100%;
		background: #FFFFFF;
	}
	
	.section {
		color: #323232;
		background: #fff;
	}
	
	.bq_top {
		text-align: center;
	}
	
	.top01 {
		margin-top: 0.77rem;
	}
	
	.top02 {
		margin-top: 1rem;
	}
	
	.top02-1 {
		font-weight: bold;
		font-size: 0.48rem;
	}
	
	.top02-2 {
		font-size: 0.24rem;
		margin-top: 0.10rem;
	}
	/* 标签 开始 */
	
	.subtips {
		padding: 0 10.6%;
		margin-top: 0.57rem;
		height: 3.20rem;
		overflow: hidden;
	}
	
	.item {
		width: 30.5%;
		height: 0.60rem;
		border: 1px solid #F3F3F3;
		color: #CCCCCC;
		font-size: 0.32rem;
		line-height: 0.60rem;
		text-align: center;
		border-radius: 0.30rem;
		display: inline-block;
		margin-top: 0.20rem;
		margin-left: 4.25%;
		float: left;
	}
	
	.item:nth-child(5n+1) {
		margin-left: 17%;
	}
	
	.item:nth-child(5n+3) {
		margin-left: 0px;
	}
	
	.item.active {
		border-color: #2873ee;
		color: #2873ee;
		height: 0.60rem;
	}
	/* 标签 结束 */
	
	.ok {
		text-align: center;
		font-weight: bold;
		font-size: 0.60rem;
		margin-top: 0.70rem;
		color: #909090;
	}
	/* 返回上一级 */
	
	.back {
		font-size: 0.24rem;
		color: #909090;
		position: fixed;
		top: 0.30rem;
		left: 0.30rem;
		z-index: 999
	}
</style>
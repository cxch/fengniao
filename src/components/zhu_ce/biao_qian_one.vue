<template>
	<div class="biao_qian_one" v-cloak>
		<div class="section">
			<div class='bq_top'>
				<div class='top01'>
					<img src="../../assets/common/logo02.png" style='width:2rem;height:2.54rem' />
				</div>
				<div class='top02'>
					<div class='top02-1'><span>选择我的蜂鸟传媒形象</span></div>
					<div class='top02-2'><span>选择越多推送更多相关内容</span></div>
				</div>
			</div>
			<!-- 标签 开始 -->
			<div class='tips'>
				<div class='item' :class="item.checked?'active':''" v-for="(item,index) in first_nav" @click="choose_tips(index)">{{item.name}}</div>

			</div>
			<!-- 标签 结束 -->
			<div class='ok' :style='next?"color:#2873EE":""' @click="next_step">
				<span>我选好了</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'biao_qian_one',
		data() {
			return {
				first_nav: [{
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
				cur_tips:[],
				next:false,
			}
		},
		created: function(e) {
if(this.cur_tips.length>0){
					alert("sasasd")
				}
		},
		methods: {
			//选择标签
			choose_tips(index) {
				var tips=this.first_nav;
				var cur_tips=[];
				this.first_nav[index].checked = !this.first_nav[index].checked;
				for(var i = 0; i < this.first_nav.length; i++) {
					if(tips[i].checked == true) {
						cur_tips.push(tips[i]);
					};
				};
				console.log(cur_tips);
				this.cur_tips=cur_tips;
			},
			
			//点击我选好了
			next_step(){
				if(this.cur_tips.length<1){
					this.$dialog.toast({
						mes: '请选择标签',
						timeout: 1500
					});
				}else{
					this.$router.push({
                        name: 'biao_qian_two',
                        query: {
                            id: 123456
                        }
                      })
				}
			},
		},
		mounted: function(e) {
			
		},
		watch:{
			cur_tips:function(){
				if(this.cur_tips.length>0){
					this.next=true;
				}
			}
		}
	}
</script>

<style scoped>
	.biao_qian_one {
		position: absolute;
		width: 100%;
		height: 100%;
		background: #FFFFFF;
	}
	
	.section {
		color: #323232;
		background: #fff;
		width: 100%;
		position: fixed;
		top: 50%;
		transform: translateY(-50%);
	}
	
	.bq_top {
		text-align: center;
	}
	
	.top01 {}
	
	.top02 {
		margin-top: 1rem;
	}
	
	.top02-1 {
		font-weight: bold;
		font-size: 0.48rem;
	}
	
	.top02-2 {
		font-size: 0.24rem;
		margin-top: 0.1rem;
	}
	/* 标签 开始 */
	
	.tips {
		padding: 0 16%;
		margin-top: 0.45rem;
	}
	
	.item {
		width: 41.5%;
		height: 0.68rem;
		border: 1px solid #F3F3F3;
		color: #CCCCCC;
		font-size: 0.36rem;
		line-height: 0.66rem;
		text-align: center;
		border-radius: 0.34rem;
		display: inline-block;
		margin-top: 0.32rem;
	}
	
	.item:nth-child(2n) {
		margin-left: 10%;
	}
	
	.item.active {
		border: none;
		background: #2873ee;
		color: white;
		height: 0.68rem;
	}
	/* 标签 结束 */
	
	.ok {
		text-align: center;
		font-weight: bold;
		font-size: 0.60rem;
		margin-top: 1.10rem;
		color: #909090;
	}
</style>
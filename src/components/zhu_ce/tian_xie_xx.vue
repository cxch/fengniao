<template>
	<div class="tian_xie_xx" v-cloak>
		<div class="section">
			<div class="con_box">
				<div class="tit">让我们了解你</div>
				<div class="subtit">为你推荐更适合的内容</div>
				<div class="item_box">
					<div class="des">
						<img src="../../assets/common/sex_icon.png" />
						<span>性别</span>
					</div>
					<div class="choose_sex">
						<div class="sex_i" :class="{active:sex==1}" @click="choose_sex_fun(1)" style="margin-right: 0.5rem;">男
							<img src="../../assets/common/choose.png" v-if="sex==1" />
						</div>
						<div class="sex_i" :class="{active:sex==2}" @click="choose_sex_fun(2)">女
							<img src="../../assets/common/choose.png" v-if="sex==2" />
						</div>
					</div>
				</div>
				<div class="item_box" style="margin-top: 0.9rem">
					<div class="des">
						<img src="../../assets/common/age_icon.png" />
						<span>出生年份</span>
					</div>
					<div class="choose_age">
						<img src="../../assets/common/arrow_down.png"/>
						<yd-cell-group  >
							<yd-cell-item type="label">
								<select :class="{active:couponSelected!=''}" slot="right" @change="getCouponSelected" v-model="couponSelected">
									<option value='' disabled selected style='display:none;'>请选择出生年份</option>
									<option :value="index" v-for="(item,index) in age">{{item}}</option>
								</select>
							</yd-cell-item>
						</yd-cell-group>
					</div>
				</div>
				
			</div>
			<div class="deng_lu" :class="{active:deng_lu}">登录</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tian_xie_xx',
		data() {
			return {
				sex: null,
				age:[],
				couponSelected:"",
				deng_lu:false,
			}
		},
		created: function(e) {
			//获取当前年份
			var date=new Date;
			var year=date.getFullYear(); 
			var min_year=year-60;
			var max_year=year-9;
			var arr=[];
			for(var i=min_year;i<max_year;i++){
				arr.push(i);
			}
			this.age=arr;
		},
		methods: {
			choose_sex_fun(sex) {
				this.sex = sex
			},
			//获取下拉框的值
			getCouponSelected(){
				console.log(this.couponSelected)
			},
			
			//点击登录
			
		},
		watch:{
			sex:function(){
				if(this.sex!=null&&this.couponSelected!=''){
					this.deng_lu=true;
				}else{
					this.deng_lu=false;
				}
			},
			couponSelected:function(){
				if(this.sex!=null&&this.couponSelected!=''){
					this.deng_lu=true;
				}else{
					this.deng_lu=false;
				}
			},
		},
		mounted: function(e) {
			
		}
	}
</script>
<style>
	.choose_age .yd-cell-right select,.choose_age .yd-cell-right,.choose_age .yd-cell label.yd-cell-item{
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
		min-height: 0;
	}
	.choose_age .yd-cell-right select{
		padding: 0.16rem 1.45rem 0.16rem 0.22rem;
		background: #F8F8F8;
		border: 1px solid #E5E5E5;
		border-radius:2px
	}
	.choose_age .yd-cell-right select option{
		color: #909090;
	}
	.choose_age .yd-cell-right select.active{
		border: 1px solid #3699FF;
		background: #E9F1FD;
		color: #2873EE;
	}
</style>
<style scoped>
	.tian_xie_xx {
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		position: fixed;
		top: 0;
	}
	.section{
		width: 100%;
		position: fixed;
		top: 50%;
		transform: translateY(-50%);
	}
	.con_box {
		width: 100%;
		padding-left: 1.42rem;
	}
	
	.con_box .tit {
		font-size: 0.48rem;
		font-weight: bold;
	}
	
	.con_box .subtit {
		color: #646464;
		font-size: 0.28rem;
		margin-top: 0.1rem;
	}
	
	.item_box {
		margin-top: 1.23rem;
	}
	
	.des {
		display: flex;
		align-items: center;
		color: #646464;
		/*font-size: 0.28rem;*/
		font-weight: bold;
	}
	
	.des img {
		width: 0.28rem;
		height: 0.28rem;
		margin-right: 0.1rem;
	}
	
	.choose_sex,
	.choose_age {
		display: flex;
		padding-left: 0.4rem;
		padding-top: 0.4rem;
	}
	.choose_age{
		height: 0.8rem;
	}
	.sex_i {
		width: 1.6rem;
		height: 0.6rem;
		border: 1px solid #E5E5E5;
		border-radius: 2px;
		line-height: 0.6rem;
		text-align: center;
		position: relative;
		font-size: 0.32rem;
		color: #909090;
		font-weight: 500;
	}
	
	.sex_i.active {
		border: 1px solid #3699FF;
		color: #2873EE;
		background: #E9F1FD;
	}
	
	.sex_i img {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 0.26rem;
		height: 0.24rem;
	}
	.choose_age{
		width: 4.1rem;
		height: 1rem;
		position: relative;
	}
	.choose_age img{
		width: 0.27rem;
		height: 0.16rem;
		position: absolute;
		top: 67%;
		right: 0.2rem;
		z-index: 10;
	}
	/*登录按钮*/
	.deng_lu{
		color: #909090;
		font-size: 0.6rem;
		font-weight: bold;
		text-align: center;
		padding-top: 3rem;
	}
	.deng_lu.active{
		color: #2873EE;
	}
</style>
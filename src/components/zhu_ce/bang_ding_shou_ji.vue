<template>
	<div class="bd_shou_ji" v-cloak>
		<div class="section">
			<img src="../../assets/common/logo01.png" style="width: 1.48rem;height: 1.48rem;" />
			<div class="shou_ji">
				<input type="text" name="" id="" value="" placeholder="输入手机号" v-on:input="shuru('phone')" v-model="phone" maxlength="11" />
			</div>
			<div class="code">
				<div class="style1" v-if="statu==0">获取验证码</div>
				<div class="style1 active" v-if="statu==1" @click="get_code">获取验证码</div>
				<div class="style2" v-if="statu==2||statu==3">
					<input type="text" name="" id="" value="" placeholder="输入验证码" v-on:input="shuru('code')" v-model="code" maxlength="6" />
					<div class="re_get" v-if="statu==2">重新获取({{dao_shu}})</div>
					<div class="re_get" style="color: #2873EE;font-weight: bold;" v-if="statu==3" @click="get_code">重新获取</div>
				</div>
			</div>
			<div class="bang_ding" :class="{active:bang_ding}" @click="bang_ding_fun">
				绑定
			</div>
		</div>
		<!--提示弹框-->
	</div>
</template>

<script>
	export default {
		name: 'bd_shou_ji',
		data() {
			return {
				dao_shu: 30,
				phone: '',
				code: '',
				statu: 0,
				Interval: '', //计时器
				bang_ding: false,
			}
		},
		created: function(e) {

		},
		methods: {
			//input框输入时
			shuru(name) {
				var reg = /^1[3|4|5|7|8][0-9]{9}$/;
				//输入电话时
				if(name == "phone") {
					if(reg.test(this.phone)) {
						this.statu = 1;
						clearInterval(this.Interval);
						this.dao_shu = 30;
					};
				};
				//输入验证码时
				if(name == "code") {
					if(reg.test(this.phone) && this.code.length == 6) {
						this.bang_ding = true;
					}
				};
			},
			//点击获取验证码
			get_code() {
				var that = this;
				this.Interval = setInterval(function() {
					that.statu = 2;
					that.dao_shu = that.dao_shu - 1;
					console.log(that.dao_shu)
					if(that.dao_shu < 1) {
						clearInterval(that.Interval);
						that.statu = 3;
						that.dao_shu = 30;
					}
				}, 1000)
			},

			//点击绑定
			bang_ding_fun() {
				var reg = /^1[3|4|5|7|8][0-9]{9}$/;
				var that = this;

				if(this.phone == '') {
					this.$dialog.toast({
						mes: '请填写手机号',
						timeout: 1500
					});
				} else if(!reg.test(this.phone)) {
					this.$dialog.toast({
						mes: '手机号格式不正确',
						timeout: 1500
					});
				} else if(this.code.length < 6) {
					this.$dialog.toast({
						mes: '验证码错误',
						timeout: 1500
					});
				}else{
					this.$router.push({
						name: '/tian_xie_xx'
					});
				}
			}
		},
		mounted: function(e) {

		},

	}
</script>

<style scoped>
	input::-webkit-input-placeholder {
		/* WebKit browsers */
		color: #909090;
		font-weight: 500;
	}
	
	input:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		color: #909090;
		font-weight: 500;
	}
	
	input::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		color: #909090;
		font-weight: 500;
	}
	
	input::-ms-input-placeholder {
		/* Internet Explorer 10+ */
		color: #909090;
		font-weight: 500;
	}
	
	.bd_shou_ji {
		background: #FFFFFF;
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
	}
	
	.section {
		text-align: center;
		padding: 0 0.65rem;
		width: 100%;
		position: fixed;
		top: 50%;
		transform: translateY(-60%);
	}
	
	.shou_ji {
		width: 100%;
		height: 0.9rem;
		border-bottom: 1px solid #2873EE;
		margin-top: 0.5rem;
		font-size: 0.32rem;
	}
	
	.shou_ji input {
		border: none;
		/*background: #F0F0F0;*/
		width: 70%;
		height: 100%;
		text-align: center;
		color: #323232;
		font-weight: bold;
	}
	
	.code {
		width: 100%;
		height: 0.9rem;
		border-bottom: 1px solid #2873EE;
		margin-top: 0.2rem;
	}
	
	.code .style1 {
		color: #909090;
		font-size: 0.32rem;
		font-weight: 500;
		line-height: 0.9rem;
	}
	
	.code .style1.active {
		color: #2873EE;
	}
	
	.bang_ding {
		margin-top: 0.8rem;
		color: #909090;
		font-size: 0.6rem;
		font-weight: bold;
	}
	
	.bang_ding.active {
		color: #2873EE;
	}
	
	.code .style2 {
		position: relative;
		height: 100%;
	}
	
	.code .style2 input {
		height: 100%;
		width: 50%;
		text-align: center;
		color: #323232;
		font-size: 0.32rem;
		font-weight: bold;
		border: none;
	}
	
	.code .style2 .re_get {
		position: absolute;
		bottom: 0.3rem;
		right: 0;
		color: #909090;
	}
</style>
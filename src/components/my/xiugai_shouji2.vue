<template>
	<div class="xiugai_shouji" v-cloak>
		<!--头部-->
		<head-view title="修改手机号"></head-view>
		<!--修改原电话-->
		<div class="wrap">
			<div class="mian">
				<div class="title">新手机号</div>
				<input class="int" v-model="new_phone" @keyup="phone_length" type="number" autofocus="autofocus"  placeholder="请填写新手机号" name="" id="" value="" />
			</div>
			<div class="mian">
				<div class="title">验证码</div>
				<input class="int" v-model="validation" type="number" placeholder="请填写短信验证码" name="" id="" value="" />
				<span class="yanzheng" v-show="show" @click="getCode">发送验证码</span>
				<span class="yanzheng yanzheng_gray" v-show="!show">{{count}}秒后获取验证码</span>
			</div>
		</div>
		<!--按钮-->
		<div class="button" @click="save_button">
			保存
		</div>
	</div>
</template>

<script>
	export default {
		name: 'xiugai_shouji',
		data() {
			return {
				show: true,
				count: '',
				timer: null,
				//上面的不用管
				//新电话
				new_phone: "",
				//验证码
				validation:"",
				mobile:/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
			}
		},
		created: function(e) {

		},
		methods: {
			//倒计时
			getCode() {
				if(this.mobile.test(this.new_phone)){
					const TIME_COUNT = 60;
					if(!this.timer) {
						this.count = TIME_COUNT;
						this.show = false;
						this.timer = setInterval(() => {
							if(this.count > 0 && this.count <= TIME_COUNT) {
								this.count--;
							} else {
								this.show = true;
								clearInterval(this.timer);
								this.timer = null;
							}
						}, 1000)
					}
				}else{
					this.$dialog.toast({
	                    mes: '请填写正确手机号',
	                    timeout: 1500,
	                    icon: 'error',
	                    callback: () => {
	                        this.new_phone = ''
	                    }
	                });
				}
				
			},
			//保存
			save_button(){
				if(!this.mobile.test(this.new_phone)){
					this.$dialog.toast({
	                    mes: '请填写正确手机号',
	                    timeout: 1500,
	                    icon: 'error',
	                    callback: () => {
	                        this.new_phone = ''
	                    }
	                });
				}else if(!$.trim(this.validation)){
					this.$dialog.toast({
	                    mes: '请填写正确验证码',
	                    timeout: 1500,
	                    icon: 'error',
	                    callback: () => {
	                        this.validation = ''
	                    }
	                });
				}else{
					alert(1)
				}
			},
			phone_length(){
				if(this.new_phone.length > 10){
					this.new_phone = this.new_phone.substr(0, 11)
				}
			}
		},
		mounted: function(e) {

		}
	}
</script>

<style>
	.xiugai_shouji .wrap {
		background: #fff;
	}
	
	.xiugai_shouji .wrap .mian {
		height: 0.88rem;
		width: 100%;
		padding: 0 0.24rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #F0F0F0;
	}
	
	.xiugai_shouji .wrap .mian div {
		font-size: 0.28rem;
		width: 1.73rem;
		letter-spacing: 1px;
		color: #505050;
		font-weight: bold;
	}
	
	.xiugai_shouji .wrap .mian .int {
		height: 100%;
		flex-grow: 1;
		border: none;
		letter-spacing: 1px;
	}
	
	.xiugai_shouji .wrap .mian .int::-webkit-input-placeholder {
		color: #CCCCCC;
		letter-spacing: 0;
	}
	
	.xiugai_shouji .wrap .mian .int:-moz-placeholder {
		color: #CCCCCC;
		letter-spacing: 0;
	}
	
	.xiugai_shouji .wrap .mian .int::-moz-placeholder {
		color: #CCCCCC;
		letter-spacing: 0;
	}
	
	.xiugai_shouji .wrap .mian .int:-ms-input-placeholder {
		color: #CCCCCC;
		letter-spacing: 0;
	}
	
	.xiugai_shouji .wrap .mian .yanzheng {
		font-size: 0.24rem;
		letter-spacing: 1px;
		color: #3286F4;
		font-weight: bold;
	}
	
	.xiugai_shouji .wrap .mian .yanzheng_gray {
		color: #646464;
	}
	
	.xiugai_shouji .button {
		width: 6.9rem;
		height: 0.9rem;
		background: #2873EE;
		margin: 0.6rem auto 0;
		border-radius: 0.06rem;
		text-align: center;
		line-height: 0.9rem;
		font-size: 0.36rem;
		color: #fff;
		letter-spacing: 2px;
	}
</style>
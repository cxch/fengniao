<template>
	<div class="demo" v-cloak>
		<!--头部-->
		<head-view title="1" border="false" v-cloak></head-view>
		title传标题，border传是否有底部border默认有
	</div>
</template>

<script>
	export default {
		name: 'demo',
		data() {
			return {

			}
		},
		created: function(e) {

		},
		methods: {
			tan(){
				this.$dialog.toast({
	                    mes: '请输入正整数',
	                    timeout: 1500,
	                    icon: 'error',
	                });
			}
		},
		mounted: function(e) {

		}
	}
</script>

<style>
	
</style>
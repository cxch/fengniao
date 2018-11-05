<template>
	<div class="bottom" >
		<button @click="childClick('111')" style="width: 1rem;height: 1rem;background: blueviolet;"></button>
	</div>
</template>

<script>
	export default {
		name: 'bottom',
		data() {
			return {
				props:{
					//设置一个默认值
					show:{
				        type:Boolean,
				        default:false,
				      },
				}
			}
		},
		props:["show"],
		created: function(e) {
			
		},
		methods: {
			childClick(data){
				this.$emit('parentClick', data)
			}
		},
		mounted: function(e) {

		}
	}
</script>

<style scoped>
	.bottom{
		background: #F0F0F0;
		width: 100%;
		height: 0.85rem;
		line-height: 0.85rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.bottom img{
		width: 2.57rem;
		height: 0.25rem;
	}
</style>
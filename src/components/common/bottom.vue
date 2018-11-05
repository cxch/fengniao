<template>
	<div class="bottom" v-show="show">
		<img src="../../assets/common/bottom.png" />
	</div>
</template>

<script>
	export default {
		name: 'bottom',
		data() {
			return {
				props: {
					show: {
						type: Boolean,
						default: false,
					},
				}
			}
		},
		props: ["show"],
		created: function(e) {

		},
		methods: {

		},
		mounted: function(e) {

		}
	}
</script>

<style scoped>
	.bottom {
		background: #F0F0F0;
		width: 100%;
		height: 0.85rem;
		line-height: 0.85rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.bottom img {
		width: 2.57rem;
		height: 0.25rem;
	}
</style>
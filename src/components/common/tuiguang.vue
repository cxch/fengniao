<template>
	<div class="tuiguang">
		<div class="wrap" :class="border_show?'wrap_border':''">
			<div class="mian" v-for="item,index in tui" :class="label_index==index?'mian_active':''" @click="label_active(index)">{{item}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tuiguang',
		data() {
			return {
				tui:["任务推广","应用推广","公众号推广","视频推广"],
				//第几个标签被选中
				label_index:0,
				//是否有border
				border_show:true
			}
		},
		props:["border"],
		created: function(e) {
			if(this.border=='false'){
				this.border_show = false;
			}
		},
		methods: {
			//点击变色
			label_active (_index){
				this.label_index = _index;
				this.$emit('label_active', _index);
			}
		},
		mounted: function(e) {

		}
	}
</script>

<style scoped="scoped">
 .tuiguang .wrap{
 	height: 1rem;
 	width: 100%;
 	background: #fff;
 	display: flex;
 	justify-content: space-around;
 	align-items: center;
 }
 .tuiguang .wrap_border{
 	border-bottom: 1px solid #F0F0F0;
 }
 .tuiguang .wrap .mian{
 	width: 1.8rem;
 	height: 0.6rem;
 	border: 0.01rem solid #CCCCCC;
 	text-align: center;
 	line-height: 0.6rem;
 	color: #646464;
 	font-size: 0.28rem;
 	border-radius: 0.06rem;
 }
 .tuiguang .wrap .mian_active{
 	border: none !important;
 	background: #2873EE !important;
 	color: #fff !important;
 }
</style>
<template>
<div>
        <yd-cell-group>
            <yd-cell-item arrow>
                <input slot="right" type="text" @click.stop="show1 = true" v-model="model1" readonly>
            </yd-cell-item>
        </yd-cell-group>

        <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
    </div>
</template>

<script>
 import District from 'ydui-district/dist/jd_province_city_area_id';
 import 'vue-ydui/dist/ydui.base.css';
	export default {
		name: 'carrousel',
		data() {
			return {
				
			show1: false,
                model1: '',
                district: District
				
			}
		},
		methods: {
			 result1(ret) {
                this.model1 = ret.itemName3;
            }
		},
		mounted() {

		}
	}
</script>
<style >
	.yd-cell{
		height: 0.5rem;
		width: 3rem;;
	}
	.yd-cell-right{
		width: 100%;
		height: 100%;
		min-height: 0;
	}
	.yd-cell-right input[type=text]{
		width: 100%;
		height: 100%;
	}
	.yd-cell-item{
		width: 100%;
		height: 100%;
	}
	.yd-cell-arrow:after{
		/*display: none;*/
	}
</style>
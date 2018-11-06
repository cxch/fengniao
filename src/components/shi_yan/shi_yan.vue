<template>
<div class="box">
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
.box{
	height: 0.5rem;
		width: 3rem;
}
	.yd-cell,.yd-cell-right,.yd-cell-right input[type=text],.yd-cell-item{
		height: 100%;
		width: 100%;
		min-height: 0;
		margin: 0;
		padding: 0;
	}

	.yd-cell-arrow:after{
		display: none;
	}
</style>
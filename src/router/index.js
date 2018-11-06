import Vue from 'vue'
import Router from 'vue-router'
//个人中心
import my from '@/components/my/my' //个人中心
import geren_xinxi from '@/components/my/geren_xinxi' //个人信息
import xiugai_nicheng from '@/components/my/xiugai_nicheng' //修改昵称
import xiugai_shouji from '@/components/my/xiugai_shouji' //修改手机
import xiugai_shouji2 from '@/components/my/xiugai_shouji2' //修改新手机号
import qianbao from '@/components/my/qianbao' //钱包
import qianbao_chongzhi from '@/components/my/qianbao_chongzhi' //钱包充值
import qianbao_tixian from '@/components/my/qianbao_tixian' //钱包提现
import qianbao_mingxi from '@/components/my/qianbao_mingxi' //钱包提现
//推广
import ren_wu from '@/components/tui_guang/ren_wu' //任务页面
//首页
import index from '@/components/index/index' //首页
//详情
import renwu_xq from '@/components/xiang_qing/ren_wu_xiang_qing'
//列表页
import ren_wu_list from '@/components/list/ren_wu_list' //任务列表页
import shi_pin_list from '@/components/list/shi_pin_list' //视频列表页
//注册过程 包括绑定手机，选标签，选择性别年龄
import bd_shou_ji from '@/components/zhu_ce/bang_ding_shou_ji' //绑定手机页
import tian_xie_xx from '@/components/zhu_ce/tian_xie_xx' //填写性别和年龄
import biao_qian_one from '@/components/zhu_ce/biao_qian_one' //选择一级标签
import biao_qian_two from '@/components/zhu_ce/biao_qian_two' //选择一级标签

//实验
import shiyan from '@/components/shi_yan/shi_yan'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'index',
		component: index
	},{
		path: '/biao_qian_two',
		name: 'biao_qian_two',
		component: biao_qian_two,
		meta: {
			title: '选择用户标签'
		}
	}, {
		path: '/biao_qian_one',
		name: 'biao_qian_one',
		component: biao_qian_one,
		meta: {
			title: '选择用户标签'
		}
	}, {
		path: '/tian_xie_xx',
		name: 'tian_xie_xx',
		component: tian_xie_xx,
		meta: {
			title: '个人信息'
		}
	}, {
		path: '/bd_shou_ji',
		name: 'bd_shou_ji',
		component: bd_shou_ji,
		meta: {
			title: '绑定手机号'
		}
	}, {
		path: '/shi_pin_list',
		name: 'shi_pin_list',
		component: shi_pin_list
	}, {
		path: '/ren_wu_list',
		name: 'ren_wu_list',
		component: ren_wu_list
	}, {
		path: '/renwu_xq',
		name: 'renwu_xq',
		component: renwu_xq
	}, {
		path: '/shiyan',
		name: 'shiyan',
		component: shiyan
	}, {
		path: '/index',
		name: 'index',
		component: index
	}, {
		path: '/ren_wu',
		name: 'ren_wu',
		component: ren_wu
	}, {
		path: '/my',
		name: 'my',
		component: my,
		meta: {
			title: '我的'
		}
	}, {
		path: '/geren_xinxi',
		name: 'geren_xinxi',
		component: geren_xinxi
	}, {
		path: '/xiugai_nicheng',
		name: 'xiugai_nicheng',
		component: xiugai_nicheng
	}, {
		path: '/xiugai_shouji',
		name: 'xiugai_shouji',
		component: xiugai_shouji
	}, {
		path: '/xiugai_shouji2',
		name: 'xiugai_shouji2',
		component: xiugai_shouji2
	}, {
		path: '/qianbao',
		name: 'qianbao',
		component: qianbao
	}, {
		path: '/qianbao_chongzhi',
		name: 'qianbao_chongzhi',
		component: qianbao_chongzhi
	}, {
		path: '/qianbao_tixian',
		name: 'qianbao_tixian',
		component: qianbao_tixian
	}, {
		path: '/qianbao_mingxi',
		name: 'qianbao_mingxi',
		component: qianbao_mingxi
	}]
})
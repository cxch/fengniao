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
//实验
import shiyan from '@/components/shi_yan/shi_yan'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
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
    },
    {
      path: '/geren_xinxi',
      name: 'geren_xinxi',
      component: geren_xinxi
    },
    {
      path: '/xiugai_nicheng',
      name: 'xiugai_nicheng',
      component: xiugai_nicheng
    },
    {
      path: '/xiugai_shouji',
      name: 'xiugai_shouji',
      component: xiugai_shouji
    },
    {
      path: '/xiugai_shouji2',
      name: 'xiugai_shouji2',
      component: xiugai_shouji2
    },
    {
      path: '/qianbao',
      name: 'qianbao',
      component: qianbao
    },
    {
      path: '/qianbao_chongzhi',
      name: 'qianbao_chongzhi',
      component: qianbao_chongzhi
    },
    {
      path: '/qianbao_tixian',
      name: 'qianbao_tixian',
      component: qianbao_tixian
    },
    {
      path: '/qianbao_mingxi',
      name: 'qianbao_mingxi',
      component: qianbao_mingxi
    }
  ]
})

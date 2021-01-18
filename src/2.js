import Vue from 'vue';
import App from '../component/app.vue'

// 动态加载脚本示例
setTimeout(() => {
    import('../component/module2').then((res) => {
        console.log(res);
    });
    console.log("test");
}, 3000);

new Vue({
    render: (h) => h(App)
}).$mount('#app');

console.log(cc)
cc.a = '12'

function name() {
    var a = 1
    const { b, d } = a;
}

App({
    onLaunch: function (options) {
        var that = this;  //that用于在请求'是否显示小红点'的ajax中通过数据变化对数据进行设置
        this.checkUpdateVersion(); //检查版本更新
        mEnv.checkMachineKey(this.globalData.URL_PREFIX)
        wx.removeStorageSync('logs')//清除历史多余的日志
        this.$$Rangers = $$Rangers
    }
})

if (a === 1) {
    console.log('if')
} else {
    console.log('else')
}
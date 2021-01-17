import Vue from 'vue';
import App from '../component/app.vue'

// 动态加载脚本示例
setTimeout(() => {
    import('../component/module2').then((res) => {
        console.log(res);
    });
    console.log('test')
}, 3000);

new Vue({
    render: (h) => h(App)
}).$mount('#app');

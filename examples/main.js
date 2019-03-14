import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import dataViews from '../src/index';

Vue.use(VueRouter);
Vue.use(dataViews);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    esModule: false,
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/button'
        },
        {
            path: '/button',
            component: (resolve) => require(['./routers/button.vue'], resolve)
        }
    ]
});

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');

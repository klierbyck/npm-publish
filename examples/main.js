import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import dataViews from '../src/index';
// import '../src/index';

Vue.use(VueRouter);
Vue.use(dataViews);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: (resolve) => require(['./routers/index.vue'], resolve)
        }
    ]
});

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');

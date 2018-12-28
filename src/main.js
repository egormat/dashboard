import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './routes.js';
import store from './store/index.js';
import VueCookie from 'vue-cookie'
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Vue.use(VueCookie)

Vue.config.productionTip = false

Vue.use(VueRouter);
const router  = new VueRouter({
  routes
})

Chart.plugins.unregister(ChartDataLabels);


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')





// router.beforeEach((to, from, next) => {
//   console.log(window.$cookies.get('token'))
// const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
// const token = store.getters.getToken
// console.log(token)
// if(requiresAuth && (token !=window.$cookies.get('token') || !window.$cookies.get('token')) {
//    next('/login');
// } else {
//   next();
// }
// });

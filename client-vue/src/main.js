import Vue from 'vue';
import { message } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';

message.config({
  maxCount: 1
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');

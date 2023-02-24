import { createApp } from 'vue'
import "@/style.css"
import 'ant-design-vue/es/message/style/css';
import App from '@/App.vue'
import '@/samples/node-api'
import router from '@/router';
import {
  key,
  store,
} from './store';
import { changeWin } from "@/config/win"
import initAntDesignVue from '@/config/ant-design-vue';
const app = createApp(App);

app.use(router);
app.use(store, key);

app.mount("#app").$nextTick(() => {
  router.beforeResolve((to: any, form: any, next: Function) => {
    store.commit("setSelectedKeys", to.path);
    next()
  })
  initAntDesignVue(app);
  changeWin()
  postMessage({ payload: 'removeLoading' }, '*')
});


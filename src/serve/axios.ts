import { message } from 'ant-design-vue';
import axios, { AxiosResponse } from 'axios';

import router from '@/router/index';

const instance = axios.create({
  timeout: 0,
  // baseURL: "",
});

// 请求拦截器
instance.interceptors.request.use(
  function (config: any) {
    let token: string | null = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  function (response: AxiosResponse<any, any>) {
    const data: any = response.data;
    var { code, msg } = data;
    switch (code) {
      case 200:
        sessionStorage.setItem("isInFirst", "false");
        return data;
      case 401: // 没有权限 包括未登录/登录超时
        router.push("/login");
        return Promise.reject(data);
      default:
        message.error(msg);
        return Promise.reject(data);
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;

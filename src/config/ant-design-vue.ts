import {
  message,
  notification,
} from 'ant-design-vue';
import * as Icons from '@ant-design/icons-vue';
const icons: any = Icons;
export default (app: any) => {
  app.config.globalProperties.$message = message;
  app.config.globalProperties.$notification = notification;
  for (const i in icons) {
    app.component(i, icons[i])
  }
};
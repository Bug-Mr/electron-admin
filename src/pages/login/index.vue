<template>
  <div class="login-box">
    <a-form
      :model="form"
      class="login-form"
      :labelCol="{ span: 8, offset: 0 }"
      labelAlign="left"
      @finish="finish"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="form.username" allow-clear>
          <template #prefix>
            <Icons type="UserOutlined" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="form.password" allow-clear>
          <template #prefix>
            <Icons type="LockOutlined" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item>
        <a-form-item name="remember" no-style>
          <a-checkbox v-model:checked="form.remember" style="color: #fff"
            >自动登录</a-checkbox
          >
        </a-form-item>
        <a class="login-form-forgot" href="">忘记密码</a>
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button">
          登 录
        </a-button>
        或者
        <a href="">去 注 册</a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { reactive, getCurrentInstance } from "vue";

const { proxy }: any = getCurrentInstance();
interface Form {
  username: string;
  password: string;
  remember: boolean;
}
const form = reactive<Form>({
  username: "",
  password: "",
  remember: true,
});
const state = reactive({});
function finish() {
  proxy.$message.success("登录成功");
  setTimeout(() => {
    router.replace("/");
  }, 1300);
}
</script>

<style lang="scss" scoped>
.login-box {
  height: 100vh;
  background: #f5f5f5;
  background: url("@/assets/image/login-bg.jpeg");
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  .login-form {
    border: 1px #099 solid;
    padding: 10px;
    background: #092d644d;
  }
  :deep(.ant-input) {
    background: #092d6400 !important;
  }
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }
  .ant-form-item-control-input-content {
    background: #092d6400 !important;

    .ant-input-affix-wrapper {
      background: #092d6400 !important;
      * {
        color: #fff !important;
      }
    }
  }
}
</style>

<style lang="scss" >
.login-box {
  .ant-form-item {
    color: #ffffff !important;
    .ant-form-item-required {
      color: #ffffff !important;
    }
    .ant-input {
      & {
        color: #ffffff !important;
      }
    }
    .ant-input-clear-icon {
      color: #ffffff !important;
    }
    .ant-input-password-icon {
      color: #ffffff !important;
    }
  }
}
</style>
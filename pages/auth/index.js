// pages/auth/index.js
import { request } from '../../request/index.js';
import { login } from '../../utils/asyncWx.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  async handleGetUserInfo(e) {
    try {
      // 用户信息
      const { rawData, signature, encryptedData, iv } = e.detail;
      // 登录成功后的code
      const { code } = await login();
      // 获取用户token
      let loginParams = { rawData, signature, encryptedData, iv, code };

      const token = '测试' //await request({ url: '登录接口/user/login', data: loginParams, method: "post" }) // 获取登录后的token
      // 存入token
      wx.setStorageSync('token', token);
      // 返回上一页
      wx.navigateBack({
        delta: 1
      });
    } catch (err) {
      console.log(err);
    }
  }
})
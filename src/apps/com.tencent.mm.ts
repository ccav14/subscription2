import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    // 1. 小程序主界面签到/打卡整合
    {
      key: 10,
      name: '小程序主页签到/打卡',
      desc: '合并 UI00 中的多种签到和打卡按钮',
      enable: true,
      activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
      rules: [
        {
          // 移除 quickFind 属性
          // 匹配 [立即签到] 或 [点击签到] 或 [点击打卡]，并限制为按钮
          matches:
            '[name="android.widget.Button"][text="立即签到"], [name="android.widget.Button"][text="点击签到"], [name="android.widget.Button"][text="点击打卡"]',
        },
      ],
    },
    // 2. 小程序辅助界面签到/打卡整合
    {
      key: 11,
      name: '小程序辅助页签到/打卡',
      desc: '合并 UI01 中的签到和打卡按钮',
      enable: true,
      activityIds: ['.plugin.appbrand.ui.AppBrandUI01'],
      rules: [
        {
          // 移除 quickFind 属性
          matches:
            '[name="android.widget.Button"][text="立即签到"], [name="android.widget.Button"][text="点击打卡"]',
        },
      ],
    },
    // 3. 微信内置网页签到整合
    {
      key: 12,
      name: '内置网页签到',
      desc: '合并 MMWebViewUI 中的签到按钮',
      enable: true,
      activityIds: ['.plugin.webview.ui.tools.MMWebViewUI'],
      rules: [
        {
          // 移除 quickFind 属性
          // 通常网页按钮只依赖 text 匹配
          matches: '[text="立即签到"], [text="点击签到"]',
        },
      ],
    },
  ],
});

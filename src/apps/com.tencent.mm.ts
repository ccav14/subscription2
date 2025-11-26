import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    // 建议添加到 groups 数组的末尾
// 注意：请确保这些 key (10, 11, 12) 没有被你文件中的其他规则使用

// 1. 小程序主界面签到/打卡整合
{
  key: 10,
  name: '小程序主页签到/打卡',
  desc: '合并 UI00 中的多种签到和打卡按钮',
  enable: true,
  quickFind: true,
  activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
  rules: [
    {
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
  desc: '合并 UI01 中的签到和打卡按钮 (例如 Key 7, 8, 9)',
  enable: true, // 如果您希望默认启用
  quickFind: true,
  activityIds: ['.plugin.appbrand.ui.AppBrandUI01'],
  rules: [
    {
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
  quickFind: true,
  activityIds: ['.plugin.webview.ui.tools.MMWebViewUI'],
  rules: [
    {
      // 通常网页按钮的 name 是 android.widget.Button 或 android.view.View
      // 这里为了兼容性，可以暂时只依赖 text
      matches: '[text="立即签到"], [text="点击签到"]',
    },
  ],
},
  ],
});

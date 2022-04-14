## 天气
- 此为基于react的spa应用
- ssr版本:https://github.com/jindws/next_weather.git
### UI DESIGN
![design](https://jindw.xyz/upload/2022/04/design-fca44b8e909c4bef9d7904c69e855c1e.png)

### 技术栈
`react`,`service worker`,`sass`,`echarts`,`typescript`,`eslint`,`webpack`
- react18
  - hashRouter
  - hooks
- 关于数据
  - 使用高德地图api获取ip定位
  - 使用和风天气获取天气信息
### 展示地址
`https://jindws.github.io/`

> 实现 ui

- 首页`https://jindws.github.io/#/`
  - 首页背景会随机分布 6 个白点
    - 点击白点会随机再加一个白点
  - 天气图标一点动态
  - 风向天气一点动态
  - 使用 rem,兼容各种屏幕,支持 pc(宽度超过 700px 认为是 pc),支持窗口重置
- 详情页`https://jindws.github.io/#/main`
  - Today 使用的是 echarts 实现
> 图标区分白天黑夜
- 根据天气预报的时间,6-18 天展示白天的图标,之后展示夜晚的图标
> ⽀持离线
- 使用`service worker`实现,第一次加载后,离线可继续展示之前的内容
- 测试
  - pc chrome 支持 
  - ios safari 支持
  - ios qq浏览器 不支持
  - ios 微信 不支持
### 其他
- 降水量展示的是1h降水量
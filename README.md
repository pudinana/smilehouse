# SmileHouse 微笑小屋

一个免费、非营利、可在离线状态下使用的自助情绪陪伴网页。入口是"选择你的人生阶段"，进去有饮品屋、匿名树洞、静心音乐、星光晚风、人文屋、八扇门与公益之家。

**它不是 AI 心理医生，也不做诊断或治疗。** 页面常驻免责说明、危机提示与 12356 心理援助热线转介。所有记录只存在你自己的设备里，不上传、不统计、不互通。

## 英文简介

SmileHouse is a free, non-commercial cloud garden for the quiet hours: a soft little house you enter by choosing the season of life you are in. The ground floor offers a drink stand (a warm cocoa for exhaustion, lime tea for anxiety, sparkling water for loneliness), an anonymous tree hollow, a quiet music room and a starlit terrace. The second floor is a humanities room of books, handicrafts and a private journal. The third floor holds eight doors, a role-experience studio and a charity corner. Everything stays local: what you write never leaves your device. There are no comment sections and no feeds. The page carries its own boundary — a plain disclaimer, a fixed crisis line, gentle redirection for anyone in real danger.

## 在 iPhone 上离线使用

1. 用 Safari 打开本项目 Pages 地址
2. 等页面全部加载出来，停留约 5 秒（让离线缓存装进去）
3. 分享按钮 -> 添加到主屏幕

之后断网也能打开。更新内容时把 `sw.js` 里的 `smilehouse-v1` 版本号加一，重新上传，再删除旧图标重新添加一次。

## 技术说明

- 单文件 `index.html`（全部图片以 base64 内嵌，11 MB），不依赖任何外部 CDN 或字体
- `manifest.webmanifest` + `sw.js` 提供 PWA 与离线缓存
- 纯静态，无后端、无数据库、无第三方统计

## 许可

内容与代码以 CC BY-NC-SA 4.0 授权：署名、非商业性使用、相同方式共享。

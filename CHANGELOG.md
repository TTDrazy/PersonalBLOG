### 2020/05/21
1. 为 BLOG 搭建架子
    - 安装目前所需要的的东西，包括 `antd` 、 `react-router-dom` 、 `axios` 等
    - 画了登录和后台管理页面的雏形静态页
    - 配置了 css 模块化
2. 今日问题：
    - 配置了 css 模块化后发现了会与 antd 的本身样式有所冲突，导致 antd 不显示样式
        >  - 最后的问题出在 antd 的样式是在 APP.js 里引入的，但是最后没有使用 APP.js
        >  - 将 APP.js 里引入的 antd 的样式放入 index.js 中
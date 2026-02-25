# Academic Portfolio Content Customization Guide

## Overview
This portfolio features an academic design with a deep blue color scheme and serif fonts. The following guide will help you easily replace placeholder content in the template to make it your own academic portfolio.

## File Structure
```
f:\claude_test\
├── index.html          # 主页面文件
├── style.css           # 样式文件
├── script.js           # JavaScript功能文件
├── CONTENT_GUIDE.md    # 本指南文件
└── (将来可添加 images/ 文件夹存放图片)
```

## Quick Start
1. Open `index.html` directly in your browser to see the current preview
2. Follow the guide below to replace content
3. Save the file and refresh the browser to see changes

## 内容替换指南

### 1. 基本信息替换
在 `index.html` 文件中找到以下占位符并替换：

#### 页面标题和导航
- **页面标题**：修改浏览器标签页显示的标题
- **导航栏logo**：修改导航栏显示的网站名称
- **导航菜单**：根据需要调整导航链接文本

#### 首页区域
- **姓名**：替换页面标题中的姓名
- **职称和研究领域**：替换职称和研究领域描述
- **学术描述**：修改描述文字，介绍您的学术背景和研究方向

#### 个人简介部分
- **学术背景**：替换个人简介中的职称、研究经验、研究领域和研究方法
- **研究领域**：替换研究领域列表中的项目（如机器学习、数据科学等）
- **基本信息**：替换所在地、教育背景、职业、语言等基本信息

#### 研究成果部分
在 `index.html` 文件中找到研究成果部分并替换：

- **代表性出版物**：替换出版物列表中的作者、年份、标题、期刊和链接
- **研究兴趣**：替换研究兴趣列表中的项目

#### 联系部分
- 第149行：`your.email@example.com` - 替换为您的邮箱
- 第154行：`+86 123 4567 890` - 替换为您的电话
- 第159行：`[你的详细地址]` - 替换为您的地址（可选）
- 第167-174行：更新社交媒体链接的href属性

### 2. 样式自定义
如需调整颜色、字体等样式，请编辑 `style.css` 文件：

#### 颜色主题
在文件顶部的 `:root` 部分可以修改颜色变量：
- `--primary-color`：主要颜色（默认深蓝色 #1a365d）
- `--secondary-color`：次要颜色（深灰色 #4a5568）
- `--background-color`：背景颜色（白色 #ffffff）
- `--text-color`：文字颜色（深灰色 #2d3748）
- `--highlight-color`：高亮颜色（蓝色 #2b6cb0）

#### 字体调整
- 第14行：`--font-family` - 修改字体家族（默认 Merriweather 衬线字体）
- 第15-19行：调整字体大小变量

### 3. 功能自定义
如需调整功能，请编辑 `script.js` 文件：

#### 表单处理
网站已集成Formspree表单服务，可实现真实邮件发送。使用时需要：

1. **注册Formspree账号**：访问 [formspree.io](https://formspree.io) 注册免费账号
2. **创建表单**：在Formspree控制台创建新表单，获取表单ID
3. **配置表单**：在 `index.html` 第187行，将 `action="https://formspree.io/f/YOUR_FORM_ID"` 中的 `YOUR_FORM_ID` 替换为您的实际表单ID
4. **测试功能**：填写表单测试邮件发送是否正常

表单已包含以下功能：
- 前端验证（必填字段、邮箱格式）
- 加载状态提示
- 成功/错误消息显示
- 自动表单重置

#### 其他功能
- 第6-24行：移动端菜单功能
- 第60-67行：消息提示功能
- 第69-73行：年份自动更新
- 第75-113行：平滑滚动和导航高亮

### 4. 添加个人图片
如需添加个人头像：
1. 在项目根目录创建 `images` 文件夹
2. 将您的头像图片放入文件夹中
3. 在 `index.html` 第47-51行替换头像部分：
```html
<div class="hero-image">
    <img src="images/your-photo.jpg" alt="您的名字" class="avatar">
</div>
```
4. 在 `style.css` 中添加相应的样式

### 5. 社交媒体链接
更新社交媒体链接的步骤：
1. 在 `index.html` 第167-174行找到社交媒体图标
2. 将每个 `<a href="#">` 中的 `#` 替换为您的实际链接
3. 如需添加其他平台，复制图标代码并修改

## 响应式设计
本网站已针对以下设备尺寸优化：
- 桌面（≥1200px）：完整布局
- 平板（768px-992px）：适配中等屏幕
- 手机（≤768px）：移动端优化

## 部署建议
### 本地测试
- 直接在浏览器中打开 `index.html` 文件

### GitHub Pages 部署指南
GitHub Pages 是GitHub提供的免费静态网站托管服务，非常适合学术个人网站。

#### 前置准备
1. **GitHub账号**：如果没有，请访问 [github.com](https://github.com) 注册
2. **Git工具**：确保本地已安装 [Git](https://git-scm.com/downloads)

#### 步骤一：创建GitHub仓库
1. 登录GitHub，点击右上角 "+" → "New repository"
2. 设置仓库信息：
   - **Repository name**: `username.github.io`（将 `username` 替换为您的GitHub用户名）
   - **Description**: 可选，如 "Academic Portfolio Website"
   - **Visibility**: Public（必须公开才能使用GitHub Pages）
   - 勾选 "Add a README file"
3. 点击 "Create repository"

#### 步骤二：初始化本地Git仓库
```bash
# 1. 初始化Git仓库
git init

# 2. 添加所有文件到暂存区
git add .

# 3. 提交更改
git commit -m "Initial commit: Academic portfolio website"

# 4. 连接到远程仓库
git remote add origin https://github.com/username/username.github.io.git
# 注意：将 username 替换为您的GitHub用户名

# 5. 推送代码到GitHub
git push -u origin main
```

#### 步骤三：启用GitHub Pages
1. 在GitHub仓库页面，点击 "Settings" 标签
2. 左侧菜单选择 "Pages"
3. 在 "Source" 部分：
   - 分支选择 `main`
   - 文件夹选择 `/ (root)`
4. 点击 "Save"
5. 等待几分钟，页面显示 "Your site is published at https://username.github.io"

#### 步骤四：自定义域名（可选）
1. 购买域名（如 name.com, GoDaddy 等）
2. 在仓库Settings → Pages → Custom domain：
   - 输入您的域名（如 www.yourname.com）
   - 点击 "Save"
3. 在域名注册商处配置DNS：
   - 添加CNAME记录指向 `username.github.io`
   - 或添加A记录指向GitHub IP地址

#### 注意事项
1. **文件位置**：确保 `index.html` 在仓库根目录
2. **Formspree配置**：部署前请先在 `index.html` 中配置Formspree表单ID
3. **缓存问题**：更新后可能需要清除浏览器缓存才能看到最新版本
4. **访问地址**：网站将通过 `https://username.github.io` 访问

#### 其他部署选项
- **Netlify**：拖拽部署，支持自定义域名和HTTPS
- **Vercel**：快速部署，适合前端项目，自动配置HTTPS

## 技术支持
如果您遇到问题：
1. 检查浏览器控制台是否有错误（F12 → Console）
2. 确保文件路径正确
3. 清除浏览器缓存后刷新

## 下一步建议
1. 替换所有占位符内容，完善学术信息
2. 添加完整的出版物列表和研究成果
3. 添加教学经验、学术服务等信息
4. 购买自定义域名提升专业性
5. 添加Google Analytics跟踪访问数据
6. 优化SEO（搜索引擎优化），提高学术可见性

## 许可证
此模板可自由使用、修改和分发。请根据您的需求进行定制。
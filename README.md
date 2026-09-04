# 作品集网站模板

这是一个可直接复制使用的静态作品集网站模板，适合展示个人作品、项目案例、创作思路和联系方式。

## 目录说明

- `index.html`：页面结构
- `styles.css`：页面样式
- `script.js`：作品数据和筛选逻辑
- `assets/projects/`：本地作品封面图片

## 如何替换为自己的作品

1. 打开 `script.js`
2. 修改 `portfolioData` 数组中的标题、分类、年份、描述和图片路径
3. 把自己的作品图片放到 `assets/projects/` 文件夹下
4. 修改 `index.html` 中的个人信息：名字、简介、联系邮箱、社交链接

示例：

```js
{
  title: 'My Project',
  category: 'Branding',
  year: '2026',
  image: 'assets/projects/my-project.jpg',
  description: '你的项目介绍'
}
```

## 本地预览

在当前目录中运行：

```bash
python3 -m http.server 8000
```

然后打开：

```text
http://localhost:8000
```

## 打包或复制

这个网站是纯静态文件，不依赖后端。只要把整个 `portfolio-site` 文件夹复制到任意地方，或者上传到 GitHub Pages、Netlify、Cloudflare Pages、静态托管空间，都可以正常显示。

如果你想完全离线使用，确保图片都存在于本地 `assets/projects/` 目录中，不使用外部网络图片。

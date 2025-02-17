# Blog 前后端项目 README

## 项目概述

本项目是一个简单的博客系统，采用前后端分离架构。后端运用 TypeScript 和 Koa JS 框架搭建 RESTful API，支持 MySQL 和 SQLite3 数据库；前端基于 React 和 TypeScript 开发，借助 Vite 实现快速构建。同时，通过 Docker 可将前后端项目分别打包成镜像，实现容器化部署。

## 项目结构

### 后端项目
```
blog-backend/
├── src/
│   ├── controllers/    # 处理业务逻辑
│   ├── models/         # 数据模型
│   ├── routes/         # 路由定义
│   ├── services/       # 服务层，处理数据访问
│   ├── utils/          # 工具函数
│   ├── app.ts          # Koa 应用入口
│   └── index.ts        # 启动服务器
├── tests/              # 测试代码
├── .env                # 环境变量配置
├── .gitignore          # Git 忽略文件
├── package.json        # 项目依赖和脚本配置
├── tsconfig.json       # TypeScript 配置文件
└── Dockerfile          # 用于构建 Docker 镜像
```

### 前端项目
```
blog-frontend/
├── src/
│   ├── components/     # 存放可复用的组件
│   ├── pages/          # 存放页面组件
│   ├── App.tsx
│   ├── index.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
├── Dockerfile          # 用于构建 Docker 镜像
└── nginx.conf          # Nginx 配置文件
```

## 环境要求
- **Node.js**：v18 及以上
- **Docker**：用于容器化部署

## 后端项目部署

### 本地开发
1. 克隆项目到本地：
```bash
git clone <后端项目仓库地址>
cd blog-backend
```
2. 安装依赖：
```bash
npm install
```
3. 配置环境变量：
在 `.env` 文件中配置数据库连接信息和端口号，示例如下：
```plaintext
PORT=3000
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=blog_db
```
4. 启动开发服务器：
```bash
npm run dev
```

### Docker 部署
1. 构建 Docker 镜像：
```bash
docker build -t blog-backend .
```
2. 运行 Docker 容器：
```bash
docker run -p 3000:3000 blog-backend
```

## 前端项目部署

### 本地开发
1. 克隆项目到本地：
```bash
git clone <前端项目仓库地址>
cd blog-frontend
```
2. 安装依赖：
```bash
npm install
```
3. 启动开发服务器：
```bash
npm run dev
```

### Docker 部署
1. 构建 Docker 镜像：
```bash
docker build -t blog-frontend .
```
2. 运行 Docker 容器：
```bash
docker run -p 8080:80 blog-frontend
```

## 使用 Docker Compose 部署
在项目根目录下创建 `docker-compose.yml` 文件，内容如下：
```yaml
version: '3'
services:
  backend:
    image: blog-backend
    ports:
      - "3000:3000"
  frontend:
    image: blog-frontend
    ports:
      - "8080:80"
```
然后使用以下命令启动容器：
```bash
docker-compose up -d
```

## API 接口说明
- **获取所有博客列表**：`GET /blogs`
- **获取单个博客**：`GET /blogs/:id`
- **创建新博客**：`POST /blogs`，请求体需包含 `title` 和 `content` 字段
- **更新博客信息**：`PUT /blogs/:id`，请求体需包含 `title` 和 `content` 字段
- **删除博客**：`DELETE /blogs/:id`

## 注意事项
- 确保后端数据库服务已启动，且数据库配置信息正确。
- 使用 Docker 部署时，注意端口映射配置，避免端口冲突。

## 贡献
欢迎提交 issue 和 pull request 来帮助改进这个项目。若你有任何问题或建议，请随时联系我们。

## 许可证
本项目采用 [MIT 许可证](LICENSE)。 


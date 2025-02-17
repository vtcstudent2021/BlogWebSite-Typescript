# 第一阶段：构建阶段
FROM node:22-alpine as build

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件到工作目录
COPY . .

# 构建生产环境版本
RUN npm run build

# 第二阶段：运行阶段
FROM nginx:alpine

# 删除 Nginx 默认配置
RUN rm -rf /etc/nginx/conf.d/default.conf

# 复制自定义 Nginx 配置文件到容器中
COPY nginx.conf /etc/nginx/conf.d

# 复制构建好的前端文件到 Nginx 静态文件目录
COPY --from=build /app/dist /usr/share/nginx/html

# 暴露端口，Nginx 默认端口为 80
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
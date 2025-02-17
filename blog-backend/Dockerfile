# 使用 Node.js 基础镜像
FROM node:22-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件到工作目录
COPY . .

# 暴露端口，根据你的后端项目端口修改
EXPOSE 3000

# 启动项目
CMD ["npm", "run", "dev"]
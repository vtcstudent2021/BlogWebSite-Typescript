// blog-backend/src/app.ts
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import blogRoutes from './routes/blog.routes';
import userRoutes from './routes/user.routes';
import cors from '@koa/cors';
import koaBody from 'koa-body';
import serve from 'koa-static';

const app = new Koa();

// 配置 CORS 选项
const corsOptions = {
  origin: '*', // 允许的源
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 允许的 HTTP 方法
  credentials: true // 允许携带凭证（如 cookies）
};

app.use(cors(corsOptions));

// 使用 koa-body 中间件处理请求体
app.use(koaBody());

// 提供静态文件服务，将 uploads 目录下的文件暴露给前端访问
app.use(serve(__dirname + '/uploads'));

app.use(bodyParser());
app.use(blogRoutes.routes());
app.use(blogRoutes.allowedMethods());
app.use(userRoutes.routes());
app.use(userRoutes.allowedMethods());

export default app;
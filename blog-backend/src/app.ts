import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import blogRoutes from './routes/blog.routes';
import cors from '@koa/cors';

const app = new Koa();

// 配置 CORS 选项
const corsOptions = {
  origin: '*', // 允许的源
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 允许的 HTTP 方法
  credentials: true // 允许携带凭证（如 cookies）
};

app.use(cors(corsOptions));

app.use(bodyParser());
app.use(blogRoutes.routes());
app.use(blogRoutes.allowedMethods());

export default app;
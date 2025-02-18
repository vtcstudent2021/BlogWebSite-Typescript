// blog-backend/src/controllers/user.controller.ts
import { Context } from 'koa';
import { UserModel } from '../models/user.model';

// 定义用户请求体的类型
interface UserRequestBody {
  username: string;
  password: string;
}

const userModel = new UserModel();

export const registerUser = async (ctx: Context) => {
  const { username, password } = ctx.request.body as UserRequestBody;
  try {
    const userId = await userModel.createUser(username, password);
    ctx.status = 201;
    ctx.body = { id: userId, username };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

export const loginUser = async (ctx: Context) => {
  const { username, password } = ctx.request.body as UserRequestBody;
  try {
    const user = await userModel.getUserByUsername(username);
    if (user && user.password === password) {
      ctx.status = 200;
      ctx.body = { id: user.id, username };
    } else {
      ctx.status = 401;
      ctx.body = { error: 'Invalid credentials' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};


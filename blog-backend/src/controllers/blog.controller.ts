import { Context } from 'koa';
import { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from '../services/blog.service';

// 定义请求体的类型
interface BlogRequestBody {
  title: string;
  content: string;
}

export const createNewBlog = async (ctx: Context) => {
  const { title, content } = ctx.request.body as BlogRequestBody;
  try {
    const blog = await createBlog(title, content);
    ctx.status = 201;
    ctx.body = blog;
  } catch (error) {
    console.error('Error creating blog:', error); // 打印错误信息
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

export const updateExistingBlog = async (ctx: Context) => {
  const id = parseInt(ctx.params.id);
  // 使用类型断言将 ctx.request.body 转换为 BlogRequestBody 类型
  const { title, content } = ctx.request.body as BlogRequestBody;
  try {
    const blog = await updateBlog(id, title, content);
    if (blog) {
      ctx.status = 200;
      ctx.body = blog;
    } else {
      ctx.status = 404;
      ctx.body = { error: 'Blog not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

// 其他控制器方法保持不变
export const getAllBlogs = async (ctx: Context) => {
  try {
    const blogs = await getBlogs();
    ctx.status = 200;
    ctx.body = blogs;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

export const getSingleBlog = async (ctx: Context) => {
  const id = parseInt(ctx.params.id);
  try {
    const blog = await getBlogById(id);
    if (blog) {
      ctx.status = 200;
      ctx.body = blog;
    } else {
      ctx.status = 404;
      ctx.body = { error: 'Blog not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

export const deleteExistingBlog = async (ctx: Context) => {
  const id = parseInt(ctx.params.id);
  try {
    const isDeleted = await deleteBlog(id);
    if (isDeleted) {
      ctx.status = 204;
    } else {
      ctx.status = 404;
      ctx.body = { error: 'Blog not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};
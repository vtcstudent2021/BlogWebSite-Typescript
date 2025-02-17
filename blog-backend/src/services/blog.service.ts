import pool from '../utils/database';
import { Blog } from '../models/blog.model';

export const getBlogs = async (): Promise<Blog[]> => {
  const [rows] = await pool.execute('SELECT * FROM blogs');
  return rows as Blog[];
};

export const getBlogById = async (id: number): Promise<Blog | null> => {
  const [rows] = await pool.execute('SELECT * FROM blogs WHERE id = ?', [id]);
  const blogs = rows as Blog[];
  return blogs.length > 0 ? blogs[0] : null;
};

export const createBlog = async (title: string, content: string): Promise<Blog> => {
  const [result] = await pool.execute('INSERT INTO blogs (title, content) VALUES (?, ?)', [title, content]);
  const insertId = (result as any).insertId;
  return { id: insertId, title, content, createdAt: new Date() };
};

export const updateBlog = async (id: number, title: string, content: string): Promise<Blog | null> => {
  await pool.execute('UPDATE blogs SET title = ?, content = ? WHERE id = ?', [title, content, id]);
  return getBlogById(id);
};

export const deleteBlog = async (id: number): Promise<boolean> => {
  const [result] = await pool.execute('DELETE FROM blogs WHERE id = ?', [id]);
  const affectedRows = (result as any).affectedRows;
  return affectedRows > 0;
};
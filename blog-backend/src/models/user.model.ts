// blog-backend/src/models/user.model.ts
import { Pool } from 'mysql2/promise';
import pool from '../utils/database';

export interface User {
  id: number;
  username: string;
  password: string;
  avatar?: string; // 新增头像字段
}

export class UserModel {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async createUser(username: string, password: string): Promise<number> {
    const [result] = await this.pool.execute(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, password]
    );
    return (result as any).insertId;
  }

  async getUserByUsername(username: string): Promise<User | null> {
    const [rows] = await this.pool.execute('SELECT * FROM users WHERE username = ?', [username]);
    if (Array.isArray(rows) && rows.length > 0) {
      return rows[0] as User;
    }
    return null;
  }

  async updateUserAvatar(userId: number, avatarUrl: string): Promise<void> {
    await this.pool.execute('UPDATE users SET avatar = ? WHERE id = ?', [avatarUrl, userId]);
  }
}
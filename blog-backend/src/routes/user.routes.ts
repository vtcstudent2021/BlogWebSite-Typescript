// blog-backend/src/routes/user.routes.ts
import Router from 'koa-router';
import { registerUser, loginUser } from '../controllers/user.controller';

const router = new Router({ prefix: '/users' });

router.post('/register', registerUser);
router.post('/login', loginUser);


export default router;
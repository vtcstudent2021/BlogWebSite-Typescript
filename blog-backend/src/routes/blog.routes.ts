import Router from 'koa-router';
import {
  getAllBlogs,
  getSingleBlog,
  createNewBlog,
  updateExistingBlog,
  deleteExistingBlog
} from '../controllers/blog.controller';

const router = new Router({ prefix: '/blogs' });

router.get('/', getAllBlogs);
router.get('/:id', getSingleBlog);
router.post('/', createNewBlog);
router.put('/:id', updateExistingBlog);
router.delete('/:id', deleteExistingBlog);

export default router;
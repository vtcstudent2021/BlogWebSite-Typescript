import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogItem from '../components/BlogItem';
import { Link } from 'react-router-dom';

const BlogListPage: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://silver-disco-vjpx74vgjv7f64p-3000.app.github.dev/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-list-page">
      <h1>Blog List</h1>
      <Link to="/create" className="create-blog-link">
        Create New Blog
      </Link>
      {blogs.map((blog) => (
        <BlogItem key={blog.id} {...blog} />
      ))}
    </div>
  );
};

export default BlogListPage;
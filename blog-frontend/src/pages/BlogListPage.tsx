import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogItem from '../components/BlogItem';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const BlogListPage: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://potential-space-carnival-57vwp6q4pwg24q57-3000.app.github.dev/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-list-page">
      <Navbar />
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
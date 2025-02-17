import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<any | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://silver-disco-vjpx74vgjv7f64p-3000.app.github.dev/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="blog-detail-page">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>Created at: {blog.createdAt}</p>
      <Link to={`/edit/${id}`} className="edit-blog-link">
        Edit Blog
      </Link>
    </div>
  );
};

export default BlogDetailPage;
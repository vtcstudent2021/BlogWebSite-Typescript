import React from 'react';
import { Link } from 'react-router-dom';

interface BlogItemProps {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ id, title, content, createdAt }) => {
  return (
    <div className="blog-item">
      <h2>
        <Link to={`/blogs/${id}`}>{title}</Link>
      </h2>
      <p>{content.slice(0, 100)}...</p>
      <p>Created at: {createdAt}</p>
    </div>
  );
};

export default BlogItem;
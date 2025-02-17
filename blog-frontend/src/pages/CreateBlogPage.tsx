import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';

const CreateBlogPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('https://silver-disco-vjpx74vgjv7f64p-3000.app.github.dev/blogs', { title, content });
      navigate('/');
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <div className="create-blog-page">
      <h1>Create Blog</h1>
      <BlogForm
        title={title}
        content={content}
        onTitleChange={(e) => setTitle(e.target.value)}
        onContentChange={(e) => setContent(e.target.value)}
        onSubmit={handleSubmit}
        submitText="Create"
      />
    </div>
  );
};

export default CreateBlogPage;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';

const EditBlogPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/blogs/${id}`);
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.put(`https://silver-disco-vjpx74vgjv7f64p-3000.app.github.dev/blogs/${id}`, { title, content });
      navigate(`/blogs/${id}`);
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div className="edit-blog-page">
      <h1>Edit Blog</h1>
      <BlogForm
        title={title}
        content={content}
        onTitleChange={(e) => setTitle(e.target.value)}
        onContentChange={(e) => setContent(e.target.value)}
        onSubmit={handleSubmit}
        submitText="Update"
      />
    </div>
  );
};

export default EditBlogPage;
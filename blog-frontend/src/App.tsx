// blog-frontend/src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogListPage from './pages/BlogListPage';
import CreateBlogPage from './pages/CreateBlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import EditBlogPage from './pages/EditBlogPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserProfilePage from './pages/UserProfilePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateBlogPage />} />
        <Route path="/blogs/:id" element={<BlogDetailPage />} />
        <Route path="/edit/:id" element={<EditBlogPage />} />
        <Route path="/blogs" element={<BlogListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
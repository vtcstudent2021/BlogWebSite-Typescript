import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogListPage from './pages/BlogListPage';
import CreateBlogPage from './pages/CreateBlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import EditBlogPage from './pages/EditBlogPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogListPage />} />
        <Route path="/create" element={<CreateBlogPage />} />
        <Route path="/blogs/:id" element={<BlogDetailPage />} />
        <Route path="/edit/:id" element={<EditBlogPage />} />
      </Routes>
    </Router>
  );
};

export default App;
import React from 'react';
import Navbar from '../components/Navbar';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Navbar />
      <h1>Welcome to the Blog Website</h1>
      <p>This is the home page of the blog website. You can navigate to different pages using the navbar above.</p>
    </div>
  );
};

export default HomePage;
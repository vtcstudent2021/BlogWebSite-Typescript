// blog-frontend/src/pages/UserProfilePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';


const UserProfilePage: React.FC = () => {
  const navigate = useNavigate();

  // 从本地存储中获取用户信息
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    // 清除本地存储中的用户信息
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="user-profile-page">
      <h1>User Profile</h1>
      {user.username ? (
        <div>
          <p>Username: {user.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Please login to view your profile.</p>
      )}
    </div>
  );
};

export default UserProfilePage;
import React, { useState } from 'react';
import LoginModal from './LoginModal';  // Import the Login Modal component

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const handleLogin = (username, password) => {
    // Simple static authentication
    if (username === 'admin' && password === 'admin123') {
      setUserRole('admin');
      alert('Logged in as Admin');
    } else if (username === 'user' && password === 'user123') {
      setUserRole('user');
      alert('Logged in as User');
    } else {
      alert('Invalid credentials');
    }
    handleCloseLogin();
  };

  return (
    <div>
      {/* Button to trigger login modal */}
      <Button variant="primary" onClick={handleShowLogin}>
        Login
      </Button>

      {/* Render login modal */}
      <LoginModal show={showLogin} handleClose={handleCloseLogin} handleLogin={handleLogin} />

      {/* Content based on role */}
      {userRole && (
        <div>
          <h2>Welcome, {userRole === 'admin' ? 'Admin' : 'User'}!</h2>
          {/* Role-based content or restrictions */}
          {userRole === 'admin' ? (
            <p>You have access to admin features.</p>
          ) : (
            <p>You have access to general user features.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;

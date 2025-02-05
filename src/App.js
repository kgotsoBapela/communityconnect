import React,  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BikeList from './components/BikeList';
import BorrowingHistory from './components/BorrowingHistory';
// import DueDateNotification from './components/DueDateNotification';
import UserProfile from './components/UserProfile';
import NavigationBar from './components/NavigationBar';
// import BikeDetails from './components/BikeDetails';
// import { Button } from 'react-bootstrap';
import Login from './components/Login';
import About from './components/AboutUs';
// import axios from 'axios';


const App = () => {
  // State for login modal visibility and user role
  const [showLogin, setShowLogin] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userID, setUserID] = useState(null);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  // Function called on successful login
  const handleLoginSuccess = (userID, role) => {
    setUserID(userID);
    setUserRole(role);
    setShowLogin(false); // Close login modal on success
  };

  // Login handler function to assign user roles
  // const handleLogin = (username, password) => {
  //   if (username === 'admin' && password === 'admin123') {
  //     setUserRole('admin');
  //     alert('Logged in as Admin');
  //     handleCloseLogin();
  //   } else if (username === 'user' && password === 'user123') {
  //     setUserRole('user');
  //     alert('Logged in as User');
  //     handleCloseLogin();
  //   } else {
  //     alert('Invalid credentials');
  //   }
  // };

  useEffect(() => {
    // Optional: Perform role checks or fetch current user role on component mount
    // This can be tied to backend logic later if needed.
  }, []);

  //Return Methods
  return (
    <Router>   
      <NavigationBar />
      <div className="App">

        {/* Login Modal */}
        <Login show={showLogin} handleClose={handleCloseLogin} handleLogin={handleLoginSuccess} />
                {/* Content based on user role */}
                {userRole && (
          <div className="role-based-content">
            <h2>Welcome, {userRole === 'admin' ? 'Admin' : 'User'}!</h2>
            {/* Conditional role-based access */}
            {userRole === 'admin' ? (
              <p>You have access to admin features.</p>
            ) : (
              <p>You have access to general user features.</p>
            )}
          </div>
        )}

        {/* <DueDateNotification />       */}
        <Routes>
          <Route path="/" element={<BikeList userRole={userRole} handleShowLogin={handleShowLogin}/>} />
          <Route path="/history" element={<BorrowingHistory/>} />
          <Route path="/profile" element={<UserProfile userId={'1'} />} />
          <Route path="/about" element={<About/>} />
          {/* <Route path="/bikes/:id" element={BikeDetails} />  Bike Details route */}
        </Routes>
      </div>
    </Router>
    
  );
};

export default App;

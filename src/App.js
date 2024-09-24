import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BikeList from './components/BikeList';
import BorrowingHistory from './components/BorrowingHistory';
import DueDateNotification from './components/DueDateNotification';
import UserProfile from './components/UserProfile';
import NavigationBar from './components/NavigationBar';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <div className="App">
        <DueDateNotification />
        <Routes>
          <Route path="/" element={<BikeList />} />
          <Route path="/history" element={<BorrowingHistory />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

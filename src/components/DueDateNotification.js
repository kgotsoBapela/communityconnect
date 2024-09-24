import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';

const DueDateNotification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      // Placeholder API call to fetch due date notifications
      const response = await fetch('/api/notifications');
      const data = await response.json();
      setNotifications(data);
    };

    fetchNotifications();
  }, []);

  return (
    <>
      {notifications.length > 0 && (
        notifications.map((notification) => (
          <Alert key={notification.id} variant={notification.isOverdue ? 'danger' : 'warning'}>
            {notification.isOverdue 
              ? `Bike "${notification.bikeModel}" is overdue! Please return it.` 
              : `Bike "${notification.bikeModel}" is due on ${notification.dueDate}.`}
          </Alert>
        ))
      )}
    </>
  );
};

export default DueDateNotification;

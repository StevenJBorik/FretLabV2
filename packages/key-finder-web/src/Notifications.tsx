import { h, FunctionComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import './Notifications.css';

interface NotificationProps {
  id: number;
  title: string;
  description: string;
  icon: string; // URL or path to the icon image
}

// This is a mock function, replace with actual data fetching logic
const fetchNotifications = async (): Promise<NotificationProps[]> => {
  // This would be replaced with an actual API call
  return [
    {
      id: 1,
      title: "You've earned a new badge!",
      description:
        "Great job! You've earned a new badge. Go ahead and check it out.",
      icon: 'badge-icon.png',
    },
    {
      id: 2,
      title: 'Discover these hidden features',
      description:
        "Pssst, we've got some inside information for you! Here are 6 hidden FretLabs features that will make your fingers itch to get jamming.",
      icon: 'features-icon.png',
    },
    // Add more notifications here
  ];
};

const Notifications: FunctionComponent = () => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  useEffect(() => {
    const getNotifications = async () => {
      const fetchedNotifications = await fetchNotifications();
      setNotifications(fetchedNotifications);
    };

    getNotifications();
  }, []);

  return (
    <div class="notifications-container">
      <h1>Notifications</h1>
      <div class="notifications-list">
        {notifications.map((notification) => (
          <div class="notification-item" key={notification.id}>
            <img
              src={notification.icon}
              alt="Notification Icon"
              class="notification-icon"
            />
            <div class="notification-content">
              <h2 class="notification-title">{notification.title}</h2>
              <p class="notification-description">{notification.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;

import { useState, useEffect } from 'preact/hooks';
import { route } from 'preact-router';
import { h, FunctionComponent } from 'preact';

interface SettingsProps {
  path: string;
}

const Settings: FunctionComponent<SettingsProps> = ({ path }) => {
  const [email, setEmail] = useState('');
  const [profileVisibility, setProfileVisibility] = useState('private');
  const [receiveEmails, setReceiveEmails] = useState(true);

  useEffect(() => {
    // Fetch user settings on component mount
    fetch('/api/settings', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setEmail(data.email);
        setProfileVisibility(data.profileVisibility);
        setReceiveEmails(data.receiveEmails);
      });
  }, []);

  const updateSettings = (endpoint, data) => {
    return fetch(endpoint, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(data),
    });
  };

  const saveDetails = () => {
    Promise.all([
      updateSettings('/api/settings/email', { email }),
      updateSettings('/api/settings/profile-visibility', { profileVisibility }),
      updateSettings('/api/settings/email-subscription', { receiveEmails }),
    ])
      .then(() => {
        console.log('Settings updated');
        // Inform the user of the update, e.g., using a toast notification
      })
      .catch((error) => {
        console.error('Error updating settings:', error);
      });
  };

  const handleChangePassword = () => {
    // Implement change password logic
    route('/change-password');
  };

  return (
    <div class="settings-container">
      <h1>Account Settings</h1>
      {/* ...other settings code */}
      <button onClick={saveDetails}>Save Details</button>
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
};

export default Settings;

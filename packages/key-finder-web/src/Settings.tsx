import { useState, useEffect } from 'preact/hooks';
import { route } from 'preact-router';
import { h, FunctionComponent } from 'preact';
import './Settings.css';

const API_URL = 'http://localhost:8080'; // Define API_URL

interface SettingsProps {
  path: string;
}

const Settings: FunctionComponent<SettingsProps> = ({ path }) => {
  const [email, setEmail] = useState('');
  const [profileVisibility, setProfileVisibility] = useState('private');
  const [receiveEmails, setReceiveEmails] = useState(true);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  useEffect(() => {
    // Fetch user settings on component mount
    fetch(`${API_URL}/api/settings`, {
      // Add API_URL here
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

  const handleApiResponse = (response: Response) => {
    console.log('API Response:', response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  };

  const updateSettings = (endpoint, data) => {
    return fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(data),
    });
  };

  const handleEmailChange = (e: Event) => {
    setEmail((e.target as HTMLInputElement).value);
  };

  const handleProfileVisibilityChange = (e: Event) => {
    setProfileVisibility((e.target as HTMLSelectElement).value);
  };

  const handleReceiveEmailsChange = (e: Event) => {
    setReceiveEmails((e.target as HTMLInputElement).checked);
  };

  const saveDetails = () => {
    Promise.all([
      updateSettings('/api/settings/email', { email }),
      updateSettings('/api/settings/profile-visibility', { profileVisibility }),
      // updateSettings('/api/settings/email-subscription', { receiveEmails }),
    ])
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((data) => {
        // Assuming each response has a 'message' field with a success message
        data.forEach((item) => {
          console.log(item.message);
        });
        alert('Settings updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating settings:', error);
        alert('Failed to update settings.');
      });
  };

  const handleChangePasswordClick = () => {
    console.log('Current Password:', currentPassword);
    console.log('New Password:', newPassword);

    fetch(`${API_URL}/api/settings/change-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ currentPassword, newPassword }),
    })
      .then(handleApiResponse)
      .then((data) => {
        console.log(data.message);
        alert('Password changed successfully!');
        // Clear the password fields after a successful password change
        setCurrentPassword('');
        setNewPassword('');
        setPasswordError(''); // Clear any previous error message
      })
      .catch((error) => {
        setPasswordError(
          'Failed to change password. Please check your current password.'
        );
      });
  };

  const handleCurrentPasswordChange = (e: Event) => {
    setCurrentPassword((e.target as HTMLInputElement).value);
  };

  const handleNewPasswordChange = (e: Event) => {
    setNewPassword((e.target as HTMLInputElement).value);
  };

  return (
    <div class="settings-container">
      <h1>Account Settings</h1>
      <div class="setting">
        <label for="email">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onInput={handleEmailChange}
        />
      </div>
      <div class="setting">
        <label for="profile-visibility">My Profile</label>
        <select
          id="profile-visibility"
          value={profileVisibility}
          onChange={handleProfileVisibilityChange}
        >
          <option value="private">Private</option>
          <option value="public">Public</option>
        </select>
      </div>
      <div class="setting">
        {/* <label for="receive-emails">
          <input
            type="checkbox"
            id="receive-emails"
            checked={receiveEmails}
            onChange={handleReceiveEmailsChange}
          />
          Receive email notifications
        </label> */}
      </div>
      <div class="setting">
        <label for="currentPassword">Current Password</label>
        <div class="password-input">
          <input
            type={showCurrentPassword ? 'text' : 'password'}
            id="currentPassword"
            value={currentPassword}
            onInput={handleCurrentPasswordChange}
          />
          <button
            type="button"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
          >
            {showCurrentPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {passwordError && <p class="error">{passwordError}</p>}
      </div>
      <div class="setting">
        <label for="newPassword">New Password</label>
        <div class="password-input">
          <input
            type={showNewPassword ? 'text' : 'password'}
            id="newPassword"
            value={newPassword}
            onInput={handleNewPasswordChange}
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showNewPassword ? 'Hide' : 'Show'}
          </button>
          {passwordError && <p class="error">{passwordError}</p>}
        </div>
      </div>
      <div class="links">
        <button onClick={saveDetails}>Save Details</button>
        <button onClick={handleChangePasswordClick}>Change Password</button>
      </div>
    </div>
  );
};

export default Settings;

// settings.tsx

import { useState } from 'preact/hooks';
import { route } from 'preact-router';
import { h, FunctionComponent } from 'preact';
// import './Settings.css'; // Assume we have some CSS for styling

interface SettingsProps {
  path: string; // Add this if you're passing 'path' as a prop
}

const Settings: FunctionComponent<SettingsProps> = ({ path }) => {
  const [email, setEmail] = useState('');
  const [profileVisibility, setProfileVisibility] = useState('private');
  const [receiveEmails, setReceiveEmails] = useState(true);

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
    console.log('Save settings');
    // Here you would usually make an API call to save the settings
  };

  const goToChangePassword = () => {
    route('/change-password');
  };

  const goToUpdateEmail = () => {
    route('/update-email');
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
        <label for="receive-emails">
          <input
            type="checkbox"
            id="receive-emails"
            checked={receiveEmails}
            onChange={handleReceiveEmailsChange}
          />
          Receive email notifications
        </label>
      </div>
      <div class="links">
        <a href="#" onClick={goToChangePassword}>
          Change Password
        </a>
        <a href="#" onClick={goToUpdateEmail}>
          Update Email Address
        </a>
      </div>
      <button onClick={saveDetails}>Save Details</button>
    </div>
  );
};

export default Settings;

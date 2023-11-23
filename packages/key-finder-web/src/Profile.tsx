import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import './Profile.css'; // Your CSS file path here

const API_URL = 'http://localhost:8080'; // Define API_URL

interface ProfileProps {
  // Add any props you need here
}

interface ProfileState {
  username: string;
  memberType: string;
  profileType: string;
  description: string;
  editingDescription: boolean;
  message: string; // Add this line
  // Add any other state properties you need
}

class Profile extends Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {
      username: 'Steven Borik',
      memberType: 'Free member',
      profileType: 'Private',
      description: '',
      editingDescription: false,
      message: '', // Initialize message as empty string
      // Initialize other state properties as needed
    };
  }

  saveProfile = async () => {
    const { username, memberType, profileType, description } = this.state;
    try {
      const response = await fetch(`${API_URL}/profile`, {
        // Use API_URL here
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          memberType,
          profileType,
          description,
        }),
      });

      if (response.ok) {
        this.setState({ message: 'Profile updated successfully' }); // Set message state
        setTimeout(() => this.setState({ message: '' }), 3000); // Clear message state after 3 seconds
      } else {
        const errorData = await response.json();
        console.error('Profile update failed:', errorData.message);
        this.setState({
          message: 'Profile update failed: ' + errorData.message,
        }); // Set error message
      }
    } catch (error) {
      console.error('Network error when updating profile:', error);
      this.setState({ message: 'Network error when updating profile' }); // Set network error message
    }
  };

  // Method to handle image upload
  handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch('/upload', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: formData,
    });
    if (response.ok) {
      // Handle successful image upload...
    }
  };

  render() {
    const {
      username,
      memberType,
      profileType,
      description,
      editingDescription,
      message,
    } = this.state;
    return (
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-picture">
            {/* Placeholder for profile image */}
            <img src="/path-to-default-profile-image.jpg" alt={username} />
            <button
              onClick={() => {
                /* handle edit picture */
              }}
            >
              Edit
            </button>
          </div>
          <div className="profile-info">
            <h1>{username}</h1>
            <p>{memberType}</p>
            <p>
              {profileType} profile -{' '}
              <button
                onClick={() => {
                  /* handle profile type change */
                }}
              >
                change
              </button>
            </p>
            {editingDescription ? (
              <textarea
                value={description}
                onChange={(e) =>
                  this.setState({
                    description: (e.target as HTMLTextAreaElement).value,
                  })
                }
              ></textarea>
            ) : (
              <p onClick={() => this.setState({ editingDescription: true })}>
                {description ||
                  '+ Click here to introduce yourself to the community'}
              </p>
            )}
            {this.state.message && (
              <div className="success-message">{this.state.message}</div>
            )}
            <button onClick={this.saveProfile}>Save Profile</button>
          </div>
        </div>
        <div className="profile-body">
          <section>
            <h2>Lab Lists</h2>
            {/* Component or list rendering your lab lists */}
          </section>
          <section>
            <h2>History</h2>
            {/* Component or list rendering history items */}
          </section>
          {/* Continue with other sections as needed */}
        </div>
        <button
          onClick={() => {
            /* handle unlock premium */
          }}
        >
          Unlock Premium
        </button>
      </div>
    );
  }
}

export default Profile;

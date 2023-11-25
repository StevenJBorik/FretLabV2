import { h, Component, createRef } from 'preact';
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
  profilePicture: string; // Add this line to store the profile picture path

  // Add any other state properties you need
}

class Profile extends Component<ProfileProps, ProfileState> {
  fileInputRef = createRef();

  constructor(props: ProfileProps) {
    super(props);
    this.state = {
      username: '', // Initialize as empty
      memberType: '', // Initialize as empty
      profileType: '', // Initialize as empty
      description: '',
      editingDescription: false,
      message: '',
      profilePicture: '',
    };
  }

  componentDidMount() {
    this.fetchUserProfile();
    const profilePicture = localStorage.getItem('profilePicture');
    if (profilePicture) {
      this.setState({ profilePicture });
    }
  }

  handleEditPictureClick = () => {
    this.fileInputRef.current.click();
  };

  // Step 4: Handle file selection
  handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      this.handleImageUpload(target.files[0]);
    }
  };

  fetchUserProfile = async () => {
    try {
      const response = await fetch(`${API_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        this.setState({
          username: data.username,
          memberType: data.member_status,
          profileType: data.profile_type,
          description: data.bio,
        });
      } else {
        console.error('Failed to fetch profile data');
      }
    } catch (error) {
      console.error('Network error when fetching profile:', error);
    }
  };

  saveProfile = async () => {
    const { username, memberType, profileType, description } = this.state;
    try {
      const response = await fetch(`${API_URL}/profile`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        // Ensure the field names match the API's expected schema.
        body: JSON.stringify({
          username,
          member_status: memberType, // Assuming the field name expected by the API is `member_status`.
          profile_type: profileType, // Assuming the field name expected by the API is `profile_type`.
          bio: description, // Assuming the field name expected by the API is `bio`.
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
    const response = await fetch(`${API_URL}/upload-profile-picture`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: formData,
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('profilePicture', data.profilePicture); // Save the profile picture URL to localStorage
      this.setState({
        message: 'Image uploaded successfully',
        profilePicture: data.profilePicture, // Updated with the returned path
      });
      setTimeout(() => this.setState({ message: '' }), 3000);
    } else {
      const errorData = await response.json();
      this.setState({ message: 'Image upload failed: ' + errorData.message });
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
      profilePicture,
    } = this.state;
    return (
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-picture">
            {/* Placeholder for profile image */}
            <img src={profilePicture || '/images/SwanOne.png'} alt={username} />
            <button onClick={this.handleEditPictureClick}>Edit</button>
            <input
              type="file"
              ref={this.fileInputRef}
              style={{ display: 'none' }}
              onChange={this.handleFileChange}
              accept="image/png, image/jpeg" // Accept only images
            />
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
            {message && <div className="success-message">{message}</div>}
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

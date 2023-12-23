import { h, Component, createRef } from 'preact';
import { Router, Link, route } from 'preact-router'; // Make sure to import route
import './Profile.css'; // Your CSS file path here
import { SetlistContext } from './setListContext';

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
  userSetLists: any[];
  setlistId: number | null;
  currentSetlistSongs: any[];
  userHistory: any[]; // Add this to store user history
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
      userSetLists: [],
      setlistId: null,
      currentSetlistSongs: [],
      userHistory: [],
    };
  }

  componentDidMount() {
    this.fetchUserProfile();
    const profilePicture = localStorage.getItem('profilePicture');
    if (profilePicture) {
      this.setState({ profilePicture });
    }
    this.fetchUserSetlists();
    console.log('Component mounted');
    this.fetchUserHistory(); // Fetch user history
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

  fetchUserSetlists = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await fetch('http://localhost:8080/user-setlists', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const setlistsData = await response.json();
          console.log('Fetched setlists:', setlistsData);
          const firstSetlistId =
            setlistsData.length > 0 ? setlistsData[0].id : null;
          this.setState(
            {
              userSetLists: setlistsData,
              setlistId: firstSetlistId,
            },
            () => {
              if (this.state.setlistId) {
                this.fetchSetlistSongs(this.state.setlistId);
              }
            }
          );
        } else {
          console.error('Failed to fetch user setlists');
        }
      } catch (error) {
        console.error('Error fetching user setlists:', error);
      }
    }
  };

  fetchSetlistSongs = async (setlistId: number) => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await fetch(
          `http://localhost:8080/setlist-songs/${setlistId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const songsData = await response.json();
          this.setState({ currentSetlistSongs: songsData });
          console.log(
            'songdata state after setlist-songs api call:',
            this.state.currentSetlistSongs
          );
        } else {
          console.error('Failed to fetch setlist songs');
        }
      } catch (error) {
        console.error('Error fetching setlist songs:', error);
      }
    }
  };

  renderUserSetlists() {
    const { currentSetlistSongs } = this.state;
    console.log('Current setlist songs:', this.state.currentSetlistSongs);
    return (
      <div class="grid-container">
        {currentSetlistSongs.map((song, index) => (
          <div
            key={index}
            class="setlist-song"
            onClick={() => this.selectSetlist()}
          >
            <img
              src={song.thumbnail_url}
              alt={song.title}
              class="setlist-song-thumbnail"
            />
            <div class="setlist-info">
              {/* Additional song info can be added here */}
            </div>
          </div>
        ))}
      </div>
    );
  }

  selectSetlist = () => {
    const setlistId = this.state.setlistId;
    console.log('Selecting setlist with ID:', setlistId);
    route(`/fretlists/${setlistId}`);
  };

  fetchUserHistory = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await fetch(`${API_URL}/user-history`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const historyData = await response.json();
          this.setState({ userHistory: historyData });
        } else {
          console.error('Failed to fetch user history');
        }
      } catch (error) {
        console.error('Network error when fetching history:', error);
      }
    }
  };
  renderUserHistory() {
    const { userHistory } = this.state;
    if (userHistory.length === 0) {
      return <div class="user-history-container">No history to show.</div>;
    }

    const navigateToSongPage = (songId) => {
      route(`/song/${songId}`); // Navigate to the song page
    };

    return (
      <div class="user-history-container">
        <div class="history-items">
          {userHistory.map((item, index) => (
            <div
              key={index}
              class="history-item"
              onClick={() => navigateToSongPage(item.id)}
            >
              <img
                src={item.thumbnail_url}
                alt={item.title}
                class="history-thumbnail"
              />
              <div class="history-info">
                <div class="history-title">{item.title}</div>
                <div class="history-artist">{item.artist}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    const {
      username,
      memberType,
      profileType,
      description,
      editingDescription,
      message,
      profilePicture,
      userHistory,
    } = this.state;

    let userSetlistsContent = null;

    userSetlistsContent = this.renderUserSetlists();
    let userHistoryContent = this.renderUserHistory();

    return (
      <SetlistContext.Provider value={this.state.setlistId}>
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-picture">
              {/* Placeholder for profile image */}
              <img
                src={profilePicture || '/images/SwanOne.png'}
                alt={username}
              />
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
              {userSetlistsContent}
            </section>
            <section>
              <h2>History</h2>
              {userHistoryContent}
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
      </SetlistContext.Provider>
    );
  }
}

export default Profile;

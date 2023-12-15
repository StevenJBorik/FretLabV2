import 'preact/debug';
import { h, Component } from 'preact';
import { Router, Link, route } from 'preact-router'; // Make sure to import route
import Navigation from './Navigation';
import AudioFileKeyDetection from './AudioFileKeyDetection';
import Settings from './Settings';
import About from './About';
import Profile from './Profile';
import AuthModal from './AuthModal';
import SongPage from './SongPage';
import FretLists from './FretLists';
import { UserContext } from './context'; // import the context you created
import RouteContext from './RouteContext';
import { jwtVerify } from 'jose';

import './App.css';

const SECRET_KEY_BASE64 = 'gKHSkyVrtO9a2xm2/tnXIvHaGefr3fSU';
const secretKeyBinaryString = atob(SECRET_KEY_BASE64);
const secretKeyUint8Array = new Uint8Array(
  new ArrayBuffer(secretKeyBinaryString.length)
);

for (let i = 0; i < secretKeyBinaryString.length; i++) {
  secretKeyUint8Array[i] = secretKeyBinaryString.charCodeAt(i);
}

// Define the state interface
interface AppState {
  showModal: boolean;
  loggedInUser: string | null; // Corrected type to allow for null value
  userHistory: any[]; // Array to hold user history
  isDropdownOpen: boolean; // Add this to your state
  currentRoute: string; // Add this line
  userSetLists: any[];
}

class App extends Component<{}, AppState> {
  state: AppState = {
    showModal: false,
    loggedInUser: null,
    userHistory: [], // Initialize as an empty array
    isDropdownOpen: false, // Add this to your state
    currentRoute: '/', // Initialize with a default value, e.g., '/'
    userSetLists: [],
  };

  constructor() {
    super();
    // Bind the method to 'this' if you haven't used an arrow function
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentDidMount() {
    this.checkLoggedInStatus().then(() => {
      if (this.state.loggedInUser) {
        this.fetchUserHistory(); // Fetch history if user is logged in
        this.fetchUserSetlists(); // Add this line
      }
    });
    this.updateCurrentRoute();
  }

  updateCurrentRoute = () => {
    this.setState({ currentRoute: window.location.pathname });
  };

  handleRoute = (e) => {
    console.log('Route changed:', e.url);
    this.updateCurrentRoute();
  };

  handleNavLinkClick = () => {
    // Intentionally left blank to not toggle the modal on every nav link click
  };

  checkLoggedInStatus = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const userId = await this.getUserIdFromToken(token);
      if (userId) {
        const username = await this.getUsernameFromToken(token);
        if (username) {
          this.setState({ loggedInUser: username });
        } else {
          console.error('Failed to retrieve username from token');
        }
      }
    }
  };

  getUserIdFromToken = async (token) => {
    try {
      const { payload } = await jwtVerify(token, secretKeyUint8Array, {
        algorithms: ['HS256'],
      });
      return payload.user_id ? payload.user_id : null;
    } catch (error) {
      console.error('Error verifying token:', error);
      return null;
    }
  };

  getUsernameFromToken = async (token) => {
    try {
      const response = await fetch('http://localhost:8080/validate-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      if (response.ok) {
        // Assuming result.username contains the username
        return result.username; // Return the username if response is OK
      } else {
        console.error('Token validation failed:', result.message);
        return null; // Return null if there's an error
      }
    } catch (error) {
      console.error('Network error:', error);
      return null; // Return null if network error occurs
    }
  };

  toggleModal = () => {
    console.log('toggleModal called');
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  handleSuccessfulLogin = (username: string) => {
    console.log(username); // Add this line
    this.setState({ loggedInUser: username, showModal: false }); // Close the modal on successful login
    route('/'); // Navigate to homepage
  };

  handleLogout = () => {
    this.setState({ loggedInUser: null });
    localStorage.removeItem('token');
    route('/'); // Navigate to homepage
  };

  fetchUserHistory = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await fetch('http://localhost:8080/user-history', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const historyData = await response.json();
          this.setState({ userHistory: historyData });
        } else {
          console.error('Failed to fetch user history');
          // Handle error...
        }
      } catch (error) {
        console.error('Error fetching user history:', error);
        // Handle error...
      }
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
          this.setState({ userSetLists: setlistsData });
        } else {
          console.error('Failed to fetch user setlists');
          // Handle error...
        }
      } catch (error) {
        console.error('Error fetching user setlists:', error);
        // Handle error...
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
        <h2>Play again</h2>
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

  renderUserSetlists() {
    const { userSetLists } = this.state;
    if (userSetLists.length === 0) {
      return <div>No setlists to show.</div>;
    }

    // Render setlists
    return (
      <div>
        {userSetLists.map((setlist) => (
          <div key={setlist.id}>
            <h3>{setlist.name}</h3>
            {/* Render setlist details */}
          </div>
        ))}
      </div>
    );
  }

  toggleDropdown = () => {
    this.setState((prevState) => {
      console.log('Current state of isDropdownOpen:', prevState.isDropdownOpen);
      console.log('Toggling isDropdownOpen to:', !prevState.isDropdownOpen);
      return { isDropdownOpen: !prevState.isDropdownOpen };
    });
  };

  render() {
    const { showModal, loggedInUser, userHistory, currentRoute } = this.state;
    let userHistoryContent = null;

    // Check if the current route is the homepage
    if (loggedInUser && currentRoute === '/') {
      userHistoryContent = this.renderUserHistory();
    }

    return (
      <RouteContext.Provider value={currentRoute}>
        <UserContext.Provider value={loggedInUser}>
          <>
            <div class="top-bar">
              <div class="app-logo">
                <Link href="/">FretLabs</Link>
              </div>
              <Navigation
                onLoginClick={this.toggleModal}
                loggedInUser={loggedInUser}
                onLogout={this.handleLogout}
                onNavLinkClick={this.handleNavLinkClick}
              />
            </div>
            <div class="app-wrapper">
              {userHistoryContent}
              <Router onChange={this.handleRoute}>
                <AudioFileKeyDetection path="/file" />
                <Settings path="/settings" />
                <About path="/about" />
                <Profile path="/profile" />
                <FretLists path="/fretlists" />
                <SongPage path="/song/:songId" key={window.location.pathname} />
              </Router>
            </div>
            {showModal && (
              <AuthModal
                onSuccessfulLogin={this.handleSuccessfulLogin}
                onExit={this.toggleModal}
              />
            )}
          </>
        </UserContext.Provider>
      </RouteContext.Provider>
    );
  }
}

export default App;

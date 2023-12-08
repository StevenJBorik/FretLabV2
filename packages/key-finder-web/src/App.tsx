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
}

class App extends Component<{}, AppState> {
  state: AppState = {
    showModal: false,
    loggedInUser: null,
  };

  componentDidMount() {
    this.checkLoggedInStatus();
  }

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

  handleRoute = (e) => {
    console.log('Route changed:', e.url);
  };

  render() {
    const { showModal, loggedInUser } = this.state; // Destructure for cleaner code

    return (
      <>
        <div class="top-bar">
          <div class="app-logo">
            <Link href="/">FretLabs</Link>
          </div>
          <Navigation
            onLoginClick={this.toggleModal}
            loggedInUser={loggedInUser}
            onLogout={this.handleLogout}
            onNavLinkClick={this.handleNavLinkClick} // Remove or comment out this line
          />
        </div>
        <div class="app-wrapper">
          <Router onChange={this.handleRoute}>
            <AudioFileKeyDetection path="/file" />
            <Settings path="/settings" />
            <About path="/about" />
            <Profile path="/profile" />
            <SongPage path="/song/:songId" key={window.location.pathname} />
          </Router>
        </div>
        {showModal && (
          <AuthModal
            onSuccessfulLogin={this.handleSuccessfulLogin}
            onExit={this.toggleModal} // This prop needs to be handled in AuthModal if you want to allow closing the modal
          />
        )}
      </>
    );
  }
}

export default App;

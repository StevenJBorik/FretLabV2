import { h, Component } from 'preact';
import { Router, Link, route } from 'preact-router'; // Make sure to import route
import Navigation from './Navigation';
import AudioFileKeyDetection from './AudioFileKeyDetection';
import Settings from './Settings';
import About from './About';
import AuthModal from './AuthModal';

import './App.css';

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
            onNavLinkClick={this.toggleModal} // Pass toggleModal here to be called on link click
          />
        </div>
        <div class="app-wrapper">
          <Router>
            <AudioFileKeyDetection path="/file" />
            <Settings path="/settings" />
            <About path="/about" />
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

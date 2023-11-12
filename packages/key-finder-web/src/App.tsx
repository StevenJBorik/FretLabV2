import { h, Component } from 'preact';
import { Router, Link } from 'preact-router';
import Navigation from './Navigation';
import AudioFileKeyDetection from './AudioFileKeyDetection';
import Settings from './Settings';
import About from './About';
import AuthModal from './AuthModal'; // Make sure to import AuthModal

import './App.css';

// Define the state interface
interface AppState {
  showModal: boolean;
}

class App extends Component<{}, AppState> {
  // Define the state using the AppState interface
  state: AppState = {
    showModal: false,
  };

  // Method to toggle the modal
  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  render() {
    console.log('App - render');
    return (
      <>
        <div class="top-bar">
          <div class="app-logo">
            <Link href="/">FretLabs</Link>
          </div>
          <Navigation onLoginClick={this.toggleModal} />{' '}
          {/* Pass the toggle method as a prop to Navigation */}
        </div>
        <div class="app-wrapper">
          <Router>
            <AudioFileKeyDetection path="/file" />
            <Settings path="/settings" />
            <About path="/about" />
          </Router>
        </div>
        {this.state.showModal && <AuthModal />}{' '}
        {/* Conditionally render the AuthModal */}
      </>
    );
  }
}

export default App;

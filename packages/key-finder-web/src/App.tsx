import { h, Fragment, Component, createRef } from 'preact';
import { Router, Link } from 'preact-router';
import Navigation from './Navigation';
import AudioFileKeyDetection from './AudioFileKeyDetection';
import Settings from './Settings';
import About from './About';

import './App.css';

class App extends Component {
  render() {
    console.log('App - render');
    return (
      <>
        <div class="top-bar">
          <div class="app-logo">
            <Link href="/">keyfinder</Link>
          </div>
          <Navigation />
        </div>
        <div class="app-wrapper">
          <Router>
            <AudioFileKeyDetection path="/file" />
            <Settings path="/settings" />
            <About path="/about" />
          </Router>
        </div>
      </>
    );
  }
}

export default App;

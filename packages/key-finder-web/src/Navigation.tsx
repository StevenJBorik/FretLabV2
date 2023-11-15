import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import './Navigation.css';

interface NavigationProps {
  onLoginClick: () => void;
  loggedInUser: string | null; // If the user is not logged in, this should be able to be null
  onLogout: () => void; // Function to handle user logout
}
interface State {
  navOpen: boolean;
}

class Navigation extends Component<NavigationProps, State> {
  state = {
    navOpen: false,
  };

  closeNav = () => {
    this.setState({ navOpen: false });
  };

  render({ onLoginClick, loggedInUser, onLogout }) {
    const { navOpen } = this.state;
    return (
      <nav
        class={['navigation-wrapper', navOpen ? 'navigation-open' : ''].join(
          ' '
        )}
      >
        <button onClick={() => this.setState({ navOpen: true })}>☰</button>
        <div class="links-container">
          <Link href="/live" activeClassName="active" onClick={this.closeNav}>
            Catalog
          </Link>
          <Link href="/file" activeClassName="active" onClick={this.closeNav}>
            Play
          </Link>
          <Link href="/" activeClassName="active" onClick={this.closeNav}>
            Pricing
          </Link>
          <Link href="/" activeClassName="active" onClick={this.closeNav}>
            Fretlists
          </Link>
          <Link href="/" activeClassName="active" onClick={this.closeNav}>
            Help
          </Link>
          <Link href="/about" activeClassName="active" onClick={this.closeNav}>
            About
          </Link>
          <Link href="/" activeClassName="active" onClick={this.closeNav}>
            ToS
          </Link>
          {loggedInUser ? (
            <div class="user-container">
              <button onClick={onLogout} class="auth-toggle">
                {loggedInUser} | Log Out
              </button>
            </div>
          ) : (
            <button onClick={onLoginClick} class="auth-toggle">
              Sign up | Login
            </button>
          )}
        </div>
      </nav>
    );
  }
}

export default Navigation;

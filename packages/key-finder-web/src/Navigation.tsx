import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import './Navigation.css';

interface NavigationProps {
  onLoginClick: () => void;
  loggedInUser: string | null;
  onLogout: () => void;
  onNavLinkClick: () => void;
}

interface State {
  navOpen: boolean;
  userDropdownOpen: boolean;
}

class Navigation extends Component<NavigationProps, State> {
  state = {
    navOpen: false,
    userDropdownOpen: false,
  };

  toggleUserDropdown = () => {
    console.log('Toggling Dropdown'); // Add this line
    this.setState((prevState) => ({
      userDropdownOpen: !prevState.userDropdownOpen,
    }));
  };

  closeNav = () => {
    this.setState({ navOpen: false });
    this.props.onNavLinkClick(); // Ensures that if the nav is open, it will close
  };

  closeUserDropdown = () => {
    this.setState({ userDropdownOpen: false });
  };

  render({ onLoginClick, loggedInUser, onLogout }) {
    const { navOpen, userDropdownOpen } = this.state;
    console.log('Logged in user: ', loggedInUser); // This should log the username
    console.log('Dropdown state: ', userDropdownOpen); // Debug: Check dropdown state

    return (
      <nav
        class={['navigation-wrapper', navOpen ? 'navigation-open' : ''].join(
          ' '
        )}
      >
        {/* <button onClick={() => this.setState({ navOpen: true })}>☰</button> */}
        <button className="menu-toggle">☰</button>
        <div class="links-container">
          <Link href="/file" activeClassName="active" onClick={this.closeNav}>
            Play
          </Link>
          <Link href="/live" activeClassName="active" onClick={this.closeNav}>
            Catalog
          </Link>
          <Link
            href="/profile"
            activeClassName="active"
            onClick={this.closeNav}
          >
            My Profile
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

          {/* User dropdown or login/signup button */}
          {loggedInUser ? (
            <div class="user-container">
              <button onClick={this.toggleUserDropdown} class="user-toggle">
                {loggedInUser}
              </button>
              {userDropdownOpen && (
                <div
                  class={[
                    'user-dropdown',
                    userDropdownOpen ? 'user-dropdown-active' : '',
                  ].join(' ')}
                >
                  <Link href="/profile" onClick={this.closeUserDropdown}>
                    My Profile
                  </Link>
                  <Link href="/notifications" onClick={this.closeUserDropdown}>
                    Notifications
                  </Link>
                  <Link
                    href="/my-fretlabs-bench"
                    onClick={this.closeUserDropdown}
                  >
                    Lab Lists
                  </Link>
                  <Link href="/settings" onClick={this.closeUserDropdown}>
                    Settings
                  </Link>
                  <button onClick={onLogout} class="logout-btn-navbar">
                    Log out
                  </button>
                </div>
              )}
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

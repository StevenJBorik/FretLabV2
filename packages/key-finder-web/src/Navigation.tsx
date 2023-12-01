import { h, Component, createRef } from 'preact';
import { Link } from 'preact-router/match';
import debounce from 'lodash.debounce'; // You may need to install this with npm or yarn
import { route } from 'preact-router';
import './Navigation.css';

const API_URL = 'http://localhost:8080'; // Define API_URL

interface NavigationProps {
  onLoginClick: () => void;
  loggedInUser: string | null;
  onLogout: () => void;
  onNavLinkClick: () => void;
}

interface State {
  navOpen: boolean;
  userDropdownOpen: boolean;
  searchQuery: string;
  searchResults: any[]; // Adjust as per the structure of your search results
  showSuggestions: boolean;
}

class Navigation extends Component<NavigationProps, State> {
  state = {
    navOpen: false,
    userDropdownOpen: false,
    searchQuery: '',
    searchResults: [],
    showSuggestions: false,
  };

  componentDidMount() {
    // Attach event listener to hide suggestions when clicking outside
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    // Remove the event listener when the component unmounts
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    // If the clicked element is not within the search-container, hide suggestions
    if (
      this.state.showSuggestions &&
      (!this.searchContainerRef.current ||
        !this.searchContainerRef.current.contains(event.target))
    ) {
      this.setState({ showSuggestions: false });
    }
  };

  // Ref for the search container
  searchContainerRef = createRef();

  toggleNav = () => {
    this.setState((prevState) => ({
      navOpen: !prevState.navOpen,
    }));
  };

  // Debounced search function
  search = debounce(async (query) => {
    // Call your API endpoint here with the search query
    const response = await fetch(
      `${API_URL}/search?q=${encodeURIComponent(query)}`
    );
    const results = await response.json();
    // Update state with the search results
    this.setState({ searchResults: results, showSuggestions: true });
  }, 300);

  handleSearchInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    this.setState({ searchQuery: target.value });
    if (target.value.trim()) {
      this.search(target.value.trim());
    } else {
      this.setState({ searchResults: [], showSuggestions: false });
    }
  };

  selectSearchResult = (result) => {
    // Navigate to the song-specific page here
    // For example, using preact-router's route function:
    route(`/song/${result.id}`);
    // Hide suggestions
    this.setState({ showSuggestions: false, searchQuery: '' });
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
    const {
      navOpen,
      userDropdownOpen,
      searchQuery,
      searchResults,
      showSuggestions,
    } = this.state;
    console.log('Logged in user: ', loggedInUser); // This should log the username
    console.log('Dropdown state: ', userDropdownOpen); // Debug: Check dropdown state

    return (
      <nav
        class={['navigation-wrapper', navOpen ? 'navigation-open' : ''].join(
          ' '
        )}
      >
        {/* Search bar */}
        <div class="search-container" ref={this.searchContainerRef}>
          <input
            type="search"
            value={searchQuery}
            onInput={this.handleSearchInputChange}
            placeholder="Search songs or artists..."
          />
          {showSuggestions && (
            <div class="search-suggestions">
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  class="search-suggestion-item"
                  onClick={() => this.selectSearchResult(result)}
                >
                  {result.title} by {result.artist}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* <button onClick={() => this.setState({ navOpen: true })}>☰</button> */}
        <button className="menu-toggle" onClick={this.toggleNav}>
          ☰
        </button>
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

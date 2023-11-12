import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import './Navigation.css';

interface NavigationProps {
  onLoginClick: () => void;
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

  render({ onLoginClick }) {
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
          <button onClick={onLoginClick} class="auth-toggle">
            Sign up | Login
          </button>
        </div>
      </nav>
    );
  }
}

export default Navigation;

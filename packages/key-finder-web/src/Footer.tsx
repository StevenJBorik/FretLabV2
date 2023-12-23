import { h, FunctionComponent } from 'preact';
import { Link } from 'preact-router/match';
import './Footer.css';

const Footer: FunctionComponent = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <section className="footer-section app-info">
          <h2>Fretlabs</h2>
          <p>
            Master any scale with your favorite songs and transform your
            practice sessions.
          </p>
          <div className="social-media-icons">
            {/* Icons sourced from a public domain or appropriately licensed for use */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-instagram"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-twitter"></i>
            </a>
          </div>
        </section>
        <section className="footer-section">
          <h3>Play</h3>
          <Link href="/artists">Artists</Link>
          <Link href="/setlists">FretLists</Link>
        </section>
        <section className="footer-section">
          <h3>Support</h3>
          <Link href="/help">Help</Link>
          <Link href="/terms-and-conditions">ToS</Link>
        </section>
        <section className="footer-section">
          <h3>About</h3>
          <Link href="/about">About Fretlabs</Link>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

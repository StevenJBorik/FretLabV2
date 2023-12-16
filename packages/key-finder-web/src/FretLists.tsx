import { h, Component } from 'preact';
import { jwtVerify } from 'jose'; // Ensure this is imported if needed for token verification
import './Fretlists.css';

const API_URL = 'http://localhost:8080'; // API URL
const SECRET_KEY_BASE64 = 'gKHSkyVrtO9a2xm2/tnXIvHaGefr3fSU';
const secretKeyBinaryString = atob(SECRET_KEY_BASE64);
const secretKeyUint8Array = new Uint8Array(
  new ArrayBuffer(secretKeyBinaryString.length)
);

for (let i = 0; i < secretKeyBinaryString.length; i++) {
  secretKeyUint8Array[i] = secretKeyBinaryString.charCodeAt(i);
}

class Fretlists extends Component {
  state = {
    setlists: [],
    loggedInUser: null,
  };

  componentDidMount() {
    this.checkLoggedInStatus();
  }

  checkLoggedInStatus = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const { payload } = await jwtVerify(token, secretKeyUint8Array, {
          algorithms: ['HS256'],
        });
        if (payload.user_id) {
          this.setState({ loggedInUser: payload.user_id });
          this.fetchUserSetlists();
        }
      } catch (error) {
        console.error('Error verifying token:', error);
      }
    }
  };

  fetchUserSetlists = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await fetch(`${API_URL}/user-setlists`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const setlists = await response.json();
          this.setState({ setlists });
        } else {
          console.error('Failed to fetch setlists');
        }
      } catch (error) {
        console.error('Error fetching user setlists:', error);
      }
    }
  };

  render() {
    const { setlists } = this.state;
    const recentSetlists = setlists.slice(0, 4); // Assuming the setlists are ordered by most recent

    return (
      <div>
        <h2>Favorites</h2>
        <div class="recent-setlists-grid">
          {recentSetlists.length === 0 ? (
            <p>No recent setlists found</p>
          ) : (
            recentSetlists.map((setlist, index) => (
              <div key={index} class="setlist-preview">
                {/* Display setlist preview */}
                <img src={setlist.thumbnail_url} alt={setlist.name} />
                <span>{setlist.name}</span>
              </div>
            ))
          )}
        </div>
        <div class="full-setlist">
          {setlists.map((setlist, index) => (
            <div key={index} class="setlist-item">
              {/* Full setlist details */}
              <h3>{setlist.name}</h3>
              {/* Additional details can be rendered here */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Fretlists;

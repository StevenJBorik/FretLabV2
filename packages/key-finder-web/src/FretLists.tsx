import { h, Component } from 'preact';
import { Router, Link, route } from 'preact-router'; // Make sure to import route
import { SetlistContext } from './setListContext'; // Import SetlistContext
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
  static contextType = SetlistContext; // Assign SetlistContext to the class
  state = {
    setlists: [],
    currentSetlistSongs: [], // Initialize this state
    loggedInUser: null,
    selectedSetlistId: null, // Newly added state to track the selected setlist
  };

  componentDidMount() {
    this.checkLoggedInStatus();
    const setlistId = this.context; // Context is accessed directly in class components
    console.log('Received setlistId from context in Fretlists:', setlistId); // Log the setlistId from context
    if (setlistId) {
      this.fetchSetlistSongs(setlistId);
    }
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

  fetchSetlistSongs = async (setlistId: number) => {
    console.log('Fetching songs for setlistId:', setlistId); // Log the setlistId used for fetching songs
    this.setState({ selectedSetlistId: setlistId });

    const token = localStorage.getItem('token');
    if (token && setlistId) {
      try {
        const response = await fetch(`${API_URL}/setlist-songs/${setlistId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const songsData = await response.json();
          this.setState({ currentSetlistSongs: songsData });
        } else {
          console.error('Failed to fetch setlist songs');
        }
      } catch (error) {
        console.error('Error fetching setlist songs:', error);
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
          console.log('Fetched setlists:', setlists); // Log the fetched setlists data

          this.setState({ setlists });
        } else {
          console.error('Failed to fetch setlists');
        }
      } catch (error) {
        console.error('Error fetching user setlists:', error);
      }
    }
  };

  selectSetlist = (setlistId: number) => {
    console.log('Selecting setlist with ID:', setlistId); // Log the selected setlistId
    this.setState({ setlistId }, () => {
      route(`/fretlists/${setlistId}`); // Ensure setlistId is defined here
    });
  };

  renderSetlistGrid() {
    const { currentSetlistSongs } = this.state;
    const setlistGridElements = currentSetlistSongs
      .slice(0, 4)
      .map((song, index) => (
        <div key={index} class="setlist-song">
          <img
            src={song.thumbnail_url}
            alt={song.title}
            class="setlist-song-thumbnail"
          />
          {/* Additional song info can be added here */}
        </div>
      ));

    return (
      <div class="grid-container">
        {setlistGridElements.length > 0 ? (
          setlistGridElements
        ) : (
          <div>No songs in this setlist.</div>
        )}
      </div>
    );
  }

  renderSetlistList() {
    const { setlists } = this.state;
    return setlists.map((setlist, index) => (
      <div key={index} class="setlist-item">
        <img
          src={setlist.thumbnail_url}
          alt={setlist.name}
          class="setlist-thumbnail"
        />
        <div class="setlist-info">
          <span class="setlist-title">{setlist.name}</span>
          {/* The plus button and ellipses functionality can be added here later */}
        </div>
      </div>
    ));
  }

  navigateToSongPage = (songId) => {
    route(`/song/${songId}`); // Navigate to the SongPage component
  };

  renderSetlistSongsList() {
    const { currentSetlistSongs } = this.state;
    return currentSetlistSongs.map((song, index) => (
      <div
        key={index}
        class="setlist-song-item"
        onClick={() => this.navigateToSongPage(song.id)} // Add onClick event
      >
        <img
          src={song.thumbnail_url}
          alt={song.title}
          class="setlist-song-thumbnail"
        />
        <span class="setlist-song-title">{song.title}</span>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h2>Favorites</h2>
        {this.renderSetlistGrid()}
        <div class="full-setlist">{this.renderSetlistSongsList()}</div>
      </div>
    );
  }
}

export default Fretlists;

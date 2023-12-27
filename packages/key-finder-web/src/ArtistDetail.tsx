// ArtistDetail.tsx
import { h, Component } from 'preact';
import { route } from 'preact-router';
import './ArtistDetail.css';

const API_URL = 'http://localhost:8080'; // Define API_URL

interface Song {
  id: number;
  title: string;
  youtube_url: string;
}

interface Artist {
  id: number;
  name: string;
  thumbnail_url: string;
  songs: Song[];
}

interface ArtistDetailProps {
  artistId?: string; // Now it's optional and should match the type expected from route params
}

interface ArtistDetailState {
  artist: Artist | null;
  error: string | null;
  isLoading: boolean;
}

export class ArtistDetail extends Component<
  ArtistDetailProps,
  ArtistDetailState
> {
  state: ArtistDetailState = {
    artist: null,
    error: null,
    isLoading: false,
  };

  componentDidMount() {
    const artistId = this.props.artistId;
    if (artistId) {
      this.fetchArtistDetails(parseInt(artistId, 10)); // Ensure to convert artistId to a number
    }
  }

  fetchArtistDetails = async (artistId: number) => {
    this.setState({ isLoading: true });
    try {
      const response = await fetch(`${API_URL}/artists/${artistId}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const artist = await response.json();
      this.setState({ artist, isLoading: false });
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };

  navigateToSongPage = (songId: number) => {
    route(`/song/${songId}`);
  };

  render({}, { artist, error, isLoading }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (!artist) {
      return <div>Artist not found.</div>;
    }

    return (
      <div className="artist-detail-container">
        <div className="artist-header">
          <img
            src={artist.thumbnail_url}
            alt={artist.name}
            className="artist-thumbnail"
          />
          <h1 className="artist-name">{artist.name}</h1>
        </div>
        <ul className="song-list">
          {artist.songs.map((song) => (
            <li
              key={song.id}
              className="song-item"
              onClick={() => this.navigateToSongPage(song.id)}
            >
              <div className="song-thumbnail"></div>{' '}
              {/* This div will show the note image via CSS */}
              <p className="song-title">{song.title}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ArtistDetail;

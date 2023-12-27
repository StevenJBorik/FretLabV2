// Catalog.tsx
import { h, Component } from 'preact';
import { route } from 'preact-router';
import './Catalog.css';

const API_URL = 'http://localhost:8080'; // Define API_URL

interface Artist {
  id: number;
  name: string;
  thumbnail_url: string;
}

interface CatalogProps {}

interface CatalogState {
  artists: Artist[];
  error: string | null;
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
}

export class Catalog extends Component<CatalogProps, CatalogState> {
  state: CatalogState = {
    artists: [],
    error: null,
    currentPage: 1,
    totalPages: 0,
    isLoading: false,
  };

  componentDidMount() {
    this.fetchArtists(this.state.currentPage);
  }

  fetchArtists = async (page: number) => {
    this.setState({ isLoading: true });
    console.log(`Fetching artists for page: ${page}`);
    try {
      const response = await fetch(
        `${API_URL}/artists?page=${page}&per_page=25`
      );
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      console.log(`Received data:`, data); // Log the received data
      this.setState({
        artists: data.artists,
        totalPages: data.pages, // Make sure this matches the key from your API response
        currentPage: data.current_page, // Again, match the key from your API
        error: null,
        isLoading: false,
      });
      console.log(`State updated with totalPages: ${data.pages}`);
    } catch (error) {
      console.error('Fetching artists failed', error);
      this.setState({ error: error.message, isLoading: false });
    }
  };

  handleArtistClick = (artistId: number) => {
    route(`/artist/${artistId}`);
  };

  handlePageChange = (newPage: number) => {
    if (typeof newPage === 'number') {
      this.fetchArtists(newPage);
    }
  };

  renderPagination = () => {
    const { currentPage, totalPages } = this.state;
    console.log(
      `Rendering pagination: currentPage=${currentPage}, totalPages=${totalPages}`
    );

    let paginationItems = [];

    // "Previous" button logic
    paginationItems.push(
      <button
        onClick={() => this.handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        Previous
      </button>
    );

    // Pages logic
    const startPage = currentPage > 1 ? currentPage : 1;
    const endPage = startPage + 2 <= totalPages ? startPage + 2 : totalPages;

    console.log(
      `Calculated page range: startPage=${startPage}, endPage=${endPage}`
    );

    // Display startPage to endPage inclusive
    for (let page = startPage; page <= endPage; page++) {
      paginationItems.push(this.renderPageNumber(page));
    }

    // Ellipsis and "Next" button logic
    if (endPage < totalPages) {
      paginationItems.push(
        <span key="ellipsis" className="ellipsis">
          ...
        </span>
      );
      paginationItems.push(this.renderPageNumber(totalPages));
    }

    paginationItems.push(
      <button
        onClick={() =>
          this.handlePageChange(Math.min(totalPages, currentPage + 1))
        }
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    );

    console.log(
      `Pagination items:`,
      paginationItems.map((item) => item.key || item.props.children)
    );

    return <div className="pagination">{paginationItems}</div>;
  };

  renderPageNumber = (pageNumber) => {
    const { currentPage } = this.state;
    console.log(
      `Rendering page number: pageNumber=${pageNumber}, currentPage=${currentPage}`
    );

    return (
      <button
        key={pageNumber}
        onClick={() => this.handlePageChange(pageNumber)}
        className={currentPage === pageNumber ? 'current-page' : ''}
        disabled={currentPage === pageNumber}
      >
        {pageNumber}
      </button>
    );
  };

  render({}, { artists, error, currentPage, isLoading }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className="catalog-container">
        <h1 className="catalog-header">Artists</h1>
        <div className="catalog-list">
          {artists.map((artist) => (
            <div
              className="catalog-item"
              key={artist.id}
              onClick={() => this.handleArtistClick(artist.id)}
            >
              <img src={artist.thumbnail_url} alt={artist.name} />
              <p>{artist.name}</p>
            </div>
          ))}
        </div>
        {this.renderPagination()}
      </div>
    );
  }
}

export default Catalog;

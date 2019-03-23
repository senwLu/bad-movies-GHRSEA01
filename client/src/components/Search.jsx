import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      search: 28
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getGenres()
  }

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    axios.get('/movies/genres')
    .then(result => {
      this.setState({ genres: result.data.genres })
    })
    .catch(err => console.log(err));
  }

  handleChange(e) {
    this.setState({search: e.target.value});
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        <select onChange={(e) => (this.handleChange(e))}>
        {this.state.genres.map((genre, i) => {
           return <option key={i} value={genre.id}>{genre.name}</option> 
        })}
        </select>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell 
        which option has been selected from here? */}
        <br/><br/>

        <button>Search</button>

      </div>
    );
  }
}

export default Search;
import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { term: ' '}
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onTermChange(term);
  }

  render() {
    return (
      <div className="search">
        <input placeholder="Enter some text to display RAD gifs!" onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
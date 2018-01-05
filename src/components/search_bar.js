import React, { Component }from 'react';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      term: ''
    };
  }
  render() {
    return (
      <div className="search-bar">
        <input
          onChange={event => this.onInputChange(event.target.value)}  
          value={this.state.term}     
          />
      </div>
    );
  }  
  onInputChange(term) {
    this.setState({term});
    this.props.onSerchTermChange(term)
  }
}

export default SearchBar;
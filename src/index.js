import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search'
import VideoDetail from './components/video_detail';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

var API_KEY = 'AIzaSyB8mJalOvNy7MJC9-fo15KjWPBUU930Mwg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  
    this.videoSearch('surfboards');
  }
  
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }
  
  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSerchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          videos={this.state.videos}
          onSelectedVideo={selectedVideo => this.setState({selectedVideo})}
           />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
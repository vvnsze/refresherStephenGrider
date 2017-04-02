import React, {Component} from 'react';
import ReactDom from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyCitc9q8ACQWVCxylzQyEXNI4zZKvhZKiE'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'surfboards'},(videos) => {
      this.setState({videos})
    })
  }
  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
        <videoDetail />
      </div>
    );
  }
}

ReactDom.render(<App/>, document.querySelector('.container'))

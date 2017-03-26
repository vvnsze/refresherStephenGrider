import React from 'react';
import ReactDom from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCitc9q8ACQWVCxylzQyEXNI4zZKvhZKiE'

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDom.render(<App/>, document.querySelector('.container'))

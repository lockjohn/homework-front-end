import React from 'react';

import GiphysSearchContainer from './components/giphys_search_container';
import GiphysTrendingContainer from './components/giphys_trending_container';
import './App.css';


class App extends React.Component {
  render() {
    return <div className="app-wrapper">
        <GiphysTrendingContainer />
        <GiphysSearchContainer />
      </div>;
  }
}

export default App;

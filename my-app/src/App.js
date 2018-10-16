import React from 'react';

import GiphysSearchContainer from './components/giphys_search_container';
import GiphysTrendingContainer from './components/giphys_trending_container';
import './App.css';

// import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />

class App extends React.Component {
  render() {
    return <div>
        <header className="App-logo">
          <iframe src="https://giphy.com/embed/QIprAHD4uv6pO" title="x" allowFullScreen />
        </header>
        <div>
        <GiphysTrendingContainer />
        <GiphysSearchContainer />
      </div>
      </div>;
  }
}

export default App;

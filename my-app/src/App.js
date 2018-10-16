import React from 'react';
import { Provider } from 'react-redux';
import GiphysSearchContainer from './components/giphys_search_container';
import './App.css';

// import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />

class App extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <GiphysSearchContainer /> 
      </Provider>
    );
  }
}

export default App;

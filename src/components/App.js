import React, { Component } from 'react';
import '../styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './Layout'


class App extends Component {
  render() {
    return (
      <div>
      <MuiThemeProvider>
        <Layout/>
        </MuiThemeProvider>
      </div>      
    );
  }
}

export default App;

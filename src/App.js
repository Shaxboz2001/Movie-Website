import React, { Component } from 'react';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Main from './Layout/Main';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
 
export default App;

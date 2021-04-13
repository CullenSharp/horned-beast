import logo, { ReactComponent } from './logo.svg';
import './App.css';
//imports just the component
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, CardColumns} from 'react-bootstrap';
import React, {Component} from 'react';
import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <Container fluid>
        <>
          <Header />
          <Main />
          <Footer />
        </>
      </Container>
    );
  }
}

export default App;

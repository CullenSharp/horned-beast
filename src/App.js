import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'; //destructure Container from react-boostrap
//alias? called "React"
import React from 'react'; //imports the default export and Component
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  //render method is specific to reactComponent
  render() {
    return (
      <Container fluid> {/*Not sure how this is styled*/}
        <Header />
        <Main />
        <Footer />
      </Container>
    );
  }
}

export default App; 

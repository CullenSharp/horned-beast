import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap"; //destructure Container from react-boostrap
//alias? called "React"
import React from "react"; //imports the default export and Component
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      horns: 0,
    };
  }

  onChange = (e) => {
    this.setState({ horns: parseInt(e.target.value) });
  };

  render() {
    return (
      <Container fluid>
        <Header onChange={this.onChange}/>
        <Main horns={this.state.horns}/>
        <Footer />
      </Container>
    );
  }
}

export default App;

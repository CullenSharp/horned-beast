import { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import FilteredBeasts from "./FilteredBeasts";

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          Horned Beasts:
        </Navbar.Brand>
        <FilteredBeasts onChange={this.props.onChange} />
      </Navbar>
    );
  }
}

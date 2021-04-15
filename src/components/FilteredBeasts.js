import { Component } from "react";
import Form from "react-bootstrap/Form";

export default class FilteredBeasts extends Component {
  render() {
    return (
      <Form>
        <Form.Control
          type="text"
          placeholder="Filter by Number of horns"
          onChange={this.props.onChange}
        ></Form.Control>
      </Form>
    );
  }
}

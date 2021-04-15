import { Component } from "react";
import Form from "react-bootstrap/Form";

export default class FilteredBeasts extends Component {
  render() {
    return (
      <Form inline>
        <Form.Control
          as="select"
          placeholder="Filter by Number of horns"
          onChange={this.props.onChange}
        >
            <option>Filter by number of horns</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>100</option>
        </Form.Control>
      </Form>
    );
  }
}

//react is a module
//when importing a module, only the name is used, not the path
import { Card, CardColumns, Button } from "react-bootstrap";
import React, { Component } from "react";
import items from "../data.json";
import SelectedBeast from "./SelectedBeast";
import FilteredBeasts from "./FilteredBeasts";

class Main extends Component {
  constructor(props) {
    super(props);
    
    //store the number of horns in state
    this.state={
      horns: 0,
    }
  }

  onChange = (e) => {
    this.setState({horns: e.target.value});
  }

  render() {
    return (
      <CardColumns>
        <FilteredBeasts onChange={this.onChange}/>
        {items.map((item) => (
          <HornedBeast
            key={item.title}
            title={item.title}
            desc={item.description}
            imgUrl={item.image_url}
          />
        ))}
      </CardColumns>
    );
  }
}

class HornedBeast extends Component {
  //props is undefined
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      showModal: false,
    };
  }

  handleShow = () => {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  favorite = () => {
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    return (
      //<></> is called a fragment
      <Card bg="dark" text="light">
        <SelectedBeast
          show={this.state.showModal}
          onClose={this.handleClose}
          title={this.props.title}
          desc={this.props.desc}
          imgUrl={this.props.imgUrl}
        />
        <Card.Img
          onClick={this.handleShow}
          variant="top"
          src={this.props.imgUrl}
          alt={`An image of a ${this.props.title}`}
          title={this.props.title}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.desc}</Card.Text>
          <Button
            variant="light"
            onClick={this.favorite}
          >{`❤️ ${this.state.likes}`}</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Main;

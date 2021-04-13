//react is a module
//when importing a module, only the name is used, not the path
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
import React, {Component} from 'react';
import items from '../data.json'

class Main extends Component {
    render() {
        return (
            <>
                {items.map(item => (
                    <HornedBeast 
                        src={item.title}
                        desc={item.description}
                        imgUrl={item.image_url}
                    />
                ))}
            </>
        );
    }
}

class HornedBeast extends Component {
    //props is undefined
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
        }
    }

    favorite = () => {
        this.setState({likes: this.state.likes + 1});
    }

    render() {
        return (
            //<></> is called a fragment
            <Card
            style={{width: '18rem'}}
            onClick={this.favorite}>

                <Card.Img
                    variant="top" 
                    src={this.props.imgUrl}
                    alt={`An image of a ${this.props.title}`}
                    title={this.props.title}
                />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.desc}</Card.Text>
                    <Button variant="primary">{`❤️ ${this.state.likes}`}</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Main;
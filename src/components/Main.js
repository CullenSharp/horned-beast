//react is a module
//when importing a module, only the name is used, not the path
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
            <div
            onClick={this.favorite}>
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
                <p>{`❤️${this.state.likes}`}</p>
                <img 
                    src={this.props.imgUrl}
                    alt={`An image of a ${this.props.title}`}
                    title={this.props.title}
                    />
            </div>
        );
    }
}

export default Main;
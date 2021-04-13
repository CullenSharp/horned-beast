//react is a module
//when importing a module, only the name is used, not the path
import React, {Component} from 'react';
import items from '../data.json'

function HornedBeast(props){
    return (
        //<></> is called a fragment
        <>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <img 
                src={props.imgUrl}
                alt={`An image of a ${props.title}`}
                title={props.title}
                 />
        </>
    );
}

class Main extends Component {
    constructor(props) {
        //get props from React.Component
        super(props);

        this.state = {

        }
    }

    liked = () => console.log("likey likey");

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

export default Main;
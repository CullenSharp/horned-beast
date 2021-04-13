//react is a module
//when importing a module, only the name is used, not the path
import React, {Component} from 'react';

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
            <div>
                <HornedBeast 
                    onClick={this.liked()}
                    title={'Horn-Dog'}
                    imgUrl={'https://via.placeholder.com/150/FF0000'}
                    desc={'Horned dog'}    
                />
                <HornedBeast 
                    onClick={this.liked}
                    title={'Homo Hornicus'}
                    imgUrl={'https://via.placeholder.com/150/008000'}
                    desc={'Horned sapien'}  
                />
            </div>
        );
    }
}

export default Main;
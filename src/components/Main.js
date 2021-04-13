function HornedBeast(props){
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <img 
                src={props.imgUrl}
                alt={`An image of a ${props.title}`}
                title={props.title}
                 />
        </div>
    );
}

function main() {
    return (
        <div>
            <HornedBeast 
                title={'Horn-Dog'}
                imgUrl={'https://via.placeholder.com/150/FF0000'}
                desc={'Horned dog'}    
            />
            <HornedBeast 
                title={'Homo Hornicus'}
                imgUrl={'https://via.placeholder.com/150/008000'}
                desc={'Horned sapien'}  
            />
        </div>
    );
}

export default main;
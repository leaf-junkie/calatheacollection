import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Scene from './../scene.png';

const circle = {
    width:850,
    height:850,
    position:'relative',
    margin:'0 auto',
    marginTop:'-300px',
    borderRadius:'50%',
    backgroundColor:'pink',
    opacity:'0.4',
    zIndex:'0'
}
  
const pic = {
    position:'relative',
    top:450,
    left:-50,
    margin:'0 auto',
    zIndex:'5'
}

class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div>
                    <img src={Scene} style={pic} ></img>
                    </div>
                </Container>
                <Container>
                    <div className='circle' style={circle}></div>
                </Container>
            </div>
        )
    }
}

export default Home;
import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Scene from './../scene.png';

const circle = {
    width:750,
    height:750,
    position:'relative',
    margin:'0 auto',
    marginTop:'-415px',
    borderRadius:'50%',
    backgroundColor:'pink',
    opacity:'0.4',
    zIndex:'0'
}
  
const pic = {
    position:'relative',
    top:350,
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
                    <div className='circle' style={circle}></div>
                </Container>
            </div>
        )
    }
}

export default Home;
import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Julie from '../julie.jpg'
  
const about = {
    width:600, 
    position:'relative', 
    top:450,
    fontFamily:'sans-serif',
    color:'#222',
    textAlign:'justify', 
    zIndex:'10'
}

const circle1 = {
    width:700,
    height:700,
    position:'relative',
    left:0,
    top:0,
    borderRadius:'50%',
    backgroundColor:'#C1DEE2',
    opacity:'0.4',
    zIndex:'0'
}

// const circle2 = {
//     width:500,
//     height:500,
//     position:'absolute',
//     left:1000,
//     top:400,
//     borderRadius:'50%',
//     backgroundColor:'#fadadd',
//     border:'4px solid #fff',
//     zIndex:'0'
// }

const pic = {
    position:'absolute',
    width:450,
    borderRadius:'50%',
    top:720,
    left:1100,
    border:'4px solid #fff',
}

class About extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className='About' style={about}>
                        <h2>Hi, nice to meet you!</h2>
                        <h4 style={{lineHeight:'150%'}}>
                            And thanks for checking out my site. I'm Julie Ragsdale, 
                            an artist and maker located in Durham, NC. My small handmade 
                            cement planters have proven to be the cornerstone of my 
                            business, but I create a variety of plant-related 
                            goods, from macrame plant hangers to watercolor paintings! 
                            Everything that I sell is either designed or completely 
                            handmade by me. Guess what? Even my website was made by 
                            me. Yep, you guessed it — I'm a web developer, too!
                        </h4>
                        <span style={{fontSize:'3em', color:'#222'}}>
                            <a style={{color:'#222', marginRight:12}} href='https://www.instagram.com/calathea.collection/' target='_blank'><i className='fab fa-instagram'></i></a>
                        </span>
                        <span style={{fontSize:'3em', color:'#222'}}>
                            <a style={{color:'#222', marginRight:12}} href='https://www.facebook.com/calatheacollection/' target='_blank'><i className='fab fa-facebook-square'></i></a>
                        </span> 
                        <span style={{fontSize:'3em', color:'#222'}}>   
                            <a style={{color:'#222'}} href='https://github.com/leaf-junkie'><i className='fab fa-github-alt' target='_blank'></i></a>
                        </span>
                    </div>
                    <div className='circle1' style={circle1}></div>
                    {/* <div className='circle2' style={circle2}></div> */}
                    <img src={Julie} style={pic} />
                    {/* <div className='waves'>          
                        <svg viewBox='0 0 400 400' strokeLinecap='round' style={{display:'inline-block', position:'absolute', top:'50%', left:0, overflow:'hidden', zIndex:'-5'}}>
                            <path d='M0,100 Q 25,25 50,100 75,25 100,100 125,25 150,100 175,25 200,100 225,25 250,100 275,25 300,100 325,25 350,100 375,25 400,100' stroke='#222' fill='none'/>
                        </svg>
                    </div> */}
                </Container>
            </div>
        )
    }
}

export default About;
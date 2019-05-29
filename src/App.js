import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import headshot from './headshot.jpg';
import Shop from './Pages/Shop';
// import { Link } from "react-router-dom";

const about = {
  width:530, 
  position:'absolute', 
  top:'25vh', 
  right:'50vw', 
  fontFamily:'sans-serif',
  color:'#222',
  textAlign:'left', 
  zIndex:'10'
}

const circle = {
  width:850,
  height:850,
  position:'absolute',
  top:'25vh',
  left:'35vw',
  borderRadius:'50%',
  backgroundColor:'pink',
  opacity:'0.25',
  zIndex:'0'
}

const pic = {
  maxWidth:500,
  position:'absolute',
  top: '46vh',
  left: '50vw',
  border: '4px solid #fff',
  borderBottomRightRadius:'25%',
  opacity:'1',
  zIndex:'5'
}

function App() {
  return (
    <div className="App">
      <Jumbotron fluid style={{backgroundColor:'#1E3B3D'}}>
          <h1 style={{fontSize:125, color:'#fff'}}>Calathea Collection</h1>
          <h1 style={{color:'#fff'}}>plant-inspired art</h1>
      </Jumbotron>
      <br></br>
      <Container>
        <div className='About' style={about}>
          <h2>Hi, nice to meet you!</h2>
          <br></br>
          <h4>
            And thanks for checking out my site. I'm Julie Ragsdale, 
            an artist and maker located in Durham, NC. My handmade 
            cement planters have proven to be the cornerstone of my 
            small business, but I create a variety of plant-related 
            goods, from macrame plant hangers to watercolor paintings! 
            Everything that I sell is either designed or completely 
            handmade by me. Guess what? Even my website was made by 
            me. Yep, you guessed it — I'm a web developer, too! Click 
            <a href={Shop}>Shop</a> to browse my goods, or reach out 
            to ask me about custom orders or to discuss a custom site!
          </h4>
        </div>
        <div>
          <img src={headshot} style={pic} ></img>
        </div>
        <div className='circle' style={circle}></div>
      </Container>
    </div>
  );
}

export default App;

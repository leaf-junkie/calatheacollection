import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import headshot from './headshot.jpg';
import Scene from './scene.png';

const circle = {
  width:850,
  height:850,
  position:'fixed',
  top:'28vh',
  left:'35vw',
  borderRadius:'50%',
  backgroundColor:'pink',
  opacity:'0.25',
  zIndex:'0'
}

const pic = {
  position:'relative',
  top: '18vh',
  margin:'0 auto',  // border: '4px solid #fff',
  // borderTopRightRadius:'50%',
  // borderBottomRightRadius:'50%',
  zIndex:'5'
}

const footer = {
  position: 'relative',
  bottom:0,
  width:'100%',
  height:100,
  backgroundColor:'#89C5CC',
  color:'#fff',
  paddingTop:35
}

function App() {
  return (
    <div className="App" style={{ overflowY:'hidden' }}>
      <Jumbotron fluid style={{backgroundColor:'#89C5CC', position:'fixed', width:'100%'}}>
          <h1 style={{fontSize:125, color:'#fff'}}>Calathea Collection</h1>
          <h1 style={{color:'#fff'}}>plant-inspired art</h1>
      </Jumbotron>
      <br></br>
      <Container>
        <div>
          <img src={Scene} style={pic} ></img>
        </div>
      </Container>
      <Container>
        <div className='circle' style={circle}></div>
      </Container>
      <div style={footer}>
        <p>Calathea Collection | Copyright 2019</p>
      </div>
      {/* <div className='waves'>          
        <svg viewBox='0 0 400 400' strokeLinecap='round' style={{display:'inline-block', position:'absolute', bottom:'-1900px', left:0}}>
          <path d='M0,100 Q 25,25 50,100 75,25 100,100 125,25 150,100 175,25 200,100 225,25 250,100 275,25 300,100 325,25 350,100 375,25 400,100' stroke='none' fill='#1E3B3D'/>
        </svg>
      </div> */}
    </div>
  );
}

export default App;

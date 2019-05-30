import React, {Component} from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from 'react-bootstrap/Nav'

const footer = {
  position:'fixed',
  bottom:0,
  width:'100%',
  height:100,
  backgroundColor:'#89C5CC',
  color:'#fff',
  paddingTop:35
}

const navlink = {
  color:'#fff',
  fontSize:24
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron fluid style={{backgroundColor:'#89C5CC', position:'fixed', width:'100%'}}>
            <h1 style={{fontSize:100, color:'#fff'}}><a style={{color:'#fff', textDecoration:'none'}} href='/home'>Calathea Collection</a></h1>
            <h1 style={{color:'#fff'}}>plant-inspired art</h1>
            <br></br>
            <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item>
                <Nav.Link className='navigation' href="/about" style={navlink}>About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='navigation' href="https://www.etsy.com/shop/CalatheaCollection" target="_blank" style={navlink}>Shop</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='navigation' href="/gallery" style={navlink}>Gallery</Nav.Link>
              </Nav.Item>
            </Nav>
        </Jumbotron>
  
        <main>
          {this.props.children}
        </main>
  
        <div style={footer}>
          <p>Calathea Collection | Copyright 2019</p>
        </div>
      </div>
    );
  }
}

export default App;

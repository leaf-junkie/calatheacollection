import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Jumbotron fluid>
        <Container>
          <h1>Calathea Collection</h1>
          <p>
            plant-inspired art
          </p>
        </Container>
      </Jumbotron>;
    </div>
  );
}

export default App;

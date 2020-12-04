import React from 'react'
import Header from './components/Header'
import SodaControl from './components/SodaControl'
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <Header/>
      <Container>
        <SodaControl/>
      </Container>
    </>
  );
}

export default App;

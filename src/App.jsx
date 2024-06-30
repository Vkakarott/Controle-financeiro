import React from 'react';
import Main from './components/Main.jsx';
import NavBar from './components/NavBar.jsx';
import Rightbar from './components/RightBar.jsx';
import Container from './components/Conteiner.jsx';

function App() {
  return (
      <Main>
        <NavBar/>
        <Container/>
        <Rightbar/>
      </Main>
  )
}

export default App

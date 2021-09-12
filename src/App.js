import React from 'react';
//import styles
import "./styles/app.scss";
//import components
import Info from './components/Info'
import Player from './components/Player'


function App() {
  return (
    <div className="App">
      <Info />
      <Player />
    </div>
  );
}

export default App;

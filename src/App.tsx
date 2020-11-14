import React from 'react';
import './App.css';
import {MainPageDisplay} from './components/mainPage';

const pandaPicture = '/assets/panda.png'
const fallingPanda = '/assets/falling-panda.png'
function App() {
  return (
    <div className="App" style={{backgroundColor: '#f4c2c2'}}>
      <img src={pandaPicture} className='panda-picture' />
      <img src={fallingPanda} className='falling-picture' />
      <MainPageDisplay />
    </div>
  );
}

export default App;

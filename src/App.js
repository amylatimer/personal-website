import React from 'react';
import './App.scss';
//import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import TicksSuck from './components/Projects/TicksSuck/TicksSuck';
import DigitalFutures from './components/Projects/DigitalFutures/DigitalFutures';
import FamilyFeud from './components/Projects/FamilyFeud/FamilyFeud';

function App() {
  return (
    <>
      <div className="App">
        <Info />
        <div className="project-container">
          <TicksSuck />
          <DigitalFutures />
          <FamilyFeud />
        </div>

      </div>


    </>
  );
}

export default App;

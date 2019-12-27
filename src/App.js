import React from 'react';
import './App.scss';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import TicksSuck from './components/Projects/TicksSuck/TicksSuck';

function App() {
  return (
    <>
      <div className="App">
        <Info />
        <div className="project-container">
          <TicksSuck />
          {/* <TicksSuck /> */}
        </div>

      </div>
      {/* <div className="App">
        <header className="App-header">
          <h1>Coming Soon!</h1>
        </header>

      </div> */}
      {/* <Hero /> */}


    </>
  );
}

export default App;

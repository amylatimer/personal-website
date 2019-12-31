import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import './App.scss';

// import components 
import Info from './components/Info/Info';
import TicksSuck from './components/Projects/TicksSuck/TicksSuck';
import DigitalFutures from './components/Projects/DigitalFutures/DigitalFutures';
import FamilyFeud from './components/Projects/FamilyFeud/FamilyFeud';

const fullpageProps = {
  scrollingSpeed: 1000,
  //loopTop: true,
  //loopBottom: true,
  dragAndMove: true,
  navigation: true,
  navigationPosition: 'right',
  navigationColor: 'pink',
  lazyLoading: false,
  //sectionsColor: ['transparent', '#000000', 'transparent']
}

function App() {
  return (
    <>
      <div className="App">
        <Info />
        <div className="project-container">


          {/* <TicksSuck />
          <DigitalFutures />
          <FamilyFeud /> */}


          <ReactFullpage
            {...fullpageProps}
            //scrollingSpeed={1000} /* Options here */

            render={() => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="section section1">
                    <TicksSuck />
                    {/* <p>Section 1 (welcome to fullpage.js)</p> */}
                    {/* <button onClick={() => fullpageApi.moveSectionDown()}>
                      Click me to move down
                    </button> */}
                  </div>
                  <div className="section section2">
                    <DigitalFutures />
                  </div>
                  <div className="section section3">
                    <FamilyFeud />
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}

          />
        </div>

      </div>


    </>
  );
}

export default App;

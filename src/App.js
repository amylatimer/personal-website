import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import './App.scss';

// import components 
import Info from './components/Info/Info';
import TicksSuck from './components/Projects/TicksSuck/TicksSuck';
import DigitalFutures from './components/Projects/DigitalFutures/DigitalFutures';
import FamilyFeud from './components/Projects/FamilyFeud/FamilyFeud';

import Width from './components/Width/Width';

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

class App extends React.Component {

  render() {
    var intViewportWidth = window.innerWidth;
    //console.log(intViewportWidth);

    return (
      <>
        <div className="App">

          <Width />
          {/* {
            intViewportWidth <= 425 ? (
              <>
                <ReactFullpage
                  {...fullpageProps}
                  render={() => {
                    return (
                      <ReactFullpage.Wrapper>
                        <div className="section">
                          <Info />
                        </div>
                        <div className="section section1">
                          <TicksSuck />
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
              </>

            ) : (
                <>
                  <Info />
                  <div className="project-container">
                    <ReactFullpage
                      {...fullpageProps}
                      render={() => {
                        return (
                          <ReactFullpage.Wrapper>
                            <div className="section section1">
                              <TicksSuck />
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
                </>

              )
          } */}

        </div> {/* end of App div */}



      </>
    );
  }



}

export default App;

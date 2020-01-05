import React from "react";
import ReactDOM from "react-dom";

//new imports 
import '../../App.scss';
import '../../styles/base.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import Info from '../Info/Info';
import TicksSuck from '../Projects/TicksSuck/TicksSuck';
import DigitalFutures from '../Projects/DigitalFutures/DigitalFutures';
import FamilyFeud from '../Projects/FamilyFeud/FamilyFeud';


export default function MyComponent() {
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

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    });
    React.useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }, 1000);

        window.addEventListener("resize", debouncedHandleResize);

        return _ => {
            window.removeEventListener("resize", debouncedHandleResize);
        };
    });
    return (
        <>
            {
                dimensions.width <= 768 ? (
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
            }

        </>
    );
}

function debounce(fn, ms) {
    let timer;
    return _ => {
        clearTimeout(timer);
        timer = setTimeout(_ => {
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MyComponent />, rootElement);
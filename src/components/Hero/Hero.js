import React from 'react';
import './Hero.scss';


class Hero extends React.Component {
    state = {}

    generateStars(number) {
        for (let i = 0; i < number; i++) {
            return (
                <>
                    <div id="stars" />
                    <div id="stars2" />
                    <div id="stars3" />
                </>
            );

        }

    }

    // @function multiple-box-shadow ($n) {
    //     $value: '#{random(2000)}px #{random(2000)}px #FFF'
    //   for $i from 2 through $n {
    //       $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF';

    //   }
    //   return unquote($value)
    // }

    render() {
        return (
            <div className="container">
                <h1>This is the hero</h1>
                <div id="stars" />
                <div id="stars2" />
                <div id="stars3" />
                {/* {
                    this.generateStars(20)
                } */}
            </div>
        );
    }
}

export default Hero;
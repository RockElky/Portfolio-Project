import React, { Component } from 'react';
import logo from './images/DesignGif.gif';
import Typewriter from 'typewriter-effect';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { Parallax } from 'react-scroll-parallax';
import { useParallax } from 'react-scroll-parallax';

import './App.css';

class App extends Component {
  render() {
      return (
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='topics'>
            <h4 className='Projects'>Projects</h4>
            <h4 className='About'>About Me</h4>
            <h4 className='Hobbies'>Hobbies</h4>
          </div>
          <div className="Text-block">
            <h3 className='typeWriter'><Typewriter onInit={(typewriter) => {
              typewriter.typeString("Hi, I'm Erik Oehlke.")
                // typewriter.typeString("<br/>Welcome to my Portfolio")
                .start();
            }}
            />
            </h3>
          </div>
          <Para>
          <div className='Para'>
          </div>
          <div className='Pro'>
          </div>
          </Para>
        </div>
      );
    }
  }

  function Para() {
    const { ref } = useParallax<HTMLDivElement>({ speed: 10 });
    return <div ref={ref} />;
  }

export default App;

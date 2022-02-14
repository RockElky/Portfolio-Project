// import logo from './logo.svg';
import logo from './images/DesignGif.gif';
import Typewriter from 'typewriter-effect';
import { Parallax, useParallax } from 'react-scroll-parallax';
import FadeIn from 'react-fade-in/lib/FadeIn';

import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h4 className='topics'>
        <h4 className='Projects'>Projects</h4>
        <h4 className='About'>About Me</h4>
        <h4 className='Hobbies'>Hobbies</h4>
      </h4>
      <div className="Text-block">
        <h3 className='typeWriter'><Typewriter onInit={(typewriter) => {
          typewriter.typeString("Hi, I'm Erik Oehlke.")
            // typewriter.typeString("<br/>Welcome to my Portfolio")
            .start();
        }}
        />
        </h3>
      </div>
        <div className='Para'>
        </div>
          <div className='Pro'>
          </div>
 
    </div>
  );
}

export default App;

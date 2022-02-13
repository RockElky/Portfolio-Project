// import logo from './logo.svg';
import logo from './images/DesignGif.gif';
import Typewriter from 'typewriter-effect';
import FadeIn from 'react-fade-in/lib/FadeIn';

import './App.css';
import { selectOptions } from '@testing-library/user-event/dist/select-options';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Text-block">
          <h3 className='typeWriter'><Typewriter onInit={(typewriter) => {
            typewriter.typeString("Hi, I'm Erik Oehlke.")
            typewriter.typeString("<br/>Welcome to my Portfolio")
              .changeDelay('natural')
              .start();
          }}
          />
          </h3>
          <FadeIn delay="7500"><h4 className='topics'>
            About Me<br/>
            Projects<br/>
            Hobbies
          </h4>
          </FadeIn>
        </div>
        
      </div>
    </div>
  );
}

export default App;

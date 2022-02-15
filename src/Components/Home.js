import React, { Component } from 'react';
import logo from '../images/DesignGif.gif';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import '../App.css';

function Home() {
    return (
        <div className="App">
            <ParallaxProvider>
                <div>
                    <img src={logo} className="App-logo" />
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
                        <div className='description'>I am a UX/UI Designer. I love to create <br />
                            designs that will be helpful to the world. <br />
                            I enjoy drawing, video games, and carpentry.
                        </div>
                    </div>
                    {/* <div>
                    <Parallax translateX={[-60, 20]}
                            easing={'easeOutQuad'}
                        >
                            <img src={paralogo} className="paragif" />
                        </Parallax>
                    </div> */}
                </div>

                
                <div className='Pro'>
                    <Fade top cascade>
                    <div style=>Projects</div>
                    </Fade>
                </div>

            </ParallaxProvider>

        </div>
    );
}

export default Home;
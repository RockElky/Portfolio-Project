import React, { Component } from 'react';
import logo from '../images/DesignGif.gif';
import wait from '../images/Waiting.gif';
import Typewriter from 'typewriter-effect';
import 'animate.css';
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import '../App.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';


function Home() {
    return (
        <ParallaxProvider>
        <div className="App">
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
                            .start();
                    }}
                    />
                    </h3>
                    <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce delay={3200} className='description'>I am a UX/UI Designer. I love to design<br />
                       applications that will be helpful to the world. <br />
                        I enjoy drawing, video games, and carpentry.
                    </AnimationOnScroll>
                    
                </div>
                <ParallaxBanner
                layers={[{ image: wait, speed: -15}]}
                className='ParaBanner aspect-[2/1]'>
                </ParallaxBanner>
                <div className='projectsArea'>
                    <AnimationOnScroll
                        animateIn='animate__fadeInUp'>
                        <h1 className='hProject'>Projects</h1>
                    </AnimationOnScroll>
                    </div>
            </div>
            
        </div>
        </ParallaxProvider>
    );
}

export default Home;
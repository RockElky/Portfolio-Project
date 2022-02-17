import React, { Component } from 'react';
import NavBar from './NavBar';
import logo from '../images/DesignGif.gif';
import wait from '../images/Waiting.gif';
import Typewriter from 'typewriter-effect';
import ProjectContOne from '../Components/ProjectContOne'
import 'animate.css';
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import '../CSSFiles/Home.css';
import '../CSSFiles/App.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';


function Home() {
    return (
        <ParallaxProvider>
            <main className="App">
                <section>
                    <img src={logo} className="HomeBG" />
                    <NavBar />
                    <article className="openingText">
                        <h3 className='typeWriter'><Typewriter onInit={(typewriter) => {
                            typewriter.typeString("Hi, I'm Erik Oehlke.")
                                .start();
                        }}
                        />
                        </h3>
                        <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce delay={3200} className='tagLine'>
                            I am an aspiring UX/UI Designer.Creating beautiful applications is a joy to me.I enjoy drawing, video games, carpentry, and website development.
                        </AnimationOnScroll>

                    </article>
                    <article>
                        <ParallaxBanner
                            layers={[{ image: wait, speed: -15 }]}
                            className='ParaBanner aspect-[2/1]'>
                            <div className="Banner">
                                <AnimationOnScroll animateIn='animate__fadeInRight' animateOut='animate__fadeOutLeft'>
                                    <h1 className='BannerText'>Traveling to a New Area...</h1>
                                </AnimationOnScroll>
                            </div>
                        </ParallaxBanner>
                    </article>
                    <ProjectContOne />
                </section>

            </main>
        </ParallaxProvider>
    );
}

export default Home;
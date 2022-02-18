import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import '../CSSFiles/Project.css'
import reactDom from "react-dom";
import { Grid, Item as div } from "@mui/material";


function ProjectContOne() {
    return (

        <main>
            <div className='projectsArea'>
                <h1 className='hProject'>Select A Project</h1>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
                                <div className="pOne">
                                    8 bit to start out, changes to real project on hover. 
                                </div>
                            </AnimationOnScroll>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="oneDesc">Is this thing on?</div>
                        </Grid>
                        <Grid item xs={6}>
                        <div className="twoDesc">Is this thing on?</div>
                        </Grid>
                        <Grid item xs={6}>
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
                                <div className="pTwo">
                                </div>
                            </AnimationOnScroll>
                        </Grid>
                        <Grid item xs={6}>
                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
                                <div className="pThree">

                                </div>
                            </AnimationOnScroll>
                        </Grid>
                        <Grid item xs={6}>
                        <div className="threeDesc">Is this thing on?</div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </main>
    )
}

export default ProjectContOne;
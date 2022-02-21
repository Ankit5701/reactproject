
import React from 'react';
import Scr from './Scr';

 
export const About = () => {
    return (
        <>
        <div>
           <Scr></Scr>

            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accbtn1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <h3 class="acc"><strong>Academics</strong></h3>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <ul><h3><strong>Education</strong></h3>
                                <li><strong>B. Tech(Computer Engineering)</strong></li>
                                <li><strong>HSC: 73.08 %</strong></li>
                                <li><strong>SSC: 92.60 %</strong></li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accbtn2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h3 class="acc"><strong>Hobbies</strong></h3>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <ul>
                                <li><strong>Reading</strong></li>
                                <li><strong>Writing (Poems, Articles, Recites,Songs,etc.)</strong></li>
                                <li><strong>Creating Digital Content(Memes And Entertainment)</strong></li>
                                <li><strong>Tech Enthusiast</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accbtn1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <h3 class="acc"><strong>Achievements</strong></h3>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body"><strong>Achievements Loading Soon...</strong></div>
                    </div>
                </div>
            </div>
            </div>
            
            </>

    )
}


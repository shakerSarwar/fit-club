import React from 'react';
import Header from './Header';
import './Hero.css';
import Hero_image from '../assets/hero_image.png';
import Heart from '../assets/heart.png';
import Hero_image_back from '../assets/hero_image_back.png';
import Calories from '../assets/calories.png';
import { motion } from "framer-motion";
import NumberCounter from 'number-counter';

function Hero() {
    const transition = { type: 'spring' , duration : 3}
  return (
    <div>
      <div className='hero' id='home'>
        <div className='blur blur-hero'></div>
            <div className='hero-left'>
                <Header />
                <div className='the-best-ad'>
                    <motion.div
                        initial ={{left: '38px'}}
                        whileInView={{left:'8px'}}
                        transition={{...transition, type:'tween'}}>
                    </motion.div>
                    <span>the best fitness club in the town</span>
                </div>
                    <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>shape</span>
                        <span> your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <sapn>is simply dummy text of the printing and typesetting.</sapn>
                    </div>
                    </div>
                    <div className='figures'>
                        <div>
                            <span> <NumberCounter end={140} delay={3} className="increment" preFix="+"/>
                            </span>
                            <span>Expert Coaches</span>
                        </div>
                        <div>
                            <span><NumberCounter end={978} delay={3} className="increment" preFix="+"/></span>
                            <span>Member Joined</span>
                        </div>
                        <div>
                            <span><NumberCounter end={50} delay={3} className="increment" preFix="+"/></span>
                            <span>Fitness program</span>
                        </div>
                    </div>
                    <div className='hero-buttons'>
                        <button className='btn'>Get Started</button>
                        <button className='btn'>Learn More</button>
                    </div>
             </div>
            <div className='hero-right'>
                <button className='btn'>Join Now</button>
                <div className='heart-rate'>
                    <img src={Heart} alt='Heart' />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>

                <img src={Hero_image} alt='IMG' className='hero_image' />
                <img src={Hero_image_back} alt='IMG' className='hero_image_back' />

                <div className='calories'>
                    <img src={Calories} alt='Cal' />
                    <div>
                    <span>Calories Burned</span>
                    <span>220 kCal</span>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Hero

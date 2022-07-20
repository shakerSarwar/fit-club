import React from 'react';
import './Plan.css';
import {plansData} from './../data/plansData.js';
import whiteTick from './../assets/whiteTick.png';

function Plan() {
  return (
    <div className='plan_container' id='plans'>
        <div className='blur blur-plan-1'></div>
        <div className='blur blur-plan-2'></div>
        <div className='programs_header'>
            <span className='stroke-text'>Ready To Start</span>
            <span>Your Journey</span>
            <span className='stroke-text'>NOW WITH US</span>
        </div>

        <div className='Plans'>
            {
                plansData.map((plan ,i)=>(
                    <div className='plan' key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className='features'>
                            {
                                plan.features.map((feature , i)=>
                                <div className='feature'>
                                    <img src={whiteTick} alt='tick' />
                                    <span key={i}>{feature}</span>
                                </div>
                                )
                            }
                        </div>

                        <div>
                            <span>See More Benefits</span>
                        </div>

                        <button className='btn'>JOIN NOW</button>
                    </div>
                )
            )}
        </div>
    </div>
  )
}

export default Plan
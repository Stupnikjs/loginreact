import React from 'react';

const Wheel = () => {
    return (
        <div className='wheel'>
            <div class="directions">
            Click to spin the wheel to see what prize you won!
            </div>
            <div class="spin-the-wheel">
            <label>
                <input type="radio"/>
                <div class="clicker"></div>
            <div class="wheel">
            <div class="option o1">
                A New Car!
            </div>
            <div class="option o2">
                A New Boat!
            </div>
            <div class="option o3">
                A New Skateboard!
            </div>
            <div class="option o4">
                A New Clipper Card!
            </div>
            </div>
                
            <div class="message">
            
            Click to claim your prize.
            </div>
                
           </label>
        </div>
            
        </div>
    );
};


export default Wheel;
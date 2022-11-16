import React from 'react';
import { useState } from 'react';

const ZoneScore = ({scores}) => {
    
    

    return (
        <div className='zoneGame'>
            <h2>Vos scores</h2>
            <li> tictactoe score : { scores ? scores.tictactoe : ""}</li>
            <li> chess score : { scores ? scores.chess : ""}</li>
            <li> roulette score : </li>
            <h2>Vos classements </h2>
        </div>
    );
};

export default ZoneScore;
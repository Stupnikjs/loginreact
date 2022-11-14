import React from 'react';

import { useState } from 'react';
import Game from './Game';


const ZoneGame = () => {

  
    return (
        <div className='zoneGame'>
           <h1> Jeux </h1>
           <div className='gameChoice'>
            <Game name="morpion"></Game>
            <Game name="echec"></Game>
           </div>
           


        </div>
    );
};

export default ZoneGame;
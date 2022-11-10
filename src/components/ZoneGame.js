import React from 'react';

import { useState } from 'react';
import Game from './Game';


const ZoneGame = (props) => {

  
    return (
        <div className='zoneGame'>
           <h1>Vos parties en Cours </h1>
           <div className='gameChoice'>
            <Game name="morpion"></Game>
            <Game name="echec"></Game>
           </div>
           


        </div>
    );
};

export default ZoneGame;
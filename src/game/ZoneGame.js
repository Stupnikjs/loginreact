import React from 'react';

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Game from './Game';


const ZoneGame = (props) => {

    

    return (
        <div className='zoneGame'>
           <h1> Jeux </h1>
           <div className='gameChoice'>
            <Game name="morpion" userid={props.userid}></Game>
            <Game name="echec"></Game>
            <Game name="roulette"></Game>
           </div>
           


        </div>
    );
};

export default ZoneGame;
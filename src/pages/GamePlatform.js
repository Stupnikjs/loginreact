import React from 'react';
import { useState } from 'react';
import Tictactoe from '../tictactoe/Tictactoe';


const GamePlatform = (props) => {
    

    return (
        <div className='gameBoard'>
            <h1> Bienvenue dans la Partie</h1>
            <Tictactoe></Tictactoe>
        </div>
    );
};

export default GamePlatform;
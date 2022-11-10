import React from 'react';
import { useState } from 'react';
import Tictactoe from '../components/Tictactoe';


const GamePlatform = () => {


    return (
        <div className='gameBoard'>
            <h1> Bienvenue dans la Partie</h1>
            <Tictactoe></Tictactoe>
        </div>
    );
};

export default GameBoard;
import React from 'react';
import { useState } from 'react';
import ChessBoard from '../game/chess/ChessBoard';
import Tictactoe from '../game/tictactoe/Tictactoe';


const GamePlatform = (props) => {


    return (
        <div className='gameBoard'>
            <h1> Bienvenue dans la Partie</h1>
            {props.game === 'tictactoe' ? <Tictactoe></Tictactoe> : <ChessBoard></ChessBoard>}
        </div>
    );
};

export default GamePlatform;
import React from 'react';
import { useState } from 'react';
import ChessBoard from '../game/chess/ChessBoard';
import Tictactoe from '../game/tictactoe/Tictactoe';
import Header from './Header';


const GameBoard = (props) => {


    return (
        <div className='gameBoard'>
            <Header user={{username: "Nicolas"}}></Header>
            <h1 className='boardtitle'> Bienvenue dans la Partie de {props.game} </h1>
            {props.game === 'tictactoe' ? <Tictactoe></Tictactoe> : <ChessBoard></ChessBoard>}
        </div>
    );
};

export default GameBoard;
import React from 'react';
import { useState } from 'react';
import ChessBoard from './chess/ChessBoard';
import Tictactoe from './tictactoe/Tictactoe';
import Header from '../profile/Header';
import { useParams } from 'react-router-dom';


const GameBoard = (props) => {

    const {id} = useParams()
    
    return (
        <div className='gameBoard'>
            <Header user={{username: "Nicolas"}}></Header>
            <h1>GameBoard</h1>
            <h1 className='boardtitle'> Bienvenue dans la Partie de {props.game} </h1>
            {props.game === 'tictactoe' ? <Tictactoe userid={id}></Tictactoe> : <ChessBoard user={props.user}></ChessBoard>}
        </div>
    );
};

export default GameBoard;
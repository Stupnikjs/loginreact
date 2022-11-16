import React from 'react';
import { useState } from 'react';
import ChessBoard from './chess/ChessBoard';
import Tictactoe from './tictactoe/Tictactoe';
import Header from '../profile/Header';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useCallback } from 'react';
import Roulette from './roulette/Roulette';


const GameBoard = (props) => {

    const {id} = useParams()
    const renderGame = useCallback((props) => {
        if(props.game === "tictactoe") return <Tictactoe userid={id}></Tictactoe>
        if(props.game === "chess") return <ChessBoard userid={id}/>
        if(props.game === "roulette") return <Roulette userid={id}/>

    }, [props])

    useEffect(() => {
         

    })
    return (
        <div className='gameBoard'>
            <Header user={{username: "Nicolas"}}></Header>
            <h1>GameBoard</h1>
            <h1 className='boardtitle'> Bienvenue dans la Partie de {props.game} </h1>
            {renderGame(props)}
        </div>
    );
};

export default GameBoard;
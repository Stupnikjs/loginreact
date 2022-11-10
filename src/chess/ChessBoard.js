import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ChessCase from './ChessCase';

const ChessBoard = () => {
    const board = [
        [0, 1, 0, 1, 0, 1, 0, 1], 
        [1, 0, 1, 0, 1, 0, 1, 0], 
        [0, 1, 0, 1, 0, 1, 0, 1], 
        [1, 0, 1, 0, 1, 0, 1, 0],  
        [0, 1, 0, 1, 0, 1, 0, 1], 
        [1, 0, 1, 0, 1, 0, 1, 0],  
        [0, 1, 0, 1, 0, 1, 0, 1], 
        [1, 0, 1, 0, 1, 0, 1, 0],  
]

    const boardPiece = ["Rook", "Knight", "Bishop", "Queen", "King", "Pawn"]


    const getPiece = (index, ind) => {
        if (index === 0 || index === 7){
            switch(ind){
                case 0: return boardPiece[0]; 
                case 1: return boardPiece[1]; 
                case 2: return boardPiece[2]; 
                case 3: return boardPiece[3]; 
                case 4: return boardPiece[4]; 
                case 5: return boardPiece[2]; 
                case 6: return boardPiece[1]; 
                case 7: return boardPiece[0]; 
            }
            
        } else if (index === 1 || index === 6) return boardPiece[5]; 
        else return ""
    }

    const InitBoard = () => {
        return board.map(
            (element, index) => {
                return (element.map((elt,ind) => {
                
                return <ChessCase 
                
                coordinate={[index, ind]} 
                type={elt} id={ind+ 8*index}
                piece={getPiece(index, ind)}
                key={ind+ 8*index}
                />
            })   
        )})
    }

    const updateBoardGame = () => {

    }

    const [boardGame, setBoardGame] = useState(InitBoard()) 
    
    const [pieces, setPieces] = useState([
        {id: 0, coordinate: [0, 0]}, {id: 1, coordinate: [0, 1]}, {id: 2, coordinate: [0, 2] }, {id: 3, coordinate: [0, 3]}, {id: 4, coordinate: [0, 4]},  {id: 5,  coordinate: [0, 5]},  
        {id: 6, coordinate: [0, 6]},  {id: 7,  coordinate: [0, 7]},  {id: 8,  coordinate: [1, 0]},   {id: 9,  coordinate: [1, 1]},  {id: 10, coordinate: [1, 2]},  {id: 11, coordinate: [1, 3]},  
        {id: 12, coordinate: [1, 4]}, {id: 13, coordinate: [1, 5]},  {id: 14, coordinate: [1, 6]},  {id: 15, coordinate: [1, 7]} ])


    useEffect(() => {
        // setBoardGame()

    }, [])
    return (
        <div className='chessBoard'>
            {
             boardGame
            }
        </div>
    );
};

export default ChessBoard;
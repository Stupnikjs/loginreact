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
    

    const initPieces = () => {
      
      
      
        return  [createPiece(0, [0, 0], "white", 0), 
        createPiece(1, [0, 1], "white", 1), 
        createPiece(2, [0, 2], "white", 2), 
        createPiece(3, [0, 3], "white", 3), 
        createPiece(4, [0, 4], "white", 4), 
        createPiece(2, [0, 5], "white", 5), 
        createPiece(1, [0, 6], "white", 6), 
        createPiece(0, [0, 7], "white", 7), 
        createPiece(5, [1, 0], "white", 8), 
        createPiece(5, [1, 1], "white", 9), 
        createPiece(5, [1, 2], "white", 10), 
        createPiece(5, [1, 3], "white", 11), 
        createPiece(5, [1, 4], "white", 12), 
        createPiece(5, [1, 5], "white", 13), 
        createPiece(5, [1, 6], "white", 14), 
        createPiece(5, [1, 7], "white", 15), 
    ]
    }

    const createPiece = (indexPiece, arr, color, id) => {
           return  {
                id: id, 
                fonction: boardPiece[indexPiece], 
                coordinates: arr, 
                color: color, 
            } 
    }
    const [pieces, setPieces] = useState(initPieces())
    
    function parser(pieces){
        return pieces.fonction
    }

   function testequality(arr, index, id){
    if (arr[0] === index && arr[1]=== id) return true
   } 
   function returnIndexOfMatchCoordonate(pieces, index, id){
       
      let pieceThatMatch = pieces.find(piece => testequality(piece.coordinates, index, id)) 
      if (pieceThatMatch != undefined) {console.log(pieceThatMatch); return pieceThatMatch.id}
      else return "notfound"
   }



    const InitBoard = () => {
        return board.map(
            (element, index) => {
                return (element.map((elt,ind) => {
                
                    // id de la piece qui a les coordonnées de la case 
                var id = returnIndexOfMatchCoordonate(pieces, index, ind)
                return <ChessCase  
                type={elt} id={ind+ 8*index}
                key={(ind+ index*8)}
                // passe la piece  
                piece={pieces[id]}
                
                />
            })   
        )})
    }


    
    const [boardGame, setBoardGame] = useState(InitBoard()) 
    


    useEffect(() => {
 

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
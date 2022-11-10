import React from 'react';
import Case from './Case';
import { useState } from 'react';
import { useEffect } from 'react';

const Tictactoe = (props) => {
    const [grid, setGrid]= useState( ["", "", "" ,"" , "", "" ,"", "", ""])
    const [gameover, setGameOver] = useState(false)

    
    useEffect(()=> {
        // rows 
        console.log(grid)
        if (grid[0] === grid[1] && grid[1] === grid[2] && grid[0] !== "" ) setGameOver(true)
        if (grid[3] === grid[4] && grid[4] === grid[5] && grid[3] !== "" ) setGameOver(true)
        if (grid[6] === grid[7] && grid[7] === grid[8] && grid[6] !== ""  ) setGameOver(true)
        //colomns
        if (grid[0] === grid[3] && grid[3] === grid[6] && grid[0] !== "" ) setGameOver(true)
        if (grid[1] === grid[4] && grid[4] === grid[7] && grid[1] !== "" ) setGameOver(true)
        if (grid[2] === grid[5] && grid[5] === grid[8] && grid[2] !== "" ) setGameOver(true)
        //diags
        if (grid[0] === grid[4] && grid[4] === grid[8] && grid[0] !== "" ) setGameOver(true)
        if (grid[2] === grid[4] && grid[4] === grid[6] && grid[2] !== "" ) setGameOver(true)
        

        if (gameover) {
            console.log("gameover")
        }
    },[grid])

    return (
        <div className='tictactoe'>
            { grid.map((element, index) => {
                return (<Case index={index} gridSetGrid={[grid, setGrid]}/>)
            })}
        </div>
    );
};

export default Tictactoe;

import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Game = (props) => {
    const [display, setDisplay] = useState(false)

    const handleClick = useCallback(function(e){
        e.preventDefault(); 
        setDisplay(true)
    }, [])

    return (
        <div className='gameCard'>
            <p>Game component</p>
            <button className='btnGameCard' onClick={handleClick} >{props.name}</button>    
            <Link to={`/profile/${props.userid}/` + props.name} className={display ? "" : "notchoosen"}> Partie solo </Link>
            <Link className={display ? "" : "notchoosen"} > Partie contre un contact </Link>

        </div>
        
          
    );
};

export default Game;
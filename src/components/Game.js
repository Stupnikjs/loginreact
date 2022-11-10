import React from 'react';
import { Link } from 'react-router-dom';

const Game = (props) => {
    return (
        <Link to={"/" + props.name} className='gameCard'> {props.name}</Link>
          
    );
};

export default Game;
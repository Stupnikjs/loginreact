import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from "../pages/NotFound"; 
import Profile from '../pages/Profile';


const regHex = /^[A-Fa-f0-9]+$/ 


const SecretWrapper = () => {

    let { id } = useParams();
   


    if (id.match(regHex)) return (<Profile id={id}></Profile>)
    else return (<NotFound></NotFound>)
  
};

export default SecretWrapper;
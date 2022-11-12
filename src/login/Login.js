import React, { useEffect, useState } from 'react';
import Ballons from '../components/Ballon';
import LogForm from './LogForm';
import { Link } from 'react-router-dom';
import OtherSide from './OtherSide';



const Login = (props) => {
    

    useEffect(() => {
      
    }, [])

    return (  
            <div className='authenticate'>
                <div className='logcontainer'>
                <LogForm type={props.type}></LogForm>
                <OtherSide></OtherSide>
                </div>
            </div>
    );
};

export default Login;
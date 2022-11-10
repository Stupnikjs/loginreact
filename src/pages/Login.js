import React, { useEffect, useState } from 'react';
import Ballons from '../components/Ballon';
import LogForm from '../components/LogForm';
import { Link } from 'react-router-dom';



const Login = (props) => {
    

    useEffect(() => {
      
    }, [])

    return (  
            <div className='authenticate'>
                <div className='encreBallon'>
                    <Ballons></Ballons>
                    <LogForm type={props.type}></LogForm>
                    
                </div>
            </div>
    );
};

export default Login;
import React from 'react';
import Ballons from '../components/Ballon';
import LogForm from '../components/LogForm';



const Authenticate = () => {
    return (  
            <div className='authenticate'>
                <div className='test'>
                    <Ballons></Ballons>
                    <LogForm></LogForm>
                </div>
            </div>
    );
};

export default Authenticate;
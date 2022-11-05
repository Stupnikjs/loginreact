import React from 'react';
import { useParams } from 'react-router-dom';


const Profile = (props) => {

    const {id} = useParams()
 
    return (
        <div>
           coucou {id} 
        </div>
    );
};

export default Profile;
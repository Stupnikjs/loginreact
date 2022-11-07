import React, { useEffect} from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ZoneVideo from '../components/ZoneVideo';
import Present from '../components/Present';



const Profile = (props) => {

    const {id} = useParams()
    const [user, setUser] = useState('')
    

   
    
    const fetchData = async (url, method, data) => {
        return await fetch( url , {
            method: method, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
    },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: data
        })
    }

    useEffect( () => {
        
        fetchData(`http://localhost:4000/profile/${id}`, "GET")
        .then( data => data.json())
        .then( data => setUser(data))
    }, )

    return (
        <div className='profile'>
            <Present user={user}></Present>
           <ZoneVideo/>
           
        </div>
    );
};

export default Profile;
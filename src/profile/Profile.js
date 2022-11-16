import React, { useEffect} from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import ZoneGame from '../game/ZoneGame';
import ZoneScore from './ZoneScore';




const Profile = (props) => {

    const {id} = useParams()
    const [user, setUser] = useState('')
    
    
    const fetchData = async (url, method, data) => {
        return fetch( url , {
            method: method, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
            'Content-Type': 'application/json',
            'token': sessionStorage.getItem("token")
    },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: data
        })
    }

    useEffect( () => {
        console.log(sessionStorage.getItem("jwt"))
        fetchData(`http://localhost:4646/profile/${id}`, "GET") 
        .then( data => data.json())
        .then( data => setUser(data.user))
        
    },[id] )

    return (
        <div className='profile'>
           <Header user={user}></Header>
           <Link className="linktogame" to={`/profile/game/${id}`}>Jouez Maintenant</Link>
           <ZoneScore scores={user.scores}/>    
        </div>
    );
};

export default Profile;
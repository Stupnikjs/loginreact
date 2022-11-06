import React, { useEffect} from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';



const Profile = (props) => {

    const {id} = useParams()
    const [test, setTest] = useState('michel') 

    useEffect( () => {
        
        fetch(`http://localhost:4000/profile/${id}` , {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
    },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        })
        .then( response => console.log(response))
        .then( data => {
            try{
                data.json()
                throw new Error() 
            } catch(err){
                console.log(err)
            }
        } )
        .then( data => setTest(data))
    }, [id])

    return (
        <div>
           coucou {id} 
          <li>{test}</li> 
        </div>
    );
};

export default Profile;
import React, { useContext } from 'react'

import AuthContext from '../../Api/context/AuthProvider';

export const Budget =  () => {

    const { auth } = useContext(AuthContext);

    console.log(auth);

    if (Object.keys(auth).length === 0) {
        return (
            <h1> YOU ARE NOT BILLY MANGO, GET OUT</h1>
        )
    } else {
        return (    
            <div>
                <h1>ELLO BILLY MANGO</h1>
            </div>
        )
    }
}

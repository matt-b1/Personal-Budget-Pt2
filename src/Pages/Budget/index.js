import React, { useContext } from 'react';

import AuthContext from '../../Api/context/AuthProvider';
import { useState } from 'react';

import { TestRefresh } from '../../Features/auth/refreshToken';


export const Budget =  () => {

    const { auth } = useContext(AuthContext);

    const [test, setTest] = useState(false);

    TestRefresh(test, setTest);
    
    //console.log(test);

    if (!test) {
        return (
            <h1> YOU ARE NOT BILLY MANGO, GET OUT</h1>
        )
    } else if (test) {
        return (    
            <div>
                <h1>ELLO BILLY MANGO</h1>
            </div>
        )
    }
}

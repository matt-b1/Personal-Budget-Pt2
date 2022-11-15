import React, { useState, useContext } from 'react'

import AuthContext from '../../Api/context/AuthProvider';
import axios from '../../Api/axios';

export const Budget =  () => {

    const { auth } = useContext(AuthContext);

    const [setTest, test] = useState(false);

    const testRefresh = async() => {
        try {
            const response = await axios.get('refresh', {});
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    testRefresh();
            
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

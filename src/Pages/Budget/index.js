import React, { useState, useContext, useEffect } from 'react';

import AuthContext from '../../Api/context/AuthProvider';
import { useNavigate } from 'react-router-dom';

import { refresh } from '../../Features/auth/refresh';
import { logout } from '../../Features/auth/logout';

export const Budget =  () => {
    const { auth, setAuth } = useContext(AuthContext);
    const [loadingState, setLoadingState] = useState(false);
    
    const navigate = useNavigate();

    const user = auth.user;

    useEffect(() => {
        refresh(setAuth);
        setLoadingState(true);
        //console.log(auth.user);
    }, [])

    useEffect(() => { 
         if (!auth.user && !loadingState) {
            console.log(auth);
            setTimeout(() => {
                navigate('/login');
            }, 2000)
        }
    }, [loadingState])
    
    console.log(auth);
    //console.log(auth.user);

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate('/login', { replace: true });
    }

    if (!user) {
        return (
            <h1>You are not logged in, please login</h1>
        )
    } else if (user) {
        return (    
            <div>
                <h1>Welcome {user}</h1>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        )
    }
    
}

import React, { useContext, useEffect } from 'react';

import AuthContext from '../../Api/context/AuthProvider';
import { useNavigate } from 'react-router-dom';

import { refresh } from '../../Features/auth/refresh';
import { logout } from '../../Features/auth/logout';

export const Budget =  () => {
    const { auth, setAuth } = useContext(AuthContext);
    
    const navigate = useNavigate();

    const user = auth.user;

    useEffect(() => {
        refresh(setAuth);
    }, [])

    //console.log(auth);

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate('/login', { replace: true });
    }

    useEffect(() => {
        if (!user) {
            setTimeout(() => {
                navigate('/login');
            }, 2000)
        }
    },[])
    
    if (!user) {
        return (
            <h1>YOU ARE NOT BILLY MANGO</h1>
        )
    } else if (user) {
        return (    
            <div>
                <h1>ELLO {user}</h1>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        )
    }
}

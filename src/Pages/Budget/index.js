import React, { useState, useContext, useEffect } from 'react';

import AuthContext from '../../Api/context/AuthProvider';
import { useNavigate } from 'react-router-dom';

import { refresh } from '../../Features/auth/refresh';
import { logout } from '../../Features/auth/logout';

export const Budget =  () => {
    const { auth, setAuth } = useContext(AuthContext);
    
    const [loading, setLoading] = useState(true);
    
    const navigate = useNavigate();

    useEffect(() => {
        refresh(setAuth, setLoading, navigate);
    }, [auth])

    const user = auth.user;
    
    //console.log(auth.user);

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate('/login');
    }

    if (loading) {
        return (
            <></>
        )
    }
    if (!user && !loading) {
        return (
            <h1>You are not logged in, please login</h1>
        )
    } else if (user && !loading) {
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

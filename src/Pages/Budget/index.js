import React, { useContext } from 'react';

import AuthContext from '../../Api/context/AuthProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { refresh } from '../../Features/auth/refresh';
import { logout } from '../../Features/auth/logout';

export const Budget =  () => {
    const { auth } = useContext(AuthContext);
    
    const navigate = useNavigate();
    const [test, setTest] = useState(false);

    const user = auth.user;

    refresh(test, setTest);

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate('/login', { replace: true });
    }

    if (!test) {
        return (
            <h1> YOU ARE NOT {user}, GET OUT</h1>
        )
    } else if (test) {
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

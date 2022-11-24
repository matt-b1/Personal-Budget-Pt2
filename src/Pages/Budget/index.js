import React, { useState, useContext, useEffect } from 'react';

import AuthContext from '../../Api/context/AuthProvider';
import { useNavigate } from 'react-router-dom';

import { refresh } from '../../Features/auth/refresh';
import { logout } from '../../Features/auth/logout';

import { BudgetingForm } from '../../Components';
import './index.css';

export const Budget =  () => {
    const { auth, setAuth } = useContext(AuthContext);
    
    const [loading, setLoading] = useState(true);
    
    const navigate = useNavigate();

    useEffect(() => {
        refresh(setAuth, setLoading);
    }, [])

    const user = auth.user;

    const handleLogout = (e) => {
        e.preventDefault();
        logout(setAuth, navigate);
    }

    useEffect(() => {
        refresh(setAuth, setLoading);
        if (!user) {
            navigate('/login');
        }
    }, [])
    
    //console.log(auth.user);

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
            <div id='budgetContent'>
                <h1>Welcome {user}</h1>
                <button onClick={handleLogout}>
                    Logout
                </button>
                <BudgetingForm />
            </div>
        )
    }
    
}

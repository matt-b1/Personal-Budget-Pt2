import { useRef, useState, useEffect } from 'react';
import axios from '../../Api/axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

export const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [pwdFocus, setPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const LOGIN_URL = '/login';
    
    useEffect(() => {
        userRef.current.focus();
    }, [])
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({ 
                'username' : user, 
                'password' : pwd, 
            }),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
          );
          setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } 
            /*
            else if (err.response?.status === 401) {
                setErrMsg('Registration Failed');
            } 
            */ 
            else {
                setErrMsg('Registration Failed')
            }
        }
    }

    return (
        <div>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form className="login" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => (e.target.value)}
                    value={user}
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    onFocus={() => setPwdFocus(true)}
                    onBlue={() => setPwdFocus(false)}
                    required
                />
                <button>Sign In</button>    
            </form>
            <p>
                Need an Account?<br />
                <span className='line'>
                    <a href="#">Sign Up</a>
                </span>
            </p>
        </div>
    )
}

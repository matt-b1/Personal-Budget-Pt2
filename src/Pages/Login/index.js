import { useRef, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Api/context/AuthProvider';
import axios from '../../Api/axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

export const Login = () => {
    const { auth, setAuth } = useContext(AuthContext);

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [pwdFocus, setPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const LOGIN_URL = '/login';
    
    useEffect(() => {
        userRef.current.focus();
        //console.log(auth);
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
            //console.log(response);
            const accessToken = response?.data?.accessToken;
            setAuth({ user, pwd, accessToken });
            setUser('');
            setPwd('');
            setErrMsg('');
            setSuccess(true);
            navigate('/budget', { replace: true });
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
                setErrMsg('Login Failed')
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
                    onChange={(e) => setUser(e.target.value)}
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
                    onBlur={() => setPwdFocus(false)}
                    required
                />
                <button>Sign In</button>    
            </form>
            <p>
                Need an Account?<br />
                <span className='line'>
                    <a href="/register">Sign Up</a>
                </span>
            </p>
        </div>
    )
}

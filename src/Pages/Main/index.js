import { BudgetingForm } from '../../Components';

import { useRef, useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import './index.css';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const handleSubmit = e => {
    e.preventDefault();
}

export const Main = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [confirmPwd, setConfirmPwd] = useState('');
    const [validConfirmPwd, setValidConfirmPwd] = useState(false);
    const [confirmPwdFocus, setConfirmPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidUser(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        if (validPwd) {
            setValidConfirmPwd(pwd === confirmPwd);
        }
    }, [pwd, confirmPwd])

    console.log(validUser);
    console.log(validConfirmPwd);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    return (
        <div id='form'>
            <BudgetingForm />
            <h1> Login </h1>
            <form className="budgetForm" onSubmit={handleSubmit}>
                <div className="username">
                    <label htmlFor="username"> Username: </label>
                    <input 
                        type="text" 
                        id="username" 
                        ref={userRef} 
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        onFocus = {() => setUserFocus(true)}
                        onBlur = {() => setUserFocus(false)}
                        required
                    /> 
                </div>
                <div className={!validUser && userFocus?'show':'hide'}>
                    <ul className='inputValidation'>
                        <li>4 to 24 characters</li>
                        <li>Must begin with a letter</li>
                        <li>Numbers, underscores, hyphens allowed</li>
                    </ul>
                </div>
                <div className="password">
                    <label htmlFor="password"> Password: </label>
                    <input 
                        type="password" 
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        onFocus = {() => setPwdFocus(true)}
                        onBlur = {() => setPwdFocus(false)}
                        required
                    />
                </div>
                <div className="confirmPassword">
                    <label htmlFor="confirmPassword"> Confirm password: </label>
                    <input 
                        type="password" 
                        id="confirmPassword"
                        onChange={(e) => setConfirmPwd(e.target.value)}
                        value={confirmPwd}
                        onFocus = {() => setConfirmPwdFocus(true)}
                        onBlur = {() => setConfirmPwdFocus(false)}
                        required
                    />
                </div>
                <div className={(!validPwd || !validConfirmPwd) && (pwdFocus || confirmPwdFocus)?'show':'hide'}>
                    <ul className='inputValidation'>
                        <li>8 to 24 characters</li>
                        <li>Must include 1 uppercase letter</li>
                        <li>Must include 1 number</li>
                        <li>Must include a special character (!@#$%)</li>
                    </ul>
                </div>
                <div className="submit">
                    <input type="submit"></input>
                </div>
            </form>
        </div>
    )    
}

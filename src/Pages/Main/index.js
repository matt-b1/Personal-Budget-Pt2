import { BudgetingForm } from '../../Components';

import { useRef, useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from '../../Api/axios';

import './index.css';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/users';

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

    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [dateOfBirth, setDateOfBirth] = useState('');
    const [validDateOfBirth, setValidDateOfBirth] = useState(false);
    const [dateOfBirthFocus, setDateOfBirthFocus] = useState(false);

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
    }, [pwd, validPwd, confirmPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, confirmPwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2 || !firstName || !lastName || !dateOfBirth) {
            setErrMsg('Invalid Entry');
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL, JSON.stringify({ 
                'username' : user, 
                'password' : pwd, 
                'userInfo' : {
                    'firstName': firstName,
                    'lastName': lastName,
                    'dateOfBirth': dateOfBirth
                }
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
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            //errRef.current.focus();
        }
    }

    return (
        <div id='form'>
            <BudgetingForm />
            <h1> Register    </h1>
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
                <h3 id="detailsHeader">Personal Details</h3>
                <div className="firstName">
                    <label htmlFor="firstName"> First name: </label>
                    <input
                        type="text"
                        id="firstName"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        onFocus = {() => setFirstNameFocus(true)}
                        onBlur = {() => setFirstNameFocus(false)}
                        required
                    />
                </div>
                <div className="lastName">
                    <label htmlFor="lastName"> Last name: </label>
                        <input
                            type="text"
                            id="lastName"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            onFocus = {() => setLastNameFocus(true)}
                            onBlur = {() => setLastNameFocus(false)}
                            required
                        />
                    </div>
                <div className="dateOfBirth">
                    <label htmlFor="dateofBirth"> Date of Birth: </label>
                        <input
                            type="text"
                            id="dateOfBirth"
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            value={dateOfBirth}
                            onFocus = {() => setDateOfBirthFocus(true)}
                            onBlur = {() => setDateOfBirthFocus(false)}
                            required
                        />
                </div>
                <div className="submit">
                    <input type="submit"></input>
                </div>
            </form>
        </div>
    )    
}

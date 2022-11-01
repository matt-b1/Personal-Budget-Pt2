import { BudgetingForm } from '../../Components';

import { useRef, useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

const handleSubmit = e => {
    e.preventDefault();
}

export const Main = () => {
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    //console.log(user)

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
                            required
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="password"> Password: </label>
                        <input 
                            type="password" 
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
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

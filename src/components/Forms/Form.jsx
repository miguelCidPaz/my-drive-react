import { Login } from "./internal-components/Login";
import { Register } from "./internal-components/Register";
import {useState, useEffect} from 'react';

export const Form = ({ action }) => {

    const [param, setParam] = useState(action);

    const whatForm = () => {
        switch (param) {
            case 'login':
                return <Login />

            case 'register':
                return <Register />

            case 'modify':
                return <Register action={param} />

            default:
                return <Login />
        }
    }
        useEffect (() => {},[param]) 

        const handleParam = () => {
            if (param === 'login') {
                setParam('register');
            } else {
                setParam('login');
            }
        }

    return (
        <div className="form--main">
            {whatForm()}
            <label className="form--label">{param === 'login' ? 'Todavía no tienes una cuenta?' : 'Ya estás logeado?'}<button className="btn btn--left" onClick={() => handleParam()}>{param === 'login' ? 'Create new account' : 'Log In'}</button></label>
        </div>
    )
}
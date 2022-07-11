import { Login } from "./internal-components/Login";
import { Register } from "./internal-components/Register";
import {useState, useEffect} from 'react';
import { useTranslation } from "react-i18next";

export const Form = ({ action }) => {

    const [param, setParam] = useState(action);

    const [t, i18n] = useTranslation("global");

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
            <label className="form--label">{param === 'login' ? t("Form.changeLabel") : t("Form.changeForm")}<button className="btn btn--left" onClick={() => handleParam()}>{param === 'login' ? t("Form.signUp") : 'Log In'}</button></label>
        </div>
    )
}
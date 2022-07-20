import { Login } from "./internal-components/Login";
import { Register } from "./internal-components/Register";
import { Account } from "./internal-components/Account";
import { useState, useEffect, useContext } from 'react';
import { useTranslation } from "react-i18next";
import { UserContext } from "../Context/userContext";

export const Form = ({ action }) => {

    const [param, setParam] = useState(action);
    const [t, i18n] = useTranslation("global");
    const { user, token, connectSession } = useContext(UserContext)

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
    useEffect(() => { }, [param])

    const handleParam = () => {
        if (param === 'login') {
            setParam('register');
        } else {
            setParam('login');
        }
    }

    const logout = () => {
        connectSession({ id: null, name: null }, null)
        localStorage.removeItem('uToken')
    }

    return (
        <div className="form--main">
            {user && token ? <Account name={user.name} /> : whatForm()}
            {user && token ? <button className="btn" onClick={() => logout()}>{t("Account.logout")}</button> : <label className="form--label">{param === 'login' ? t("Form.changeLabel") : t("Form.changeForm")}<button className="btn btn--left" onClick={() => handleParam()}>{param === 'login' ? t("Form.signUp") : 'Log In'}</button></label>}
        </div>
    )
}
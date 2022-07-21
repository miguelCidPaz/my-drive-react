import { Login } from "./internal-components/Login";
import { Register } from "./internal-components/Register";
import { Account } from "./internal-components/Account";
import { useState, useEffect, useContext } from 'react';
import { useTranslation } from "react-i18next";
import { UserContext } from "../Context/userContext";

export const Form = ({ action }) => {

    const [param, setParam] = useState(action);
    const [err, setErr] = useState(null)
    const [t, i18n] = useTranslation("global");
    const { user, token, connectSession } = useContext(UserContext)

    const whatForm = () => {
        switch (param) {
            case 'login':
                return <Login setErr={setErr} />

            case 'register':
                return <Register setErr={setErr} />

            case 'modify':
                return <Register action={param} setErr={setErr} />

            default:
                return <Login setErr={setErr} />
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

    useEffect(() => {
        setTimeout(() => {
            setErr(null)
        }, 10000);
    }, [err])

    return (
        <div className="form--main">
            {err !== null ? <div className="form--err-to-api">{err}</div> : null}
            {user && token ? <Account name={user.name} /> : whatForm()}
            {user && token ? <button className="btn" onClick={() => logout()}>{t("Account.logout")}</button> : <label className="form--label">{param === 'login' ? t("Form.changeLabel") : t("Form.changeForm")}<button className="btn btn--left" onClick={() => handleParam()}>{param === 'login' ? t("Form.signUp") : 'Log In'}</button></label>}
        </div>
    )
}
import { Form } from "../Forms/Form"
import { useContext } from "react";
import { UserContext } from "../Context/userContext";

import { useTranslation } from "react-i18next";


export const ConfigExplorer = ({ id, changeTheme }) => {
    const { user, token } = useContext(UserContext)

    const [t, i18n] = useTranslation("global");

    const changeLang = () => {
        if (i18n.language === 'es') {
            i18n.changeLanguage('en')
        } else {
            i18n.changeLanguage('es');
        }
    }



    return (
        <div className="configexplorer--main">
            {id === 'login' ? <Form action={id} /> : null}
            {id === 'register' ? <Form action={id} /> : null}
            {!id ?
                <>
                    <div className="configexplorer--section">
                        <button className="configexplorer-btn-lang" onClick={changeLang}>{t("Info.changeLanguage")}</button>
                    </div>
                    <div className="configexplorer--section">
                        <button className="configexplorer-btn-theme" onClick={() => changeTheme()}>{t("Info.changeTheme")}</button>
                    </div>
                </>
                : null}
        </div>
    )
}
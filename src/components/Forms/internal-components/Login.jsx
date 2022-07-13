import { useForm } from "react-hook-form"

import { signIn } from '../../../api/api'

import { UserContext } from "../../Context/userContext";

import { useContext } from "react";

import { useTranslation } from "react-i18next";


export const Login = () => {

    const [t, i18n] = useTranslation("global");


    const { connectSession } = useContext(UserContext);


    const { register, handleSubmit } = useForm();

    const onSubmit = async data => {
        const { username, password } = data;

        const pswd = parseInt(password);

        const response = await signIn(username, pswd);
        connectSession(response.userForToken, response.token);
        console.log(response);
    };

    const changeLang = () => {
        if(i18n.language === 'es'){
            i18n.changeLanguage('en')
        }else {
            i18n.changeLanguage('es');
        }
    }



    return (
        <div className="form--body">
            <h2 className="form--label">{t("Form.title")}</h2>

            <form id='form' className='form--container' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("username")} placeholder={t("SignIn.username")} required className="form--input" />
                <input type="password" {...register("password")} placeholder={t("SignIn.password")} required className="form--input" />

                <button className='btn'>{t("SignIn.btnSignIn")}</button>

            </form>
            <button className="btn" onClick={changeLang}>Change Language</button>

        </div>
    )
}



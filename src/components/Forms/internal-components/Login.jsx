import { useForm } from "react-hook-form"

import { signIn } from '../../../api/api'

import { UserContext } from "../../Context/userContext";

import { useContext } from "react";

import { useTranslation } from "react-i18next";

import md5 from 'md5';


export const Login = () => {

    const [t] = useTranslation("global");


    const { connectSession } = useContext(UserContext);


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async data => {
        const { username, password } = data;

        const pswd = md5(password);

        const response = await signIn(username, pswd);
        connectSession({ name: response.userForToken.username, id: response.userForToken.id }, response.token);
    };



    return (
        <div className="form--body">
            <h2 className="form--label">{t("Form.title")}</h2>

            <form id='form' className='form--container' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("username",
                    {
                        required: { value: true, message: 'Campo requerido' },
                        maxLength: { value: 50, message: 'Tamaño maximo 50' },
                        minLength: { value: 3, message: 'Tamaño minimo 3' }
                    })} placeholder={t("SignIn.username")} required className="form--input" />
                {errors.username && <div className='form--message-errors'><p>{errors.username.message}</p></div>}

                <input type="password" {...register("password",
                    {
                        required: { value: true, message: 'Campo requerido' },
                        maxLength: { value: 50, message: 'Tamaño maximo 50' },
                        minLength: { value: 3, message: 'Tamaño minimo 3' }
                    })} placeholder={t("SignIn.password")} required className="form--input" />
                {errors.password && <div className='form--message-errors'><p>{errors.password.message}</p></div>}

                <button className='btn'>{t("SignIn.btnSignIn")}</button>

            </form>

        </div>
    )
}



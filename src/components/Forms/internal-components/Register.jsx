import { useForm } from "react-hook-form"

import { useEffect, useState } from 'react';
import { signUp } from '../../../api/api'

import { useTranslation } from "react-i18next";


// import './SignUpForm.scss';



export const Register = () => {

  const [t] = useTranslation("global");


  const [file, setFile] = useState(null);

  useEffect(() => {
    console.log('useEffect');
    console.log(file);
  }, [file])

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {

    const { password } = data;

    const pswd = parseInt(password);

    signUp({
      ...data,
      pswd,
      picture: file
    }
    );
  };




  return (
    <div className="form--body">
      <h2 className="form--label">{t("SignUp.register")}</h2>

      <form id='form' className='form--container' onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
        <input type="text" {...register("username")} placeholder={t("SignUp.username")} className="form--input"/>
        <input type="password" {...register("password")} placeholder={t("SignUp.password")} className="form--input"/>
        <input type="text" {...register("email")} placeholder={t("SignUp.email")} className="form--input"/>
        <input type="text" {...register("biography")} placeholder={t("SignUp.biography")} className="form--input"/>
        <input id="file" type="file" accept="image/png, image/jpeg, image/jpg" onChange={e => setFile(e.target.files[0])} className="form--input"/>

        <button className='btn'>{t("SignUp.btnSignUp")}</button>
      </form>
    </div>

  )
}

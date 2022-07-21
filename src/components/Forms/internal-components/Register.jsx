import { useForm } from "react-hook-form"
import { UserContext } from '../../Context/userContext';
import { useEffect, useState, useContext } from 'react';
import { signUp } from '../../../api/api'
import md5 from 'md5';

import { useTranslation } from "react-i18next";


// import './SignUpForm.scss';



export const Register = ({ setErr }) => {

  const [t] = useTranslation("global");


  const { user, token, connectSession } = useContext(UserContext)
  const [file, setFile] = useState(null);

  useEffect(() => {
  }, [file])

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setErr(null)
    const { password } = data;

    const pswd = md5(password);

    const petition = await signUp(setErr, {
      ...data,
      pswd,
      picture: file
    });

    if (petition) {
      const newUser = {
        id: petition.id,
        name: petition.username
      }
      connectSession(newUser, petition.token)
    }

  };

  return (
    <div className="form--body">
      <h2 className="form--label">{t("SignUp.register")}</h2>

      <form id='form' className='form--container' onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
        <input type="text" {...register("username",
          {
            required: { value: true, message: 'Campo Requerido' },
            maxLength: { value: 50, message: 'Tamaño maximo 50' },
            minLength: { value: 3, message: 'Tamaño minimo 3' }
          })} placeholder={t("SignUp.username")} className="form--input" />
        {errors.username && <div className='form--message-errors'><p>{errors.username.message}</p></div>}

        <input type="password" {...register("password",
          {
            required: { value: true, message: 'Campo Requerido' },
            maxLength: { value: 50, message: 'Tamaño maximo 50' },
            minLength: { value: 3, message: 'Tamaño minimo 3' }
          })} placeholder={t("SignUp.password")} className="form--input" />
        {errors.password && <div className='form--message-errors'><p>{errors.password.message}</p></div>}

        <input type="text" {...register("email",
          {
            required: { value: true, message: 'Campo Requerido' },
            maxLength: { value: 50, message: 'Tamaño maximo 50' },
            pattern: { value: /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, message: 'Formato no correcto' }
          })} placeholder={t("SignUp.email")} className="form--input" />
        {errors.email && <div className='form--message-errors'><p>{errors.email.message}</p></div>}

        <input type="text" {...register("biography",
          {
            required: { value: true, message: 'Campo Requerido' },
            maxLength: { value: 255, message: 'Tamaño maximo 255' }
          })} placeholder={t("SignUp.biography")} className="form--input" />
        {errors.biography && <div className='form--message-errors'><p>{errors.biography.message}</p></div>}

        <input id="file" type="file" accept="image/png, image/jpeg, image/jpg" onChange={e => setFile(e.target.files[0])} className="form--input" />

        <button className='btn'>{t("SignUp.btnSignUp")}</button>
      </form>
    </div>

  )
}

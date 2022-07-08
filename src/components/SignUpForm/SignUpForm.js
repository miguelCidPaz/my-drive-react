import { useForm } from "react-hook-form"

import { useEffect, useState } from 'react';
import { signUp } from '../../api/api'


import './SignUpForm.scss';



const SignUpForm = () => {

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
    <div className="signUp">
      <h2>Register Now!</h2>

      <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
        <input type="text" {...register("username")} placeholder='Username *' />
        <input type="password" {...register("password")} placeholder='Password *' />
        <input type="text" {...register("email")} placeholder='Email *' />
        <input type="text" {...register("biography")} placeholder='Biography *' />
        <input id="file" type="file" accept="image/png, image/jpeg, image/jpg" onChange={e => setFile(e.target.files[0])} />

        <button className='btn btn-primary btn-block btn-large'>Sign Up</button>
      </form>
    </div>

  )
}

export default SignUpForm;

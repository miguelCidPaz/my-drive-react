
import { useEffect, useState } from 'react';
import {signUp} from '../../api/api' 

import { useForm } from "react-hook-form";

import './SignUpForm.scss';



const SignUpForm = () => {
    

    const [file, setFile] = useState(null);

    useEffect( () => {
        console.log('useEffect');
        console.log(file);
        signUp("Carmen", '1234', "carmen@gmail.com", "Hello I'm Carmen", file);
      }, [file])

      const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);


    return (
    <div>
        <h2>Formulario</h2>
        <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="text" {...register("password")} placeholder='password' />
                    <input type="text" {...register("email")} placeholder='email' />
                    <input type="text" {...register("biography")} placeholder='biography' />
                    <button className='btn'>Sign In</button>
                </form>
    </div>
        
    )
}

export default SignUpForm;

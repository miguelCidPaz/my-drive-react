import { useForm } from "react-hook-form"

import { signIn } from '../../api/api'


import './SignInForm.scss';

const SignIn = () => {


    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const { username, password } = data;

        const pswd = parseInt(password);

        signIn(username, pswd)
    };


    return (
        <div className="login">
            <h2>Sign In</h2>

            <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("username")} placeholder='Username' required />
                <input type="password" {...register("password")} placeholder='password' required />

                <button className='btn btn-primary btn-block btn-large'>Sign In</button>
                <label>Not registered? <a href="#0">Create an account</a></label>
            </form>
        </div>
    )
}

export default SignIn;

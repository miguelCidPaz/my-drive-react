import { useForm } from "react-hook-form"

import { signIn } from '../../../api/api'

import { UserContext } from "../../Context/userContext";

import { useContext } from "react";


export const Login = () => {

    
    const {connectSession} = useContext(UserContext);


    const { register, handleSubmit } = useForm();

    const onSubmit = async  data => {
        const { username, password } = data;

        const pswd = parseInt(password);

        const response = await signIn(username, pswd);
        connectSession(response.token, response.userForToken);
    };




    return (
        <div className="form--body">
            <h2 className="form--label">Sign In</h2>

            <form id='form' className='form--container' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("username")} placeholder='Username' required className="form--input"/>
                <input type="password" {...register("password")} placeholder='password' required className="form--input"/>

                <button className='btn'>Sign In</button>
                
            </form>
        </div>
    )
}



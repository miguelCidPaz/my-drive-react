import { useForm } from "react-hook-form"
import { UserContext } from '../../Context/userContext';
import { useEffect, useState, useContext } from 'react';
import { signUp } from '../../../api/api'


// import './SignUpForm.scss';



export const Register = () => {
  const { user, token, connectSession } = useContext(UserContext)
  const [file, setFile] = useState(null);

  useEffect(() => {
    console.log('useEffect');
    console.log(file);
  }, [file])

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {

    const { password } = data;

    const pswd = parseInt(password);

    const petition = await signUp({
      ...data,
      pswd,
      picture: file
    });

    console.log(petition);

    const newUser = {
      id: petition.id,
      name: petition.username
    }

    connectSession(newUser, petition.token)
  };




  return (
    <div className="form--body">
      <h2 className="form--label">Register Now!</h2>

      <form id='form' className='form--container' onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
        <input type="text" {...register("username")} placeholder='Username *' className="form--input" />
        <input type="password" {...register("password")} placeholder='Password *' className="form--input" />
        <input type="text" {...register("email")} placeholder='Email *' className="form--input" />
        <input type="text" {...register("biography")} placeholder='Biography *' className="form--input" />
        <input id="file" type="file" accept="image/png, image/jpeg, image/jpg" onChange={e => setFile(e.target.files[0])} className="form--input" />

        <button className='btn'>Sign Up</button>
      </form>
    </div>

  )
}

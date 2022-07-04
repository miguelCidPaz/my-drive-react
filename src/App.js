import { useEffect, useState } from 'react';
import Modal from './components/Modal/Modal';
import SignUpForm from './components/SignUpForm/SignUpForm';
import {useModal} from './hooks/useModal'
import {useFetch} from './hooks/useFetch'
import {signIn, signUp} from './api/api'
// import api from './api/api'


 function App() {

  const [file, setFile] = useState(null);

  useEffect(() =>{

    signIn();
  }, [])



  // ============================   FORMDATA useEffect   ============================
  useEffect( () => {
    console.log('useEffect');
    console.log(file);
    signUp("Carmen", '1234', "carmen@gmail.com", "Hello I'm Carmen", file);
  }, [file])
  // ============================   FORMDATA useEffect   ============================


  
    // const users = await data.json();
    // console.log(users);

// }
  // useFetch()
  // useEffect(() => {
  //   console.log('useEffect');
  //   fetch('http://localhost:4000/my-drive/usr/login', {
  //     method: 'post',
  //     body: {
  //       username: "Wilmer",
  //       password:  1234
  //     }
  //   })
  //   .then((response) => response.json())
  //   .then(json => {
  //     console.log(json);
  //   })
  // }, [])

    // const login = await 

    // console.log(login);
      // .then((response) => {
      //   console.log(response);
      // })


        
        // const handleChangeFile = ev => {
        //   const file = ev.target.files[0]
        //   let fileData = new FileReader();
        //   setFile(fileData.readAsDataURL(file))
          
        //   const fileData = e.target.files[0];
  
        //     if (file) {
        //       console.log(file);
        //       formData.append("image", file);
        //   }
        // }

      
  const [isOpen, openModal, closeModal] = useModal(false);
  return (
    <div>
      <SignUpForm></SignUpForm>



      <input id="file" type="file" accept="image/png, image/jpeg" onChange={e => setFile(e.target.files[0])} />

      <button onClick={openModal}>Folder 1</button>
      <Modal isOpen={isOpen} closeModal={closeModal} >
        <div className=''>Here will show the folders</div>
        <div className=''>Here will show the files</div>
      </Modal>
    </div>
  )
}

export default App;

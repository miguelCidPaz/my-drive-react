import { useEffect } from "react";

export const useFetch = () => {
     useEffect(async () => {
        console.log('useEffect');
        const login = await fetch('http://localhost:4000/my-drive/usr/login', {
          method: 'post',
          body: {
            username: "Wilmer",
            password:  1234
          }
        })

        console.log(login);
        
      }, [])
}

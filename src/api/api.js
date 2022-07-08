
export function signIn(uName, password) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "username": uName,
    "password": password
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  return fetch("http://localhost:4000/my-drive/usr/login", requestOptions)
    .then(response => response.json())
    .then(result => {
      localStorage.setItem('uToken', result.token);
    })
    .catch(error => console.log('error', error));
}

export function signUp({ username, pswd, email, biography, picture }) {

  const data = {
    "username": username,
    "password": pswd,
    "email": email,
    "biography": biography
  }


  var formdata = new FormData();
  formdata.append("username", data.username);
  formdata.append("password", data.password);
  formdata.append("email", data.email);
  formdata.append("biography", data.biography);

  formdata.append("photo", picture);


  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  fetch("http://localhost:4000/my-drive/usr/register", requestOptions)
    .then(response => response.json())
    .then(result => {
      localStorage.setItem('uToken', result);
    })
    .catch(error => console.log('error', error));
}
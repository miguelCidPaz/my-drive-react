
export function signIn() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "username": "Wilmer",
    "password": 1234
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  return fetch("http://localhost:4000/my-drive/usr/login", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export function signUp(username, pswd, email, description, picture) {

  const data = {
    "username": username,
    "password": pswd,
    "email": email,
    "biography": description
  }

  var formdata = new FormData();
  formdata.append("username", data.username);
  formdata.append("password", data.pswd);
  formdata.append("email", data.email);
  formdata.append("biography", data.description);

  formdata.append("photo", picture);
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  fetch("http://localhost:4000/my-drive/usr/register", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

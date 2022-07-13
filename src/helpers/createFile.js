const { REACT_APP_API_URL } = process.env

export const createFile = async (token, id, file) => {

    var formdata = new FormData();
    formdata.append("id_folder", id)
    formdata.append("file", file)

    var requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        body: formdata,
        redirect: 'follow',
    };

    const petition = await fetch(`${REACT_APP_API_URL}files/upload-file`, requestOptions)

    console.log(petition);

    const res = await petition.json();

    return res
}
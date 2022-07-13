const { REACT_APP_API_URL } = process.env

export const createFile = async (token, id, file) => {
    file.originalname = file.name
    file.filename = file.originalname

    const petition = await fetch(`${REACT_APP_API_URL}files/upload-file`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            file: file,
            id_folder: id
        })
    })

    const res = await petition.json();

    return res
}
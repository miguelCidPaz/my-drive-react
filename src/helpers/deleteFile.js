
const { REACT_APP_API_URL } = process.env

export const deleteFile = async (token, id, name) => {
    const petition = await fetch(`${REACT_APP_API_URL}files/delete-file`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            id_file: id,
            name: name
        })
    })

    const res = await petition.json();

    return res
}
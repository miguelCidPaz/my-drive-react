const { REACT_APP_API_URL } = process.env

export const deleteFolder = async (token, id) => {
    const petition = await fetch(`${REACT_APP_API_URL}folder/delete-folder`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            id_folder: id
        })
    })

    const res = await petition.json();

    return res
}
const { REACT_APP_API_URL } = process.env

export const getAllFoldersByIdUser = async (token, id) => {
    const petition = await fetch(`${REACT_APP_API_URL}folder/all-folders/${id}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })

    const res = await petition.json();

    return res
}
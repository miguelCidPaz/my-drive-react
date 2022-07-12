const { REACT_APP_API_URL } = process.env

export const getAllFilesByIdFolder = async (token, id) => {
    const petition = await fetch(`${REACT_APP_API_URL}files/all/${id}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })

    const res = await petition.json();

    return res
}
const { REACT_APP_API_URL } = process.env

export const downloadFile = async (id, token) => {
    const petition = await fetch(`${REACT_APP_API_URL}files/download/${id}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })

    const res = await petition.json();

    return res
}
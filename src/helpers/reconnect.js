const { REACT_APP_API_URL } = process.env

export const reconnect = async (token) => {
    const petition = await fetch(`${REACT_APP_API_URL}usr/reconnect`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })

    const res = await petition.json();

    return res
}
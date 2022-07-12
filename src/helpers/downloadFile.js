const { REACT_APP_API_URL_SHORT } = process.env

export const downloadFile = async (name, token) => {
    const petition = await fetch(`${REACT_APP_API_URL_SHORT}${name}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })

    const body = petition.body
    const res = await body.getReader();

    return res
}
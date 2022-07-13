const { REACT_APP_API_URL } = process.env

export const createFolder = async (token, id, name) => {
    const petition = await fetch(`${REACT_APP_API_URL}folder/create-folder`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            name: name,
            id: id,
            location: './'
        })
    })

    const res = await petition.json();

    return res
}
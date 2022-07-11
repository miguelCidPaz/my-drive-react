import { useEffect, useContext, useState } from 'react';
import { getAllFilesByIdFolder } from '../../helpers/getAllFilesByIdFolder';
import { getAllFoldersByIdUser } from '../../helpers/getAllFolders';
import { UserContext } from '../Context/userContext'
import { Item } from '../Item/Item';

export const FolderExplorer = ({ theme, id, openWindow }) => {
    const [items, setItems] = useState([])
    const { user, token } = useContext(UserContext)

    useEffect(() => {
        callToApi();
    }, [])

    const callToApi = async () => {
        if (id) {
            const response = await getAllFilesByIdFolder(token, id)
            setItems(response)
        } else {
            const response = await getAllFoldersByIdUser(token, user.id)
            setItems(response)
        }
    }

    return (
        <div className="folderexplorer--main">
            {items.length > 0 ? items.map((e, i) => {
                return <Item element={e} openWindow={openWindow} key={i} />
            }) : null}
        </div>
    )
}
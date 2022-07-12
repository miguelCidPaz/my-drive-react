import { useEffect, useContext, useState } from 'react';
import { deleteFile } from '../../helpers/deleteFile';
import { deleteFolder } from '../../helpers/deleteFolder';
import { downloadFile } from '../../helpers/downloadFile';
import { getAllFilesByIdFolder } from '../../helpers/getAllFilesByIdFolder';
import { getAllFoldersByIdUser } from '../../helpers/getAllFolders';
import { UserContext } from '../Context/userContext'
import { Item } from '../Item/Item';

export const FolderExplorer = ({ theme, id, openWindow }) => {
    const [items, setItems] = useState([])
    const { token, user } = useContext(UserContext)


    const callToApi = async () => {
        if (id) {
            const response = await getAllFilesByIdFolder(token, id)
            setItems(response)
        } else {
            const response = await getAllFoldersByIdUser(token, user.id)
            setItems(response)
        }
    }

    const deleteItem = async (id, name, type) => {
        const newItems = items.filter(e => e.id !== id)
        if (type === 'folder') {
            await deleteFolder(token, id)
        } else {
            await deleteFile(token, id, name)
        }
        setItems(newItems);
    }

    const downloadItem = async (name) => {
        const petition = await downloadFile(name);
        console.log(petition);
    }

    useEffect(() => {
        callToApi();
    }, [])

    useEffect(() => {

    }, [items])

    return (
        <div className="folderexplorer--main">
            {items.length > 0 ? items.map((e, i) => {
                return <Item element={e}
                    openWindow={openWindow}
                    key={i}
                    deleteItem={deleteItem}
                    downloadItem={downloadItem} />
            }) : null}
        </div>
    )
}
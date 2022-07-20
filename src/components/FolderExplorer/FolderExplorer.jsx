import { useEffect, useContext, useState } from 'react';
import { deleteFile } from '../../helpers/deleteFile';
import { deleteFolder } from '../../helpers/deleteFolder';
import { downloadFile } from '../../helpers/downloadFile';
import { createFile } from '../../helpers/createFile';
import { createFolder } from '../../helpers/createFolder';
import { getAllFilesByIdFolder } from '../../helpers/getAllFilesByIdFolder';
import { getAllFoldersByIdUser } from '../../helpers/getAllFolders';
import { UserContext } from '../Context/userContext'
import { Item } from '../Item/Item';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Create } from './internal-components/Create';

export const FolderExplorer = ({ theme, id, openWindow }) => {
    const [items, setItems] = useState([])
    const [deploy, setDeploy] = useState(false)
    const { user, token } = useContext(UserContext)


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

    const createItem = async (att, type) => {
        if (type === 'folder') {
            try {
                const petition = await createFolder(token, user.id, att)
                setItems([...items, petition])
            } catch (e) {
                console.log(e);
            }

        } else {
            try {
                const petition = await createFile(token, id, att, user.id)
                setItems([...items, petition])
            } catch (e) {
                console.log(e);
            }
        }
    }

    useEffect(() => {
        callToApi();
    }, [])

    useEffect(() => {

    }, [items])

    useEffect(() => {
        callToApi();
    }, [user, token])

    return (
        <div className="folderexplorer--main">
            {items.length > 0 ? items.map((e, i) => {
                return <Item element={e}
                    openWindow={openWindow}
                    key={i}
                    deleteItem={deleteItem}
                    downloadItem={downloadItem} />
            }) : null}
            <button className="folderexplorer--button" onClick={() => setDeploy(!deploy)}>
                {deploy ? <RemoveIcon className='folderexplorer--icon' /> : <AddIcon className='folderexplorer--icon' />}
            </button>
            {deploy ? <Create
                itemType={id ? 'file' : 'folder'}
                createItem={createItem} />
                : null}

        </div>
    )
}
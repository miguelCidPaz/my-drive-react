import FolderIcon from '@mui/icons-material/Folder';
import { useState, useEffect } from 'react';

export const Item = ({ element, openWindow, deleteItem, downloadItem }) => {
    const [comprobate, setComprobate] = useState(null);

    const close = ({ name, id }) => {
        if (comprobate) {
            deleteItem(id, name, 'file')
        } else {
            deleteItem(id, name, 'folder')
        }
    }

    const open = () => {
        const itemName = element.name
        if (!comprobate) {
            openWindow(element.id)
        } else {
            const ext = itemName.split('.')[1]
            const nameFileInApi = `${element.id}.${ext}`
            downloadItem(nameFileInApi)
        }
    }

    useEffect(() => {
        console.log({ element });
        if (element !== undefined && element !== null) {
            const itemName = element.name
            setComprobate(itemName.split('.').length > 1)
        }

    }, [element])

    useEffect(() => {

    }, [comprobate])

    return (
        <div className="item--main">
            <button className="item--close"
                onClick={() => close(element)}>X</button>
            <button
                className='item--button'
                onClick={() => open()}
            >
                <FolderIcon className='item--icon' />
            </button>
            <p className="item--name">{element.name}</p>
        </div>
    )
}
import FolderIcon from '@mui/icons-material/Folder';
import { useState } from 'react';

export const Item = ({ element, openWindow, deleteItem, downloadItem }) => {
    const itemName = element.name
    const [comprobate, setComprobate] = useState(itemName.split('.').length > 1);

    const close = ({ name, id }) => {
        if (comprobate) {
            deleteItem(id, name, 'file')
        } else {
            deleteItem(id, name, 'folder')
        }
    }

    const open = () => {
        if (!comprobate) {
            openWindow(element.id)
        } else {
            const ext = itemName.split('.')[1]
            const nameFileInApi = `${element.id}.${ext}`
            console.log(nameFileInApi);
            downloadItem(nameFileInApi)
        }
    }

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